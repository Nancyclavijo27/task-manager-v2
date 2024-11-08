"use client"; // Asegúrate de que este archivo se ejecute del lado del cliente

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Usamos el hook useRouter para redirigir
import ProtectedRoute from "../../components/ProtectedRoute"; // Componente para proteger rutas
import MainLayout from "../cabeza/MainLayout"; // Layout de la página
import TaskList from "../../components/TaskList"; // Componente de tareas

const Dashboard = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const router = useRouter();

  // Este useEffect se asegura de que solo se ejecute en el cliente
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      router.push("/login"); // Redirige a login si no hay token
    } else {
      const fetchTasks = async () => {
        const response = await fetch("http://localhost:3000/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setTasks(data);
      };

      fetchTasks();
    }
  }, [router]); // Ejecutar en el efecto de la ruta

  return (
    <ProtectedRoute>
      <MainLayout className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Lista de Tareas</h1>
        <TaskList tasks={tasks} />
      </MainLayout>
    </ProtectedRoute>
  );
};

export default Dashboard;
