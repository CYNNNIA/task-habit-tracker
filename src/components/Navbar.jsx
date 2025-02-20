import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h2>Task & Habit Tracker</h2>
      <div>
        <Link to='/tasks'>Tareas</Link>
        <Link to='/habits'>Hábitos</Link>
        <Link to='/statistics'>Estadísticas</Link>
      </div>
    </nav>
  )
}

export default Navbar
