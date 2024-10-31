// services/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia a la URL de tu backend
  withCredentials: true, // Para enviar las cookies de sesión
});

export default apiClient;
