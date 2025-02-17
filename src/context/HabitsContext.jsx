// Parece que hay un error debido a múltiples declaraciones de `createContext`, `useContext` y `useReducer`. Voy a corregir el archivo `HabitsContext.jsx` para evitar duplicaciones.

import { createContext, useContext, useReducer } from 'react'

const HabitsContext = createContext()

const habitsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_HABIT':
      return [...state, action.payload]
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

export const useHabits = () => useContext(HabitsContext)

// Eliminado el código duplicado de `TaskContext` aquí. Asegúrate de que `TaskContext.jsx` esté en la carpeta `hooks` y no haya más duplicados.
