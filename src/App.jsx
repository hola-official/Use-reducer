import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {count: state.count + 1}
    case "decrement":
      return {count: state.count - 1}
      default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  const [userInput, setUserInput] = useState("");
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState(false)
  return (
    <main className="App" style={{ color: color ? "#fff952" : "#000" }}>
      <input
        type="text"
        required
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <p>
        Renders: <code>{count}</code>
      </p>
      <br />
      <br />
      <section>
        {/* <button onClick={focusOnInput}>Focus</button> */}
        <button onClick={(() => dispatch({type: 'decrement'}))}>-</button>
        <button onClick={(() => dispatch({type: 'increament'}))}>+</button>
        <button onClick={(() => setColor(prev => !prev))}>Color</button>
      </section>

      <br />
      <br />

      <p>{userInput}</p>
    </main>
  );
}

export default App;
