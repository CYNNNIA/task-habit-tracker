import { useState } from 'react'
import { useHabits } from '../context/HabitsContext'

const HabitForm = () => {
  const [habitName, setHabitName] = useState('')
  const { dispatch } = useHabits()

  const addHabit = (e) => {
    e.preventDefault()
    if (!habitName.trim()) return 

    dispatch({
      type: 'ADD_HABIT',
      payload: {
        id: Date.now(),
        name: habitName, 
        completedDays: 0,
        totalDays: 7
      }
    })

    setHabitName('') 
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
