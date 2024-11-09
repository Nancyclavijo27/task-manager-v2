import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';  // Asegúrate de importar el componente TaskItem correctamente

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  
  // Cargar las tareas al iniciar el componente
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/tasks');
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      }
    };
    fetchTasks();
  }, []);
  
  return (
    <div>
      <h1>Lista de Tareas</h1>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.status === 'completada'}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

// Funciones de manejo de toggle y eliminación de tareas
const handleToggle = (id) => {
  // Actualiza el estado de la tarea si la marcas como completada o no
};

const handleDelete = (id) => {
  // Elimina la tarea del servidor y actualiza el estado
};

export default TaskList;
