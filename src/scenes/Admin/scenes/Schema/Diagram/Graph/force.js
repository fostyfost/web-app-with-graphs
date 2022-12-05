import * as cola from "webcola";

export const runLayout = ({ graph, onTick = () => {}, width, height }) => {
  const nodeIndex = {};
  const nodes = graph.nodes.map((d, i) => {
    nodeIndex[d.uuid] = i;
    return {
      ...d,
      ...d.size,
      ...d.position
    };
  });
  const edges = graph.edges.map(d => ({
    ...d,
    source: nodeIndex[d.source],
    target: nodeIndex[d.target]
  }));

  const layout = new cola.Layout()
    .convergenceThreshold(1e-4)
    .size([width, height])
    // .handleDisconnected(false)
    // .symmetricDiffLinkLengths(8)
    .linkDistance(200)
    .avoidOverlaps(true)
    .nodes(nodes)
    .links(edges)
    .on("start", e => {})
    .on("tick", e => {
      onTick();
    })
    .on("end", e => {});
  layout.start();

  return { nodes, edges };
};
