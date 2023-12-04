import domEvents from "./dom-events";

function render(element, container) {
  if (["string", "number"].includes(typeof element)) {
    const textNode = document.createTextNode(element?.toString());
    container?.appendChild(textNode);
    return;
  }

  const { tag, props } = element || {};
  const actualDOMElement = document.createElement(tag);

  const isAttribute = (property) => property != "children";
  const isListener = (property) => {
    const eventType = property.toLowerCase().substring(2);
    return property.startsWith("on") && domEvents.includes(eventType);
  };

  Object.keys(props)
    .filter(isAttribute)
    .forEach((attribute) => {
      if (isListener(attribute)) {
        const eventType = attribute.toLowerCase().substring(2);
        actualDOMElement.addEventListener(eventType, props[attribute]);
      } else {
        actualDOMElement[attribute] = props[attribute];
      }
    });

  // Render children inside this element
  props?.children.forEach((child) => {
    render(child, actualDOMElement);
  });

  container?.appendChild(actualDOMElement);
}

export default { render };

// export function render(element, container) {
//   if (["string", "number"].includes(typeof element)) {
//     const textNode = document.createTextNode(element?.toString());
//     container?.appendChild(textNode);
//     return;
//   }

//   const { tag, props, children } = element;
//   const domElement = document.createElement(tag);

//   // Apply Props to actual DOM Element
//   Object.keys(props)
//     .filter((obj_key) => obj_key !== "children")
//     .forEach((attribute) => {
//       domElement[attribute] = props[attribute];
//     });

//   // Render children inside this element
//   children.forEach((child) => {
//     render(child, domElement);
//   });

//   container?.appendChild(domElement);
// }
