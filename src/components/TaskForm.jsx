import React, { useState } from 'react'
import { useTasks } from '../context/TaskContext'

function TaskForm() {
  const [taskName, setTaskName] = useState('')
  const { dispatch } = useTasks()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_TASK',
      payload: { id: Date.now(), name: taskName, completed: false }
    })
    setTaskName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder='Add a new task'
      />
      <button type='submit'>Add Task</button>
    </form>
  )
}

export default TaskForm
