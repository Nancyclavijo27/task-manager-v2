import React, { useState } from 'react';

interface TaskFormProps {
  onSubmit: (data: any) => void;
  task?: any;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, task }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [status, setStatus] = useState(task?.status || 'pendiente');
  const [dueDate, setDueDate] = useState(task?.dueDate || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, status, dueDate });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
          Título de la Tarea
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-2">
          Estado
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
        >
          <option value="pendiente">Pendiente</option>
          <option value="en progreso">En Progreso</option>
          <option value="completada">Completada</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="dueDate" className="block text-sm font-semibold text-gray-700 mb-2">
          Fecha de Vencimiento
        </label>
        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
