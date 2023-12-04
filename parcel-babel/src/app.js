import MiniReact from "../lib/mini-react"; // must be imported
import MiniReactDom from "../lib/mini-react-dom";

const App = () => {
  const [count, setCount] = MiniReact.useState(0);
  const [count1, setCount1] = MiniReact.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount1(count1 - 1);
  };

  return (
    <div data-x="data attribute test">
      <div>
        <h1>Count:{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <h1>Count:{count1}</h1>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div id="id-test">
        <h2>Mini Framework</h2>
        <input
          type="text"
          placeholder="Part 2: data binding & hooks coming soon"
        />
      </div>
    </div>
  );
};

export const reRender = () => {
  document.getElementById("app").firstChild.remove();
  MiniReactDom.render(<App />, document.getElementById("app"));
};

MiniReactDom.render(<App />, document.getElementById("app"));
