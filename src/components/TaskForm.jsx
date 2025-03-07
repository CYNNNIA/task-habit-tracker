import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import "../styles/task.css";

const TaskForm = () => {
  const { dispatch } = useTaskContext();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      completed: false
    };

    dispatch({ type: 'ADD_TASK', payload: newTask });

    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder='Nombre de la tarea'
      />
      <input
        type='text'
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder='Descripción'
      />
      <div className="button-container">
        <button type='submit'>Agregar Tarea</button>
      </div>
    </form>
  );
};

export default TaskForm;