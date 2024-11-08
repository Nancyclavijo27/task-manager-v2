"use client"; // Indica que es un componente de cliente

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import apiClient from '../services/apiClient';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // Estado de carga
  const router = useRouter();

  // Verifica si hay un token en localStorage al cargar el componente
  useEffect(() => {
    if (typeof window !== 'undefined') { // Asegurarse de que esté en el cliente
      const token = localStorage.getItem('auth_token');
      if (token) {
        setIsAuthenticated(true);
      }
      setLoading(false); // Finaliza la carga después de verificar
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      const token = response.data.token;

      // Guarda el token en localStorage y actualiza el estado
      localStorage.setItem('auth_token', token);
      setIsAuthenticated(true);
      setError(null);
      router.push('/dashboard'); // Redirige al dashboard
    } catch (err) {
      setIsAuthenticated(false);
      setError('Credenciales incorrectas o error en el servidor');
      console.error('Error al intentar iniciar sesión:', err);
    }
  };

  const logout = () => {
    // Limpia el token del almacenamiento local y actualiza el estado
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
    router.push('/login'); // Redirige al login
  };

  // Muestra una pantalla de carga mientras se verifica el token
  if (loading) {
    return <div>Loading...</div>; // Renderiza un mensaje o spinner de carga
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};
