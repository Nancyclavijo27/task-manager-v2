// app/auth/login/page.tsx

"use client"; // Asegúrate de que el archivo sea un componente del cliente

import { useAuth } from '../../../context/AuthContext'; // Asegúrate de que la ruta de importación sea correcta
import { useState } from 'react';

const LoginPage = () => {
  const { login } = useAuth(); // Ahora se puede usar en el cliente
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    await login(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold mb-4">Iniciar Sesión</h1>
    <form className="flex flex-col space-y-4">
      <input type="email" placeholder="Correo electrónico" className="border p-2" required />
      <input type="password" placeholder="Contraseña" className="border p-2" required />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
        Iniciar Sesión
      </button>
    </form>
  </div>
  );
};

export default LoginPage;
