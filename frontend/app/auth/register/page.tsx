"use client"; // Indica que este es un componente de cliente

import AuthForm from '../../../components/AuthForm';

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Registrarse</h1>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Nombre" className="border p-2" required />
        <input type="email" placeholder="Correo electrónico" className="border p-2" required />
        <input type="password" placeholder="Contraseña" className="border p-2" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
