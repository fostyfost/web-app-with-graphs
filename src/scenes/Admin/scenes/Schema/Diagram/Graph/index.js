import React, {
  useEffect,
  useCallback,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef
} from "react";
import Node, { renderers as nodeRenderers } from "./Node";
import Edge from "./Edge";
import EdgeLabel from "./EdgeLabel";
import styles from "./styles.module.scss";

import * as d3 from "d3";
import useResizeObserver from "use-resize-observer";
import { runLayout } from "./layout";
import { runLayout as removeOverlap } from "./overlap";
import { runLayout as runForce } from "./force";

export const renderers = {
  node: nodeRenderers
};

const DEF_GRAPH_CONFIG = {
  nodes: {
    def: {
      renderer: renderers.node.def
    },
    property: {
      renderer: renderers.node.properties
    }
  },
  edges: {}
};

const ARROW_SIZE = 4;
const ends = [
  {
    id: "arrow",
    color: "#50cbe3"
  },
  {
    id: "arrow-hover",
    color: "#2d8b9e"
  }
];

const graphStyles = {
  nodes: {
    def: {},
    hovered: {},
    highlighted: {},
    selected: {},
    faded: {}
  },
  edges: {
    def: {
      markerEnd: "url(#arrow)"
    },
    hovered: {
      markerEnd: "url(#arrow-hover)"
    },
    highlighted: {},
    selected: {
      markerEnd: "url(#arrow-hover)"
    },
    faded: {}
  }
};

const getItemStyle = ({ type, selected, hovered }) => {
  let state = "def";
  if (selected) state = "selected";
  else if (hovered) state = "hovered";
  return graphStyles[type][state];
};

const getArrow = ({ id, color }) => {
  return (
    <marker
      id={id}
      orient="auto"
      preserveAspectRatio="none"
      viewBox="0 -5 10 10"
      refX={0}
      refY={0}
      markerWidth={ARROW_SIZE}
      markerHeight={ARROW_SIZE}
      fill={color}
    >
      <path d="M0,-5L10,0L0,5" />
    </marker>
  );
};

let zoom = null;
const zoomDur = 750;

