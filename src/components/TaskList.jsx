import React from 'react'
import { useTasks } from '../context/TaskContext'

function TaskList() {
  const { tasks, dispatch } = useTasks()

  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id })
  }

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id })
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.name}
          </span>
          <button onClick={() => handleToggle(task.id)}>Toggle</button>
          <button onClick={() => handleRemove(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
