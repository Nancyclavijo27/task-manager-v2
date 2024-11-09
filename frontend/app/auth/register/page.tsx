"use client"; // Esta directiva marca el archivo como un componente del lado del cliente

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import AuthForm from '../../../components/AuthForm';

const RegisterPage = () => {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null); // Estado para mensajes

  const handleRegister = async (name: string | undefined, email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        setMessage('¡Registro exitoso! Redirigiendo a login...');
      } else if (response.status === 409) {
        setMessage('El usuario ya está registrado. Redirigiendo a login...');
      } else {
        setMessage('Error en el registro. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error de red:', error);
      setMessage('Error en el registro. Por favor, intenta nuevamente.');
    }
  };

  // Usamos useEffect para redirigir cuando el mensaje de éxito esté presente
  useEffect(() => {
    if (message?.includes('Redirigiendo a login...')) {
      setTimeout(() => {
        router.push('http://localhost:3001/auth/login');
      }, 2000); // Redirige después de 2 segundos
    }
  }, [message, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Registrarse</h1>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      <AuthForm isLogin={false} onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
