import { useState } from 'react'
import { useHabits } from '../context/HabitsContext'

const HabitForm = () => {
  const [habitName, setHabitName] = useState('')
  const { dispatch } = useHabits()

  const addHabit = (e) => {
    e.preventDefault()
    if (!habitName.trim()) return // Evita añadir hábitos vacíos

    dispatch({
      type: 'ADD_HABIT',
      payload: {
        id: Date.now(),
        name: habitName, // Asegúrate de enviar el nombre aquí
        completedDays: 0,
        totalDays: 7
      }
    })

    setHabitName('') // Limpia el input tras añadir el hábito
  }

  return (
    <form className='task-form' onSubmit={addHabit}>
      <input
        type='text'
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder='Añadir nuevo hábito...'
      />
      <button type='submit'>➕ Añadir Hábito</button>
    </form>
  )
}

export default HabitForm
