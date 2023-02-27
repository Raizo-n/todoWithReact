import React from "react";
import Todo from "./Todo";

const TodoList = ({ tasks, toggleChecked }) => {
  return tasks.map((task) => (
    <Todo task={task} key={task.id} toggleChecked={toggleChecked} />
  ));
};

export default TodoList;
