import { useTaskContext } from '../context/TaskContext';
import { useHabits } from '../context/HabitsContext';

const Statistics = () => {
  const { state: tasks } = useTaskContext();
  const { habits } = useHabits();

  // Estadísticas de tareas
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const taskCompletionRate = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Estadísticas de hábitos
  const totalHabits = habits.length;
  const completedHabits = habits.filter((habit) => habit.completedDays === habit.totalDays).length;
  const habitCompletionRate = totalHabits ? Math.round((completedHabits / totalHabits) * 100) : 0;

  return (
    <div className="main-container">
      <h1>📊 Estadísticas Generales</h1>

      {/* Estadísticas de Tareas */}
      <div className="stats-container">
        <h2>📋 Estadísticas de Tareas</h2>
        <p><strong>Total de Tareas:</strong> {totalTasks}</p>
        <p><strong>Tareas Completadas:</strong> {completedTasks}</p>
        <p><strong>Porcentaje Completado:</strong> {taskCompletionRate}%</p>
      </div>

      {/* Estadísticas de Hábitos */}
      <div className="stats-container">
        <h2>💡 Estadísticas de Hábitos</h2>
        <p><strong>Total de Hábitos:</strong> {totalHabits}</p>
        <p><strong>Hábitos Completados:</strong> {completedHabits}</p>
        <p><strong>Porcentaje Completado:</strong> {habitCompletionRate}%</p>
      </div>
    </div>
  );
};

export default Statistics;