// app/tasks/TaskItem.tsx
import React from 'react';

interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title, completed, onToggle, onDelete }) => {
  return (
    <div className="task-item">
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={() => onToggle(id)} 
      />
      <span>{title}</span>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
};

export default TaskItem;
