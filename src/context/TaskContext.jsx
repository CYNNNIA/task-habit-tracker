// **Creación de TasksContext.jsx**
import { createContext, useContext, useReducer } from 'react'

const TasksContext = createContext()

const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload]
    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload)
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      )
    default:
      return state
  }
}

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, [])

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => useContext(TasksContext)

// **Creación de HabitsContext.jsx**
import { createContext, useContext, useReducer } from 'react'

const HabitsContext = createContext()

const habitsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_HABIT':
      return [...state, action.payload]
    case 'REMOVE_HABIT':
      return state.filter((habit) => habit.id !== action.payload)
    case 'TOGGLE_HABIT':
      return state.map((habit) =>
        habit.id === action.payload
          ? { ...habit, completed: !habit.completed }
          : habit
      )
    default:
      return state
  }
}

export const HabitsProvider = ({ children }) => {
  const [habits, dispatch] = useReducer(habitsReducer, [])

  return (
    <HabitsContext.Provider value={{ habits, dispatch }}>
      {children}
    </HabitsContext.Provider>
  )
}

export const useHabits = () => useContext(HabitsContext)
