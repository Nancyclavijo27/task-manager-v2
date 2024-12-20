"use client";

import React from 'react';
import Link from 'next/link';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-teal-600 text-white p-4">
        <h1 className="text-2xl font-bold">Gestión de Tareas</h1>
        <nav>
          <ul className="flex space-x-4 mt-2">
            <li>
              <Link href="/" className="hover:underline">Inicio</Link>
            </li>
            <li>
              <Link href="/tasks/new" className="hover:underline">Nueva Tarea</Link>
            </li>
            <li>
              <Link href="/tasks" className="hover:underline">Lista de Tareas</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow p-4 bg-gray-100">
        {children}
      </main>
      <footer className="bg-teal-600 text-white p-4 text-center">
        © 2024 Mi Aplicación de Tareas
      </footer>
    </div>
  );
};

export default MainLayout;
