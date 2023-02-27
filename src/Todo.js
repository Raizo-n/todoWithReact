import React from "react";

const Todo = ({ task, toggleChecked }) => {
  const handleChecked = () => {
    toggleChecked(task.id);
  };

  return (
    <div style={{textAlign: 'center', margin: '5px 0'}}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          readOnly
          onChange={handleChecked}
        />
      </label>
      {task.name}
    </div>
  );
};

export default Todo;
