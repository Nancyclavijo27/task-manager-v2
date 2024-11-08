// components/LoginForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const handleFormSubmit = (data: { email: string; password: string }) => {
    onSubmit(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col space-y-4">
      <div>
        <label>Email</label>
        <input type="email" {...register('email', { required: true })} required />
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" {...register('password', { required: true })} required />
      </div>
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
