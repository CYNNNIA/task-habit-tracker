import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='p-4 bg-gray-800 text-white flex justify-between items-center shadow-lg'>
      <h1 className='text-xl font-bold'>Task Habit Tracker</h1>
      <div className='space-x-4'>
        <Link to='/tasks' className='hover:underline'>
          Tasks
        </Link>
        <Link to='/habits' className='hover:underline'>
          Habits
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
