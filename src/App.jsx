import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HabitsPage from './pages/HabitsPage'
import TaskPage from './pages/TaskPage'
import { HabitsProvider } from './context/HabitsContext'
import { TaskProvider } from './hooks/useTaskReducer' // ✅ Importamos desde hooks

const App = () => {
  return (
    <HabitsProvider>
      <TaskProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/habits' element={<HabitsPage />} />
            <Route path='/tasks' element={<TaskPage />} />
          </Routes>
        </Router>
      </TaskProvider>
    </HabitsProvider>
  )
}

export default App
