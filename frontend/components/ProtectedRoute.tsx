// components/ProtectedRoute.tsx
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return user ? children : null;
};

export default ProtectedRoute;
