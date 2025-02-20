import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import TaskPage from './pages/TaskPage'
import HabitsPage from './pages/HabitsPage'
import Statistics from './components/Statistics'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/tasks' element={<TaskPage />} />
        <Route path='/habits' element={<HabitsPage />} />
        <Route path='/statistics' element={<Statistics />} />
      </Routes>
    </>
  )
}

export default App
