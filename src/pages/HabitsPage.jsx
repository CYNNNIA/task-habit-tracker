import HabitForm from '../components/HabitForm'
import HabitList from '../components/HabitList'
import "../styles/habits.css";

const HabitsPage = () => {
  return (
    <div className='main-container'>
      <h1>Seguimiento de Hábitos</h1>
      <div className="habit-container">
      <HabitForm />
      <HabitList />
    </div>
    </div>
  )
}

export default HabitsPage
