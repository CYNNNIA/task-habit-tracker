import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HabitsProvider } from './context/HabitsContext'
import { TaskProvider } from './hooks/useTaskReducer'
import App from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HabitsProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </HabitsProvider>
    </BrowserRouter>
  </React.StrictMode>
)
