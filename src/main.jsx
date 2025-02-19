import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TaskProvider } from './context/TaskContext'
import { HabitsProvider } from './context/HabitsContext'
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
