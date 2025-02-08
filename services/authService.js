import axios from '@/interceptors/axiosInterceptor';

export const register = async (userData) => {
  const response = await axios.post('/auth/register', userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post('/auth/login', userData);
  return response.data;
};

export const getProfile = async () => {
  const response = await axios.get('/auth/me');
  return response.data;
};