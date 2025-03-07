import { useState } from 'react';
import { useHabitsContext } from "../context/HabitsContext";

const HabitForm = () => {
  const [habitName, setHabitName] = useState('');
  const { dispatch } = useHabitsContext();

  const addHabit = (e) => {
    e.preventDefault();
    if (!habitName.trim()) return;

    dispatch({
      type: 'ADD_HABIT',
      payload: {
        id: Date.now(),
        name: habitName,
        completedDays: 0,
        totalDays: 7
      }
    });

    setHabitName('');
  };

  return (
    <form className='task-form' onSubmit={addHabit}>
      <input
        type='text'
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder='Añadir nuevo hábito...'
      />
      <div className="button-container">
        <button type='submit'>➕ Añadir Hábito</button>
      </div>
    </form>
  );
};

export default HabitForm;