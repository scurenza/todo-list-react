import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <FilterableTodoTable todos={TODOS} /> */}
      <TodoList />
    </div>
  );
}

const TODOS = [
  { text: "do the grocieries", done: false },
  { text: "pay the bills", done: true },
  { text: "study Cyfrin", done: false },
  { text: "let's get out", done: true },
];

export default App;
