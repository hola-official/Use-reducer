import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {count: state.count + 1}
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
        <button onClick={(() => setCount(prev => prev - 1))}>-</button>
        <button onClick={(() => setCount(prev => prev + 1))}>+</button>
        <button onClick={(() => setColor(prev => !prev))}>Color</button>
      </section>

      <br />
      <br />

      <p>{userInput}</p>
    </main>
  );
}

export default App;
