"use client";

import { useRouter } from 'next/navigation';
import AuthForm from '../../../components/AuthForm';

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (name: string | undefined, email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Redirige al usuario tras el registro exitoso
        router.push('/login'); // O '/dashboard' según prefieras
      } else {
        console.error('Error en el registro:', response.statusText);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Registrarse</h1>
      <AuthForm isLogin={false} onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;

