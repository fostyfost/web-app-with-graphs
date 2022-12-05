import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./styles.module.scss";
import * as d3 from "d3";
import useResizeObserver from "use-resize-observer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import DefNode from "./DefNode";
import NodeProperties from "./NodeProperties";

import { getGridPosition } from "../snapToGrid";

export const renderers = { def: DefNode, properties: NodeProperties };

const Node = ({
  id,
  scale = 1,
  node,
  getGraph,
  selected,
  state,
  onChange = () => {},
  onCreateEdge = () => {},
  onMouseOver = () => {},
  onMouseOut = () => {},
  onClick = () => {},
  className = "",
  x = 200,
  y = 200,
  types
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x, y });

  const element = useRef(null);
  const port = useRef(null);

  const { width = 160, height = 35 } = useResizeObserver({ ref: element });

  const update = () => {
    onChange({
      position,
      size: { width, height }
    });
  };

  useEffect(() => {
    onChange({
      size: { width, height }
    });
  }, [width, height]);

  // useEffect(() => {
  //   setPosition({ x, y });
  // }, [x, y]);

  const _getSubject = useCallback(
    event => {
      return {
        x: position.x * scale,
        y: position.y * scale
      };
    },
    [position, scale]
  );

  const _onDragStart = useCallback(event => {
    // d3.event.sourceEvent.stopPropagation();
    setIsDragging(true);
  }, []);

  const _onDragged = useCallback(
    event => {
      setPosition(
        getGridPosition({
          x: d3.event.x / scale,
          y: d3.event.y / scale
        })
      );
    },
    [scale]
  );

  const _onDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const _onPortDragStart = useCallback(() => {
    onCreateEdge();
  }, [onCreateEdge]);

  useEffect(() => {
    const elem = getGraph();
    const drag = d3
      .drag()
      .container(elem.current)
      .subject(_getSubject)
      .on("start", _onDragStart)
      .on("drag", _onDragged)
      .on("end", _onDragEnd);

    d3.select(element.current)
      .on("click", e => {
        d3.event.stopPropagation();
        onClick();
      })
      .call(drag);

    d3.select(port.current).on("mousedown", e => {
      d3.event.stopPropagation();
      _onPortDragStart();
    });
  }, [_onDragStart, _onDragged, _onDragEnd, _getSubject, _onPortDragStart]);

  useEffect(() => {
    update();
  }, [position]);

  const _className = `${styles.root} ${isDragging ? styles.dragging : ""} ${
    state ? styles[state] : ""
  } ${className ? className : ""}`;

  const NodeComponent = types[node.type].renderer || DefNode;

  return (
    <div
      style={{ left: position.x, top: position.y }}
      className={_className}
      ref={element}
      onMouseOver={() => {
        onMouseOver();
      }}
      onMouseOut={() => {
        onMouseOut();
      }}
    >
      <div className={styles.container}>
        <NodeComponent node={node} state={state} isDragging={isDragging} />
        <div ref={port} className={styles.port}>
          <FontAwesomeIcon className={styles.portIcon} icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};

export default Node;
