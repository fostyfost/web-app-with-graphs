import React from "react";
import styles from "./styles.module.scss";
import { Shapes, Intersection } from "kld-intersections";
import * as d3 from "d3";

const arrowSize = { height: 4, width: 4 };

const getHorizontalPathFromPoints = points => {
  return points
    .map((d, i) => {
      if (i === 0) return `M${d.x},${d.y}`;
      const prev = points[i - 1];
      const midX = (d.x + prev.x) / 2;
      return `C${midX},${prev.y} ${midX},${d.y} ${d.x},${d.y}`;
    })
    .join(" ");
};

const getPathFromPoints = points => {
  return d3
    .line()
    .curve(d3.curveCardinal)
    .x(d => d.x)
    .y(d => d.y)(points);
};

const getHorizontalPath = (x1, y1, x2, y2, curvature) => {
  const midX = (x1 + x2) / 2;
  return `M${x1},${y1}C${midX},${y1} ${midX},${y2} ${x2},${y2}`;
};

function calculateOffset(src, trg, includesArrow, pathGen) {
  return getRectIntersect(src, trg, includesArrow, pathGen);
}

function getRectIntersect(
  src,
  trg,
  includesArrow = false,
  pathGen,
  curvature = 1
) {
  const response = {};
  const x1 = trg.center.x > src.center.x ? src.right : src.left;
  const x2 = trg.center.x > src.center.x ? trg.left : trg.right;
  const pathStr = pathGen(x1, src.center.y, x2, trg.center.y, curvature);
  const path = Shapes.path(pathStr);
  const rectangle = Shapes.rectangle(trg.left, trg.top, trg.width, trg.height);

  const pathIntersect = Intersection.intersect(path, rectangle);

  if (pathIntersect.points.length > 0) {
    let arrowWidth = 0;
    let arrowHeight = 0;
    const xIntersect = pathIntersect.points[0].x;
    const yIntersect = pathIntersect.points[0].y;

    if (
      xIntersect > trg.left &&
      xIntersect < trg.right &&
      yIntersect > trg.center.y
    ) {
      arrowHeight = arrowSize.height;
    } else if (
      xIntersect > trg.left &&
      xIntersect < trg.right &&
      yIntersect < trg.center.y
    ) {
      arrowHeight = -arrowSize.height;
    } else if (
      yIntersect > trg.top &&
      yIntersect < trg.bottom &&
      xIntersect < trg.center.x
    ) {
      arrowWidth = -arrowSize.width;
    } else {
      arrowWidth = arrowSize.width;
    }

    response.xOff =
      trg.center.x - xIntersect - (includesArrow ? arrowWidth / 1.25 : 0);
    response.yOff =
      trg.center.y - yIntersect - (includesArrow ? arrowHeight / 1.25 : 0);
    response.intersect = pathIntersect.points[0];
  }

  return response;
}

function getRectIntersect2(points, trg, includesArrow = false) {
  const response = {};
  const pathStr = getPathFromPoints(points);
  const path = Shapes.path(pathStr);
  const rectangle = Shapes.rectangle(trg.left, trg.top, trg.width, trg.height);

  const pathIntersect = Intersection.intersect(path, rectangle);

  if (pathIntersect.points.length > 0) {
    let arrowWidth = 0;
    let arrowHeight = 0;
    const xIntersect = pathIntersect.points[0].x;
    const yIntersect = pathIntersect.points[0].y;

    if (
      xIntersect > trg.left &&
      xIntersect < trg.right &&
      yIntersect > trg.center.y
    ) {
      arrowHeight = arrowSize.height;
    } else if (
      xIntersect > trg.left &&
      xIntersect < trg.right &&
      yIntersect < trg.center.y
    ) {
      arrowHeight = -arrowSize.height;
    } else if (
      yIntersect > trg.top &&
      yIntersect < trg.bottom &&
      xIntersect < trg.center.x
    ) {
      arrowWidth = -arrowSize.width;
    } else {
      arrowWidth = arrowSize.width;
    }

    response.xOff =
      trg.center.x - xIntersect - (includesArrow ? arrowWidth / 1.25 : 0);
    response.yOff =
      trg.center.y - yIntersect - (includesArrow ? arrowHeight / 1.25 : 0);
    response.intersect = pathIntersect.points[0];
  }

  return response;
}

const getPath = (source, target) => {
  const src = {
    left: source.position.x,
    right: source.position.x + source.size.width,
    top: source.position.y,
    bottom: source.position.y + source.size.height,
    width: source.size.width,
    height: source.size.height,
    center: {
      x: source.position.x + source.size.width / 2,
      y: source.position.y + source.size.height / 2
    }
  };
  const tgt = {
    left: target.position.x,
    right: target.position.x + target.size.width,
    top: target.position.y,
    bottom: target.position.y + target.size.height,
    width: target.size.width,
    height: target.size.height,
    center: {
      x: target.position.x + target.size.width / 2,
      y: target.position.y + target.size.height / 2
    }
  };

  const pathGen = getHorizontalPath;
  let x1 = src.center.x;
  let x2 = tgt.center.x;
  const y1 = src.center.y;
  const y2 = tgt.center.y;

  if (tgt.center.x > src.center.x) {
    x1 = src.right;
    x2 = tgt.left - 12;
  } else {
    x1 = src.left;
    x2 = tgt.right + 12;
  }

  return {
    textPos: {
      x: x1 + (x2 - x1) / 2,
      y: y1 + (y2 - y1) / 2
    },
    string: pathGen(x1, y1, x2, y2)
  };
};

const Edge = ({ points, source, target, style, state, onClick = () => {} }) => {
  let path = getPath(source, target).string;
  // ? getHorizontalPathFromPoints(points)
  // : getPath(source, target).string;

  if (points) {
    const src = {
      left: source.position.x,
      right: source.position.x + source.size.width,
      top: source.position.y,
      bottom: source.position.y + source.size.height,
      width: source.size.width,
      height: source.size.height,
      center: {
        x: source.position.x + source.size.width / 2,
        y: source.position.y + source.size.height / 2
      }
    };
    const tgt = {
      left: target.position.x,
      right: target.position.x + target.size.width,
      top: target.position.y,
      bottom: target.position.y + target.size.height,
      width: target.size.width,
      height: target.size.height,
      center: {
        x: target.position.x + target.size.width / 2,
        y: target.position.y + target.size.height / 2
      }
    };

    const srcOff = getRectIntersect2(points, src, false);
    const trgOff = getRectIntersect2(points, tgt, true);
    points[0].x -= srcOff.xOff;
    points[0].y -= srcOff.yOff;
    points[points.length - 1].x -= trgOff.xOff;
    points[points.length - 1].y -= trgOff.yOff;
    path = getPathFromPoints(points);
  }

  // const srcOff = calculateOffset(tgt, src, false, pathGen);
  // const trgOff = calculateOffset(src, tgt, true, pathGen);
  /*
    {
      x: src.center.x - srcOff.xOff,
      y: src.center.y - srcOff.yOff
    },
    {
      x: tgt.center.x - trgOff.xOff,
      y: tgt.center.y - trgOff.yOff
    }
    */

  const _style = {
    markerEnd: "url(#arrow)",
    strokeWidth: "2px",
    stroke: "#50cbe3",
    ...(style || {})
  };

  const _className = `${styles.root} ${state ? styles[state] : ""}`;

  return (
    <g>
      <path
        onClick={onClick}
        markerEnd={_style.markerEnd}
        strokeWidth={_style.strokeWidth}
        stroke={_style.stroke}
        className={_className}
        d={path}
      />
    </g>
  );
};

export default Edge;
