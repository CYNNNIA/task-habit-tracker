import { createContext, useContext, useReducer } from "react";
import "../styles/task.css";

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const updatedTasks = [...state, action.payload];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
      return updatedTasks;

    case "DELETE_TASK":
      const filteredTasks = state.filter(task => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(filteredTasks)); 
      return filteredTasks;

    case "TOGGLE_TASK":
      const toggledTasks = state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem("tasks", JSON.stringify(toggledTasks)); 
      return toggledTasks;

    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error("Error al cargar las tareas de localStorage", error);
      return [];
    }
  });

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);