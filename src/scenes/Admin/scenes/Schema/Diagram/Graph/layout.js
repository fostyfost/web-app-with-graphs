import * as dagre from "dagre";

export const runLayout = ({ graph, nodeKey }) => {
  const g = new dagre.graphlib.Graph();

  g.setGraph({ rankdir: "LR" });
  g.setDefaultEdgeLabel(() => ({}));

  graph.nodes.forEach(node => {
    const nodeId = node[nodeKey];

    // // prevent disconnected nodes from being part of the graph
    // if (
    //   nodesMapNode.incomingEdges.length === 0 &&
    //   nodesMapNode.outgoingEdges.length === 0
    // ) {
    //   return;
    // }

    // g.setNode(nodeId, { width: node.size.width, height: node.size.height });
    g.setNode(nodeId, { width: 160, height: 80 });
  });

  graph.edges.forEach(edge => {
    g.setEdge(edge.source, edge.target, { width: 160, height: 14 });
  });

  dagre.layout(g);

  return g.nodes().reduce((obj, id) => {
    const gNode = g.node(id);
    obj[id] = { x: gNode.x || 0, y: gNode.y || 0 };
    return obj;
  }, {});
};
