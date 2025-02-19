import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import TaskPage from './pages/TaskPage'
import HabitsPage from './pages/HabitsPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/tasks' element={<TaskPage />} />
        <Route path='/habits' element={<HabitsPage />} />
      </Routes>
    </>
  )
}

export default App
