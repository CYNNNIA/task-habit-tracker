import { useTaskContext } from "../context/TaskContext";
import { useHabitsContext } from "../context/HabitsContext";
import "../styles/stats.css";

const Statistics = () => {
  const { tasks } = useTaskContext();
  const { habits } = useHabitsContext();

 
  const totalTasks = tasks?.length || 0;
  const completedTasks = tasks?.filter((task) => task.completed).length || 0;
  const pendingTasks = totalTasks - completedTasks;
  const taskProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const totalHabits = habits?.length || 0;
  const completedHabits = habits?.reduce((acc, habit) => acc + habit.completedDays, 0);
  const totalHabitDays = habits?.reduce((acc, habit) => acc + habit.totalDays, 0);
  const habitProgress = totalHabitDays > 0 ? Math.round((completedHabits / totalHabitDays) * 100) : 0;

  return (
    <div className="stats-container">
      <h2>📊 Estadísticas Generales</h2>

     
      <div className="task-stats">
        <h3>✅ Tareas</h3>
        <p>Total: {totalTasks}</p>
        <p>Completadas: {completedTasks}</p>
        <p>Pendientes: {pendingTasks}</p>
        <p>Progreso: {taskProgress}%</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${taskProgress}%` }}></div>
        </div>
      </div>

    
      <div className="habit-stats">
        <h3>🏆 Hábitos</h3>
        <p>Total de Hábitos: {totalHabits}</p>
        <p>Días Completados: {completedHabits}</p>
        <p>Progreso Total: {habitProgress}%</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${habitProgress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;