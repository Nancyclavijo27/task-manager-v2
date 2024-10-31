// /components/AuthForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label>Email</label>
        <input type="email" {...register('email')} required />
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" {...register('password')} required />
      </div>
      <button type="submit">{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</button>
    </form>
  );
};

export default AuthForm;

