import * as cola from "webcola";

export const runLayout = ({ graph, nodeKey }) => {
  const rects = [...graph.nodes, ...graph.edges];
  const rs = rects.map(
    d =>
      new cola.Rectangle(
        d.position.x,
        d.position.x + d.size.width,
        d.position.y,
        d.position.y + d.size.height
      )
  );

  cola.removeOverlaps(rs);

  rects.forEach((elem, i) => {
    elem.position.x = rs[i].x;
    elem.position.y = rs[i].y;
  });

  return rs;
};
