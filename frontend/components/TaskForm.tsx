import React from 'react';

const TaskForm = ({ task, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Título de la Tarea</label>
        <input type="text" defaultValue={task?.title} required />
      </div>
      <div>
        <label>Estado</label>
        <select defaultValue={task?.status}>
          <option value="pendiente">Pendiente</option>
          <option value="en progreso">En Progreso</option>
          <option value="completada">Completada</option>
        </select>
      </div>
      <div>
        <label>Fecha de Vencimiento</label>
        <input type="date" defaultValue={task?.dueDate} required />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default TaskForm;
