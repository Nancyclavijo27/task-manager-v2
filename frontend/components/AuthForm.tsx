// /components/AuthForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (name: string | undefined, email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<{
    name?: string; // El campo name es opcional
    email: string; // El email es obligatorio
    password: string; // La contraseña es obligatoria
  }>();
  const handleFormSubmit = (data) => {
    onSubmit(data.name, data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col space-y-4">
      {!isLogin && (
        <div>
          <label>Nombre</label>
          <input type="text" {...register('name')} placeholder="Opcional" />
        </div>
      )}
      <div>
        <label>Email</label>
        <input type="email" {...register('email')} required />
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" {...register('password')} required />
      </div>
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
        {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
      </button>
    </form>
  );
};

export default AuthForm;
