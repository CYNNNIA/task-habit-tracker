// Configuración de rutas con react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HabitsPage from './pages/HabitsPage'
import TaskPage from './pages/TaskPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HabitsPage />} />
        <Route path='/tasks' element={<TaskPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
