import { useState, useRef } from "react";
import "./app.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  const todoNameRef = useRef();

  const handleClick = () => {
    const name = todoNameRef.current.value;
    setTasks((prev) => {
      return [...prev, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleChecked = (id) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.completed = !task.completed;
    setTasks(newTasks);
  };

  const handleDelete = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <div className="box">
        <h1>TodoList</h1>
        <TodoList tasks={tasks} toggleChecked={toggleChecked} />
        <div className="container">
          <input
            type="text"
            className="input"
            placeholder="Enter a task..."
            ref={todoNameRef}
          />
          <div className="btn">
            <button className="add" onClick={handleClick}>
              Add a task
            </button>
            <button className="delete" onClick={handleDelete}>
              Delete the chosen tasks
            </button>
          </div>
        </div>
        <div className="remaining">
          The Remaining Tasks: {tasks.filter((task) => !task.completed).length}
        </div>
      </div>
    </div>
  );
}

export default App;
