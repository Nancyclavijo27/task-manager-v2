'use client'; // Agregar esta línea al inicio del archivo

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import TaskForm from '../../../components/TaskForm';

const NewTaskPage = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage('Tarea creada con éxito!');
        // Redirigir después de 1.5 segundos
        setTimeout(() => {
          router.push('/tasks'); // Usamos router.push para redirigir
        }, 1500); 
      } else {
        const errorData = await response.json();
        setErrorMessage(`Error: ${errorData.message || 'No se pudo crear la tarea'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Hubo un problema con la solicitud.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Nueva Tarea</h1>
      {successMessage && (
        <div className="bg-green-200 text-green-800 p-3 mb-4 rounded">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-200 text-red-800 p-3 mb-4 rounded">
          {errorMessage}
        </div>
      )}
      <TaskForm onSubmit={handleSubmit} />
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default NewTaskPage;
