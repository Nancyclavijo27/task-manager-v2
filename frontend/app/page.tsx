"use client"; // Indica que este es un componente de cliente

// components/Home.js
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Mi Aplicación de Tareas</h1>
      <div className="flex space-x-4">
        <Link href="/auth/login" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
          Iniciar Sesión
        </Link>
        <Link href="/auth/register" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
          Registrarse
        </Link>
      </div>
    </div>
  );
};

export default Home;
