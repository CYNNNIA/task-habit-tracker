import { useTaskContext } from '../context/TaskContext';
import "../styles/task.css"; 

const TaskList = () => {
  const { tasks, dispatch } = useTaskContext(); 

  const toggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const removeTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };


  const totalTasks = tasks?.length || 0;
  const completedTasks = tasks?.filter((task) => task.completed).length || 0;
  const pendingTasks = totalTasks - completedTasks;
  const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className='task-list'>
      <h2>Lista de Tareas</h2>

     
      <div className='task-stats'>
        <p>📋 Total: {totalTasks}</p>
        <p>✅ Completadas: {completedTasks}</p>
        <p>⏳ Pendientes: {pendingTasks}</p>
        <p>📊 Progreso: {progress}%</p>
      </div>

      {totalTasks === 0 ? (
        <p>No hay tareas aún.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : ''}`}
          >
            <h3>{task.name}</h3>
            <p>{task.description}</p>

          
            <div className="task-actions">
              <button onClick={() => toggleTask(task.id)} className="complete">
                {task.completed ? "Desmarcar" : "Completar"}
              </button>
              <button onClick={() => removeTask(task.id)} className="delete">
                Eliminar
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;