export const mouseEvents = [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseover",
  "mouseout",
];
export const formEvents = [
  "submit",
  "reset",
  "change",
  "focus",
  "blur",
  "input",
];

export const keyboardEvents = ["keydown", "keyup", "keypress"];
export const windowEvents = ["load", "resize", "scroll", "unload"];
export const touchEvents = ["touchstart", "touchmove", "touchend"];

export default [
  ...formEvents,
  ...touchEvents,
  ...mouseEvents,
  ...windowEvents,
  ...keyboardEvents,
  "DOMContentLoaded",
];
