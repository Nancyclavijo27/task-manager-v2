// app/layout.tsx
import { AuthProvider } from '../context/AuthContext';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Aquí van las etiquetas <meta>, <title>, <link>, etc. */}
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
