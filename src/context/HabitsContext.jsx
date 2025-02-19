import { createContext, useContext, useReducer } from 'react'

const HabitsContext = createContext()

export const useHabits = () => useContext(HabitsContext)

const habitsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_HABIT':
      return [...state, action.payload] // payload ya contiene el nombre
    case 'MARK_DAY':
      return state.map((habit) =>
        habit.id === action.payload
          ? { ...habit, completedDays: habit.completedDays + 1 }
          : habit
      )
    case 'RESET_WEEK':
      return state.map((habit) => ({ ...habit, completedDays: 0 }))
    case 'REMOVE_HABIT':
      return state.filter((habit) => habit.id !== action.payload)
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