const Graph = (
  {
    graph = {},
    nodeKey = "id",
    minScale = 1,
    maxScale = 10,
    style = {},
    selected = [],
    onSelectNode = () => {},
    onSelectEdge = () => {},
    onCreateEdge = () => {},
    onBackgroundClick = () => {},
    onChange = () => {},
    graphConfig = { nodes: {}, edges: {} }
  },
  ref
) => {
  const [nodeMap, setNodeMap] = useState({});
  const [edgeMap, setEdgeMap] = useState({});
  const [nodeEdges, setNodeEdges] = useState({});
  const [drawingEdge, setDrawingEdge] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(false);
  const [hoveredEdge, setHoveredEdge] = useState(false);

  const [triggerZoom, setTriggerZoom] = useState(false);

  const svgContainer = useRef(null);
  const htmlContainer = useRef(null);
  const container = useRef(null);
  const graphContainer = useRef(null);

  const { width = 0, height = 0 } = useResizeObserver({ ref: container });
  const [zoomTransform, setZoomTransform] = useState({ x: 0, y: 0, k: 1 });
  const [mousePosition, setMousePosition] = useState(false);

  const config = {
    nodes: { ...DEF_GRAPH_CONFIG.nodes, ...graphConfig.nodes },
    edges: { ...DEF_GRAPH_CONFIG.edges, ...graphConfig.edges }
  };

  const getScreenCoords = function(x, y) {
    return {
      x: x * zoomTransform.k + zoomTransform.x,
      y: y * zoomTransform.k + zoomTransform.y
    };
  };

  // translate node coordinates to the viewport domain
  const getGraphCoords = function(x, y) {
    return {
      x: (x - zoomTransform.x) / zoomTransform.k,
      y: (y - zoomTransform.y) / zoomTransform.k
    };
  };

  // initialize graph
  useEffect(() => {
    const _nodeMap = graph.nodes.reduce((obj, node, i) => {
      obj[node[nodeKey]] = {
        index: i,
        position: { x: 0, y: 0 },
        size: { width: 0, height: 0 },
        ...(nodeMap[node[nodeKey]] || {}), // maintain existing positions
        ...node
      };
      return obj;
    }, {});

    const _nodeEdges = {};
    const _edgeMap = graph.edges.reduce((obj, edge) => {
      const id = edge[nodeKey];
      if (!_nodeEdges[edge.source]) {
        _nodeEdges[edge.source] = [];
      }
      if (!_nodeEdges[edge.target]) {
        _nodeEdges[edge.target] = [];
      }
      _nodeEdges[edge.source].push({
        direction: "out",
        node: edge.target,
        edge: edge[nodeKey]
      });
      _nodeEdges[edge.target].push({
        direction: "in",
        node: edge.source,
        edge: edge[nodeKey]
      });

      obj[id] = {
        size: { width: 0, height: 0 },
        ...(edgeMap[id] || {}), // maintain existing positions
        ...edge
      };
      return obj;
    }, {});
    setNodeMap(_nodeMap);
    setEdgeMap(_edgeMap);
    setNodeEdges(_nodeEdges);

    // run layout on first render
    if (Object.keys(nodeMap).length === 0 && graph.nodes.length) {
      // dagre layout
      // const layout = runLayout({ graph, nodeKey });
      // Object.keys(_nodeMap).forEach(id => {
      //   const node = _nodeMap[id];
      //   _nodeMap[id] = {
      //     ...node,
      //     position: layout[node[nodeKey]],
      //     size: { width: 0, height: 0 }
      //   };
      // });

      //force layout
      const _graph = runForce({
        graph: {
          nodes: Object.keys(_nodeMap).map(id => _nodeMap[id]),
          edges: Object.keys(_edgeMap).map(id => _edgeMap[id])
        },
        width,
        height
      });
      _graph.nodes.forEach(d => {
        _nodeMap[d.uuid] = {
          ..._nodeMap[d.uuid],
          position: { x: d.x, y: d.y },
          size: { width: 0, height: 0 }
        };
      });

      setTimeout(() => {
        setTriggerZoom(true);
      }, 100);
    }
  }, [graph, nodeKey]);

  /**
   * Run after everything gets rendered
   */
  useEffect(() => {
    if (triggerZoom) {
      zoomToFit();
      setTriggerZoom(false);
    }
  }, [triggerZoom]);

  // update item state
  useEffect(() => {
    Object.keys(nodeMap).forEach(id => {
      nodeMap[id].state = { selected: false, highlighted: false };
    });
    Object.keys(edgeMap).forEach(id => {
      edgeMap[id].state = { selected: false, highlighted: false };
    });

    selected.forEach(d => {
      if (!!nodeMap[d]) {
        nodeMap[d].state.selected = true;

        const neighbors = nodeEdges[selected] || [];
        neighbors.forEach(n => {
          nodeMap[n.node].state.highlighted = true;
          edgeMap[n.edge].state.highlighted = true;
        });
      } else if (!!edgeMap[d]) {
        const edge = edgeMap[d];
        edgeMap[d].state.selected = true;
        nodeMap[edge.source].state.highlighted = true;
        nodeMap[edge.target].state.highlighted = true;
      }
    });
  }, [selected, nodeEdges, edgeMap, nodeMap]);

  const getItemState = ({ type, id }) => {
    let state = "def";
    const item = type === "node" ? nodeMap[id] : edgeMap[id];
    if (!selected.length) {
      if ((type === "node" ? hoveredNode : hoveredEdge) === id)
        return "hovered";
      return state;
    }
    state = ["selected", "highlighted"].find(s => item.state && item.state[s]);
    if (!state) return "faded";
    return state;
  };

  const _onDragStart = useCallback(e => {}, []);
  const _onDrag = useCallback(
    e => {
      setZoomTransform(d3.event.transform);
    },
    [setZoomTransform]
  );

  useEffect(() => {
    zoom = d3
      .zoom()
      .on("start", _onDragStart)
      // .on("end", _onDragEnd)
      .on("zoom", _onDrag);

    d3.select(container.current)
      .on("click", () => {
        onBackgroundClick();
      })
      .call(zoom);
  }, [_onDrag, _onDragStart, width, height]);

  const setZoom = ({ k = 1, x = 0, y = 0, dur = 750 }) => {
    const t = d3.zoomIdentity.translate(x, y).scale(k);

    d3.select(container.current)
      .transition()
      .duration(dur)
      .call(zoom.transform, t);
  };

  const zoomToFit = () => {
    let viewBounds = { x1: 0, y1: 0, x2: 0, y2: 0 };
    Object.keys(nodeMap).forEach((id, i) => {
      const node = nodeMap[id];
      const nodeRight = node.position.x + node.size.width;
      const nodeBottom = node.position.y + node.size.height;
      if (i === 0) {
        viewBounds = {
          x1: node.position.x,
          y1: node.position.y,
          x2: node.size.width,
          y2: node.size.height
        };
        return;
      }
      if (node.position.x < viewBounds.x1) {
        viewBounds.x1 = node.position.x;
      }
      if (node.position.y < viewBounds.y1) {
        viewBounds.y1 = node.position.y;
      }
      if (nodeRight > viewBounds.x2) {
        viewBounds.x2 = nodeRight;
      }
      if (nodeBottom > viewBounds.y2) {
        viewBounds.y2 = nodeBottom;
      }
    });
    const padding = 40;
    const viewBBox = {
      x: viewBounds.x1 - padding / 2,
      y: viewBounds.y1 - padding / 2,
      width: viewBounds.x2 - viewBounds.x1 + padding,
      height: viewBounds.y2 - viewBounds.y1 + padding
    };
    const parent = container.current;
    const width = parent.clientWidth;
    const height = parent.clientHeight;
    const minZoom = 0; // this.props.minZoom || 0;
    const maxZoom = 2; // this.props.maxZoom || 2;

    const next = {
      k: (minZoom + maxZoom) / 2,
      x: 0,
      y: 0
    };

    if (viewBBox.width > 0 && viewBBox.height > 0) {
      // There are entities
      const dx = viewBBox.width;
      const dy = viewBBox.height;
      const x = viewBBox.x + viewBBox.width / 2;
      const y = viewBBox.y + viewBBox.height / 2;

      next.k = 0.9 / Math.max(dx / width, dy / height);

      if (next.k < minZoom) {
        next.k = minZoom;
      } else if (next.k > maxZoom) {
        next.k = maxZoom;
      }

      next.x = width / 2 - next.k * x;
      next.y = height / 2 - next.k * y;
    }

    setZoom({ ...next, zoomDur });
  };

  const panTo = (entityBBox, zoom) => {
    const parent = container.current;
    const maxZoom = 2; // this.props.maxZoom || 2;

    const width = parent.clientWidth;
    const height = parent.clientHeight;

    const next = {
      k: zoomTransform.k,
      x: 0,
      y: 0
    };

    const x = entityBBox.x + entityBBox.width / 2;
    const y = entityBBox.y + entityBBox.height / 2;

    if (zoom) {
      next.k =
        0.9 / Math.max(entityBBox.width / width, entityBBox.height / height);

      if (next.k > maxZoom) {
        next.k = maxZoom;
      }
    }

    next.x = width / 2 - next.k * x;
    next.y = height / 2 - next.k * y;

    setZoom(next);
  };

  const panToNode = (id, zoom = false) => {
    const node = nodeMap[id];
    if (!node) return;
    const padding = 200;
    const bbox = {
      x: node.position.x - padding / 2,
      y: node.position.y - padding / 2,
      width: node.size.width + padding,
      height: node.size.height + padding
    };
    panTo(bbox, false);
  };

  const panToEdge = (id, zoom = false) => {
    // const edge = edgeRefs.current[id];
    // panTo(edge, zoom);
  };

  useImperativeHandle(ref, () => ({
    panToNode,
    panToEdge
  }));

  const _onMouseUp = useCallback(
    e => {
      if (drawingEdge) {
        if (hoveredNode) {
          onCreateEdge({ src: drawingEdge.node, dst: hoveredNode });
        }
        setDrawingEdge(false);
        setMousePosition(false);
      }
    },
    [drawingEdge, hoveredNode, setDrawingEdge]
  );

  const _onMouseMove = useCallback(
    e => {
      var rect = container.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    },
    [setMousePosition]
  );

  // events for dragging a connection
  useEffect(() => {
    if (drawingEdge) {
      window.addEventListener("mouseup", _onMouseUp);
      window.addEventListener("mousemove", _onMouseMove);
    } else {
      window.removeEventListener("mouseup", _onMouseUp);
      window.removeEventListener("mousemove", _onMouseMove);
    }
    return () => {
      window.removeEventListener("mouseup", _onMouseUp);
      window.removeEventListener("mousemove", _onMouseMove);
    };
  }, [_onMouseUp, _onMouseMove, drawingEdge]);

  const _onNodeChange = nextNode => {
    setNodeMap({
      ...nodeMap,
      [nextNode[nodeKey]]: nextNode
    });
    // onChange({ ...graph, nodes: newNodes });
  };

  const _onEdgeLabelChange = nextEdge => {
    setEdgeMap({
      ...edgeMap,
      [nextEdge[nodeKey]]: nextEdge
    });
  };

  /***
   * Calculate edge positions
   */
  const _edgeMap = {};
  Object.keys(edgeMap).forEach(id => {
    const edge = edgeMap[id];
    if (!(nodeMap[edge.source] && nodeMap[edge.target])) return;
    const source = nodeMap[edge.source];
    const target = nodeMap[edge.target];

    // const src = {
    //   left: source.position.x,
    //   right: source.position.x + source.size.width,
    //   top: source.position.y,
    //   bottom: source.position.y + source.size.height,
    //   width: source.size.width,
    //   height: source.size.height,
    //   center: {
    //     x: source.position.x + source.size.width / 2,
    //     y: source.position.y + source.size.height / 2
    //   }
    // };
    // const tgt = {
    //   left: target.position.x,
    //   right: target.position.x + target.size.width,
    //   top: target.position.y,
    //   bottom: target.position.y + target.size.height,
    //   width: target.size.width,
    //   height: target.size.height,
    //   center: {
    //     x: target.position.x + target.size.width / 2,
    //     y: target.position.y + target.size.height / 2
    //   }
    // };

    let x1 = source.position.x + source.size.width / 2;
    let x2 = target.position.x + target.size.width / 2;
    let y1 = source.position.y + source.size.height / 2;
    let y2 = target.position.y + target.size.height / 2;

    // if (tgt.left > src.right) {
    //   x1 = src.right;
    //   x2 = tgt.left - 12;
    // } else if (tgt.right < src.left) {
    //   x1 = src.left;
    //   x2 = tgt.right + 12;
    // } else if (tgt.top > src.bottom) {
    //   y1 = src.bottom;
    //   y2 = tgt.top - 12;
    // } else {
    //   y1 = src.top;
    //   y2 = tgt.bottom + 12;
    // }

    const { width, height } = edge.size;
    const neighbors = nodeEdges[edge.source].filter(
      d => d.node === edge.target
    );
    const count = neighbors.findIndex(d => d.edge === edge.uuid);

    // probably shuold run an overlap alg
    const labelHeight = 24;
    const midpoint = {
      x: x1 + (x2 - x1) / 2,
      y: y1 + (y2 - y1) / 2
    };
    const totalHeight = neighbors.length * labelHeight;
    const start = midpoint.y - totalHeight / 2;
    midpoint.y = start + count * labelHeight;

    _edgeMap[id] = {
      ...edge,
      source: nodeMap[edge.source] || null,
      target: nodeMap[edge.target] || null,
      position: {
        x: midpoint.x - width / 2,
        y: midpoint.y - height / 2,
        points: [
          { x: x1, y: y1 },
          { x: midpoint.x, y: midpoint.y }, // make sure the edge goes under the edge label
          { x: x2, y: y2 }
        ],
        label: midpoint
      }
    };
  });

  // probably should only run this after layout algorithm
  // const rects = removeOverlap({
  //   graph: {
  //     nodes: Object.keys(nodeMap).map(id => nodeMap[id]),
  //     edges: Object.keys(_edgeMap).map(id => _edgeMap[id])
  //   }
  // });

  return (
    <div
      ref={container}
      className={`${styles.container} ${drawingEdge ? styles.drawingEdge : ""}`}
    >
      <div
        className={`${styles.root}`}
        style={{
          ...style,
          width: width,
          height: height,
          transform: `translate(${zoomTransform.x}px, ${
            zoomTransform.y
          }px) scale(${zoomTransform.k})`
        }}
        ref={graphContainer}
      >
        <svg ref={svgContainer} className={styles.svg}>
          <defs>{ends.map(d => getArrow(d))}</defs>
          <g>
            {Object.keys(_edgeMap).map(id => {
              const edge = _edgeMap[id];
              const _styles = getItemStyle({
                type: "edges",
                selected: selected.includes(id),
                hovered: hoveredEdge === id
              });
              return (
                <Edge
                  key={id}
                  state={getItemState({ type: "edge", id })}
                  source={edge.source}
                  target={edge.target}
                  points={edge.position.points}
                  onMouseOver={() => {
                    setHoveredEdge(id);
                  }}
                  onMouseOut={() => {
                    setHoveredEdge(false);
                  }}
                  onClick={() => {
                    console.log("EDGE CLICK", edgeMap[id]);
                    onSelectEdge(edgeMap[id]);
                  }}
                  style={_styles}
                />
              );
            })}
          </g>
          <g>
            {!!(drawingEdge && mousePosition) && (
              <Edge
                source={nodeMap[drawingEdge.node]}
                target={{
                  position: getGraphCoords(mousePosition.x, mousePosition.y),
                  size: { width: 1, height: 1 }
                }}
              />
            )}
          </g>
          {/* <g>
            {rects.map(d => (
              <rect
                x={d.x}
                y={d.y}
                width={d.X - d.x}
                height={d.Y - d.y}
                style={{
                  fill: "rgb(0,0,255)",
                  opacity: 0.5
                }}
              />
            ))}
          </g> */}
        </svg>
        <div className={styles.nodes} ref={htmlContainer}>
          {Object.keys(nodeMap).map(id => {
            const node = nodeMap[id];
            return (
              <Node
                className={styles.node}
                state={getItemState({ type: "node", id })}
                scale={zoomTransform.k}
                key={`node_${id}`}
                node={node}
                id={id}
                getGraph={() => graphContainer}
                onChange={nodeJSON => {
                  _onNodeChange({ ...node, ...nodeJSON });
                }}
                onCreateEdge={() => {
                  setDrawingEdge({ node: id });
                }}
                onMouseOver={() => {
                  setHoveredNode(id);
                }}
                onMouseOut={() => {
                  setHoveredNode(false);
                }}
                onClick={() => {
                  onSelectNode(id);
                }}
                x={node.position ? node.position.x : 0}
                y={node.position ? node.position.y : 0}
                label={nodeMap[id].label}
                types={config.nodes}
              />
            );
          })}
        </div>
        <div className={styles.edgeLabels}>
          {Object.keys(_edgeMap).map(id => {
            const edge = _edgeMap[id];
            return (
              <EdgeLabel
                edge={edge}
                state={getItemState({ type: "edge", id })}
                label={edge.label}
                x={edge.position.label.x}
                y={edge.position.label.y}
                onChange={d => {
                  _onEdgeLabelChange({ ...edgeMap[id], ...d });
                }}
                onMouseOver={() => {
                  setHoveredEdge(id);
                }}
                onMouseOut={() => {
                  setHoveredEdge(false);
                }}
                onClick={() => {
                  console.log("EDGE CLICK");
                  onSelectEdge(edgeMap[id]);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Graph);
