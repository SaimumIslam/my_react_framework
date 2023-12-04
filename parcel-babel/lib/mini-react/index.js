// import { updateDom, STATE_CURSOR } from "../mini-react-dom";

import { reRender } from "../../src/app";

const STATES = [];
let STATE_CURSOR = 0;

const useState = (initialState) => {
  const FROZEN_CURSOR = STATE_CURSOR;
  STATES[FROZEN_CURSOR] = STATES[FROZEN_CURSOR] || initialState;

  const setState = (newState) => {
    STATES[FROZEN_CURSOR] = newState;
    STATE_CURSOR = 0;
    reRender();
  };

  STATE_CURSOR++;
  return [STATES[FROZEN_CURSOR], setState];
};

const MiniReact = {
  Fragment: () => {},
  useState: useState,
  createElement: (tag, props, ...children) => {
    if (typeof tag === "function") return tag(props);

    const element = {
      tag,
      type: tag.type,
      key: tag.key,
      props: { ...props, children },
    };
    return element;
  },
};

// const MiniReact = {
//   Fragment: () => {},
//   createElement: (tag, props, ...children) => {
//     const element = {
//       tag,
//       type: tag.type,
//       key: tag.key,
//       props: props,
//       children: children,
//     };
//     return element;
//   },
// };

export default MiniReact;
