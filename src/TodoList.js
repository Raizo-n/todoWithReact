import React from "react";
import Todo from "./Todo";

const TodoList = ({ tasks }) => {
  return tasks.map((task) => <Todo task={task} key={task.id}/>);
};

export default TodoList;
