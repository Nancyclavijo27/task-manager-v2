// context/AuthContext.tsx
"use client";  // Esto indica que el archivo es un componente de cliente

import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';  // Cambiado de 'next/router' a 'next/navigation'
import apiClient from '../services/apiClient';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    // Lógica para manejar el inicio de sesión
    await apiClient.post('/auth/login', { email, password });
    setIsAuthenticated(true);
    router.push('/dashboard');  // Redirigir al dashboard tras iniciar sesión
  };

  const logout = () => {
    // Lógica para cerrar sesión
    setIsAuthenticated(false);
    router.push('/login');  // Redirigir a la página de login
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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
