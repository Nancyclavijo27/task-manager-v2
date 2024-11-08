import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Obtener el estado de autenticación
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      // Si el usuario no está autenticado, redirige a la página de login
      router.push('/login');
    } else {
      // Si está autenticado, detenemos la carga
      setLoading(false);
    }
  }, [isAuthenticated, router]);

  if (loading) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras verifica la autenticación
  }

  return isAuthenticated ? children : null; // Si está autenticado, renderiza los hijos
};

export default ProtectedRoute;
