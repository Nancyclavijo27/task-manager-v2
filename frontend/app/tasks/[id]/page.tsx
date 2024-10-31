import React from 'react';

const TaskDetailPage = ({ params }) => {
  const { id } = params;

  // Aquí puedes usar useEffect para obtener los detalles de la tarea usando el id

  return (
    <div>
      <h1>Detalles de la Tarea {id}</h1>
      {/* Mostrar detalles de la tarea aquí */}
    </div>
  );
};

export default TaskDetailPage;
