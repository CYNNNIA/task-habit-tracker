import { useHabits } from '../context/HabitsContext'

const HabitList = () => {
  const { habits, dispatch } = useHabits()

  const markDayComplete = (id) => {
    dispatch({ type: 'MARK_DAY', payload: id })
  }

  const resetWeek = () => {
    dispatch({ type: 'RESET_WEEK' })
  }

  const removeHabit = (id) => {
    dispatch({ type: 'REMOVE_HABIT', payload: id })
  }

  return (
    <div className='habit-list'>
  <h2>Lista de Hábitos</h2>
  {habits.length === 0 ? (
    <p>No hay hábitos aún.</p>
  ) : (
    habits.map((habit) => (
      <div key={habit.id} className='habit-item'>
        <h3>{habit.name}</h3>
        <p>Progreso: {habit.completedDays}/7 días ({Math.round((habit.completedDays / 7) * 100)}%)</p>
        <div className='habit-progress'>
          <div
            className='habit-progress-bar'
            style={{ width: `${(habit.completedDays / 7) * 100}%` }}
          ></div>
        </div>
        <button onClick={() => markDayComplete(habit.id)} className='complete'>
          ✅ Día Completado
        </button>
        <button onClick={() => removeHabit(habit.id)} className='delete'>
          🗑️ Eliminar
        </button>
      </div>
    ))
  )}
  {habits.length > 0 && (
    <button onClick={resetWeek} className='reset-btn'>
      🔄 Reiniciar Semana
    </button>
  )}
</div>
  )
}

export default HabitList
