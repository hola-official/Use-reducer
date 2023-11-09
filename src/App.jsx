import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 }
    case "decrement":
      return { ...state, count: state.count - 1 }
    case 'newUserInput':
      return { ...state, userInput: action.payload }
    case 'tgColor':
      return { ...state, color: !state.color }
    default:
      throw new Error();
  }
}

const ACTION = () => {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TG_COLOR: 'tgColor'
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', color: false })
  // const [userInput, setUserInput] = useState("");
  // const [count, setCount] = useState(0)
  // const [color, setColor] = useState(false)

  return (
    <main className="App" style={{ color: state.color ? "#fff952" : "#000" }}>
      <input
        type="text"
        required
        value={state.userInput}
        onChange={(e) => dispatch({ type: 'newUserInput, payload: e.target.value' })}
      />
      <p>
        Renders: <code>{state.count}</code>
      </p>
      <br />
      <br />
      <section>
        {/* <button onClick={focusOnInput}>Focus</button> */}
        <button onClick={(() => dispatch({ type: 'decrement' }))}>-</button>
        <button onClick={(() => dispatch({ type: 'increment' }))}>+</button>
        <button onClick={(() => dispatch({ type: 'tgColor' }))}>Color</button>
      </section>

      <br />
      <br />

      <p>{state.userInput}</p>
    </main>
  );
}

export default App;
