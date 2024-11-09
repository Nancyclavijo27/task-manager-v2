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
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col space-y-4 max-w-sm w-full p-6 border rounded-lg shadow-lg"
      >
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Contraseña</label>
          <input
            type="password"
            {...register('password', { required: true })}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-500 w-full"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
  
};

export default LoginForm;
