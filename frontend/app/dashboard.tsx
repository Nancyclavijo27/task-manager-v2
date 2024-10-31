// app/dashboard/page.tsx o pages/dashboard.tsx

"use client"; // Asegúrate de que el archivo sea un componente del cliente

import { useEffect, useState } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import MainLayout from './cabeza/MainLayout'; 


const Dashboard = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Solo se ejecuta en el cliente después de la carga
  }, []);

  if (!mounted) return null; // Evita mostrar el contenido hasta que el cliente esté listo

  return (
    <ProtectedRoute>
      <MainLayout className="container mx-auto p-4">
      <h1>Dashboard</h1>
      <p>Contenido seguro y compatible con la hidratación.</p>
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Lista de Tareas</h1>
      <TaskList tasks={tasks} />
    </MainLayout>
    </ProtectedRoute>
  );
};

export default Dashboard;
