import React from 'react'

const Todo = ({task}) => {
  return (
    <div>
        <label>
            <input type='checkbox' checked={task.completed} readOnly />
        </label>
        {task.name}
    </div>
  )
}

export default Todo
