import TaskForm from '@/components/TaskForm'
import TaskList from '@/components/TaskList'

const TaskPage = () => {
  return (
    <div className="main-container">
      <h1>Gestor de Tareas</h1>


      <div className="task-container">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default TaskPage;
