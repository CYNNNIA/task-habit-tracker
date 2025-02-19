import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h2>Task Habit Tracker</h2>
      <div>
        <Link to='/tasks'>Tasks</Link>
        <Link to='/habits'>Habits</Link>
      </div>
    </nav>
  )
}

export default Navbar
