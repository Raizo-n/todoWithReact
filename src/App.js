import { useState, useRef } from "react";
import "./app.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Todo1", completed: false },
  ]);

  const todoNameRef = useRef();

  const handleClick = () => {
    const name = todoNameRef.current.value;
    setTasks((prev) => {
      return [...prev, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  return (
    <div className="app">
      <div className="box">
        <h1>TodoList</h1>
        <TodoList tasks={tasks} />
        <div className="container">
          <input
            type="text"
            className="input"
            placeholder="Enter a task"
            ref={todoNameRef}
          />
          <div className="btn">
            <button className="add" onClick={handleClick}>
              Add a task
            </button>
            <button className="delete">Delete the chosen tasks</button>
          </div>
        </div>
        <div className="remaining">The Remaining tasks: 0</div>
      </div>
    </div>
  );
}

export default App;
