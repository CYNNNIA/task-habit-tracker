import { useHabits } from '../context/HabitsContext';

const HabitList = () => {
  const { habits, dispatch } = useHabits();

  const markDayComplete = (id) => {
    const habit = habits.find((h) => h.id === id);

    // Evita que se marquen más de 7 días
    if (habit.completedDays < habit.totalDays) {
      dispatch({ type: 'MARK_DAY', payload: id });
    }
  };

  const resetWeek = () => {
    dispatch({ type: 'RESET_WEEK' });
  };

  const removeHabit = (id) => {
    dispatch({ type: 'REMOVE_HABIT', payload: id });
  };

  return (
    <div className="task-list">
      <h2>📋 Lista de Hábitos</h2>
      {habits.length === 0 ? (
        <p>No hay hábitos aún.</p>
      ) : (
        habits.map((habit) => (
          <div key={habit.id} className="task-item">
            <h3>{habit.name}</h3>
            <p>
              Progreso: {habit.completedDays}/{habit.totalDays} días (
              {Math.round((habit.completedDays / habit.totalDays) * 100)}%)
            </p>

            {/* Barra de Progreso */}
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(habit.completedDays / habit.totalDays) * 100}%`,
                }}
              ></div>
            </div>

            <div className="habit-buttons">
              {habit.completedDays < habit.totalDays ? (
                <button onClick={() => markDayComplete(habit.id)}>
                  ✅ Día Completado
                </button>
              ) : (
                <span className="completed-label">✔️ ¡Semana Completa!</span>
              )}
              <button className="delete" onClick={() => removeHabit(habit.id)}>
                🗑️ Eliminar
              </button>
            </div>
          </div>
        ))
      )}

      {habits.length > 0 && (
        <button className="reset-btn" onClick={resetWeek}>
          🔄 Reiniciar Semana
        </button>
      )}
    </div>
  );
};

export default HabitList;