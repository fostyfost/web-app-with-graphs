import React, { useState, useRef, useEffect } from "react";
import GraphView, { renderers } from "./Graph";

import { useSelector, useDispatch } from "react-redux";
import { selectType, selectInfo, setActiveType } from "../typeSlice";

import Sidebar from "../Sidebar";
import { openModal } from "../../modals/modalsSlice";
import {
  faLightbulb,
  faTags,
  faTools,
  faBuilding,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  faLightbulb,
  faTags,
  faTools,
  faBuilding,
  faUser
};

const NODE_KEY = "uuid";
const getEdgeId = ({ source, type, target }) => `${source}_${type}_${target}`;

const Graph = ({ schema, type }) => {
  const dispatch = useDispatch();
  const activeType = useSelector(selectType);
  const info = useSelector(selectInfo);

  const [graph, setGraph] = useState({ nodes: [], edges: [] });
  const [showProperties, setShowProperties] = useState(false);

  const setSelected = d => {
    dispatch(setActiveType(d));
  };
  const graphRef = useRef(null);

  let selected = activeType ? [activeType] : [];
  if (info.type === "connection") {
    selected = graph.edges.filter(e => e.type === activeType).map(d => d.uuid);
  }

  useEffect(() => {
    const nodeType = showProperties ? "property" : "def";
    const nodes = schema.elements.map(d => ({
      uuid: d.uuid,
      label: d.name,
      icon: d.extraData && d.extraData.icon && icons[d.extraData.icon],
      color: d.extraData && d.extraData.color,
      properties: d.properties,
      type: nodeType
    }));
    const edges = [];
    schema.connections.forEach(d => {
      if (!d.srcDstTypes) return;
      d.srcDstTypes.forEach((e, i) => {
        const edgeId = getEdgeId({
          source: e[0],
          type: d.uuid,
          target: e[1]
        });
        const edge = {
          uuid: edgeId,
          type: d.uuid,
          label: d.name,
          source: e[0],
          target: e[1]
        };
        edges.push(edge);
      });
    });
    setGraph({ nodes, edges });
  }, [schema.elements, schema.connections, showProperties]);

  useEffect(() => {
    graphRef.current.panToNode(activeType);
  }, [activeType]);

  return (
    <div className="schema-diagram">
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "260px",
          zIndex: 20
        }}
      >
        <label>
          <input
            type="checkbox"
            checked={showProperties}
            onChange={event => {
              setShowProperties(event.target.checked);
            }}
          />
          Show Properties
        </label>
      </div>
      <div className="schema-diagram-content">
        <div className="canvas">
          <GraphView
            ref={graphRef}
            nodeKey={NODE_KEY}
            graph={graph}
            onChange={newGraphJSON => {}}
            selected={selected}
            onSelectNode={uuid => {
              setSelected({ uuid });
            }}
            onSelectEdge={edge => {
              setSelected({ uuid: edge.type });
            }}
            onBackgroundClick={node => {
              setSelected(false);
            }}
            onCreateEdge={edge => {
              dispatch(
                openModal({
                  modalType: "AddConnection",
                  modalProps: {
                    source: edge.src,
                    target: edge.dst
                  }
                })
              );
            }}
          />
        </div>
        <Sidebar type={activeType} isOpen={!!activeType} />
      </div>
    </div>
  );
};

export default Graph;

/**
 * Click edge
 * Instance - source->type->target
 * Edge - type
 *
 *
 */
