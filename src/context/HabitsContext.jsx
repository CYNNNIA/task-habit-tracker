import { createContext, useContext, useReducer, useEffect } from "react";


const HabitsContext = createContext();


const initialState = JSON.parse(localStorage.getItem("habits")) || [];


const habitsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HABIT":
      const newState = [...state, action.payload];
      localStorage.setItem("habits", JSON.stringify(newState));
      return newState;

    case "MARK_DAY":
      const updatedHabits = state.map((habit) =>
        habit.id === action.payload
          ? { ...habit, completedDays: habit.completedDays + 1 }
          : habit
      );
      localStorage.setItem("habits", JSON.stringify(updatedHabits));
      return updatedHabits;

    case "RESET_WEEK":
      const resetHabits = state.map((habit) => ({
        ...habit,
        completedDays: 0,
      }));
      localStorage.setItem("habits", JSON.stringify(resetHabits));
      return resetHabits;

    case "REMOVE_HABIT":
      const filteredHabits = state.filter((habit) => habit.id !== action.payload);
      localStorage.setItem("habits", JSON.stringify(filteredHabits));
      return filteredHabits;

    default:
      return state;
  }
};


export const HabitsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(habitsReducer, initialState);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(state));
  }, [state]);

  return (
    <HabitsContext.Provider value={{ habits: state, dispatch }}>
      {children}
    </HabitsContext.Provider>
  );
};


export const useHabitsContext = () => useContext(HabitsContext);