import React, { useState } from "react";
import { animated, useTransition } from "react-spring";

/**
 * header component for transitions
 * @param data
 * @param index
 * @param Component
 * @returns {*}
 * @constructor
 */
export const Header = ({ data, index, as: Component }) => {
  const [prev] = useState({ index });

  // transitions
  const transitions = useTransition(index, (p) => p, {
    from: (newIdx) => {
      const dir = newIdx - prev.index;
      prev.index = newIdx;
      return { opacity: 0, transform: `translate3d(0, ${100 * dir}%, 0)` };
    },
    enter: () => {
      return { opacity: 1, transform: `translate3d(0, 0%, 0)` };
    },
    leave: (newIdx) => {
      const dir = newIdx - index;
      return { opacity: 0, transform: `translate3d(0, ${100 * dir}%, 0)` };
    },
  });
  return (
    <div className="header #box">
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div key={key} style={props}>
            <Component data={data[item]} />
          </animated.div>
        );
      })}
    </div>
  );
};
