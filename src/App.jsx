import { useRef, useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
const [count, setCount] = useState(0)
const [color, setColor] = useState(false)
  return (
    <main className="App" style={{color: color ? "#fff" : "#fff92"}}>
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
        <button onClick={(() => setColor(prev => !prev))}>Start</button>
      </section>
      <button onClick={resetTimer}>Reset</button>
      <br />
      <br />

      <p>Seconds: {seconds}</p>

      <br />
      <br />

      <p>{randomInput}</p>
    </main>
  );
}

export default App;
