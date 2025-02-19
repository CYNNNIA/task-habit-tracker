import { createContext, useContext, useReducer } from 'react'
import useTaskReducer from '../hooks/useTaskReducer'

const TaskContext = createContext()

export const useTaskContext = () => useContext(TaskContext)

export const TaskProvider = ({ children }) => {
  const { state, dispatch } = useTaskReducer()

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext
