import HabitForm from '../components/HabitForm'
import HabitList from '../components/HabitList'

const HabitsPage = () => {
  return (
    <div className='main-container'>
      <h1>Seguimiento de Hábitos</h1>
      <HabitForm />
      <HabitList />
    </div>
  )
}

export default HabitsPage
