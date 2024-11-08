"use client"; // Asegúrate de que este archivo se ejecute del lado del cliente

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa el hook desde 'next/navigation'
import LoginForm from "../../../components/LoginForm"; // Formulario de login
import useAuth from "../../../hooks/useAuth"; // Hook para la autenticación

const LoginPage = () => {
  const { login } = useAuth(); // Función de login desde el hook
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(""); // Para mostrar errores
  const router = useRouter(); // Usamos el hook useRouter para la redirección

  // Maneja el submit del formulario
  const handleLogin = async (email: string, password: string) => {
    setLoading(true); // Marca como cargando
    setError(""); // Limpia errores previos
    try {
      const response = await login(email, password); // Llamada de autenticación
      const { access_token } = response.data;

      // Verifica si el token está presente
      if (access_token) {
        // Guarda el token en localStorage
        localStorage.setItem("auth_token", access_token);

        // Redirige al dashboard
        router.push("/dashboard"); // Redirige a dashboard después de login
      } else {
        setError("No se recibió un token válido."); // Error si no hay token
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error); // Manejo de error
      setError("Hubo un error al iniciar sesión, por favor intente nuevamente.");
    } finally {
      setLoading(false); // Finaliza la carga
    }
  };

  return (
    <>
      {error && <div className="error">{error}</div>} {/* Muestra el error si existe */}
      <LoginForm type="login" onSubmit={handleLogin} loading={loading} />
    </>
  );
};

export default LoginPage;
