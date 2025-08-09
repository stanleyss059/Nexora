import axios from 'axios';

// Configure base URL - adjust for your environment
// Use API Gateway as the single entry point
const BASE_URL = __DEV__ ? 'http://localhost:8080' : 'http://your-production-url:8080';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export class AuthService {
  static async signUp(userData) {
    try {
      const response = await api.post('/api/auth/signup', {
        email: userData.email,
        name: userData.name,
        password: userData.password,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Network error occurred' };
    }
  }

  static async signIn(credentials) {
    try {
      const response = await api.post('/api/auth/signin', {
        email: credentials.email,
        password: credentials.password,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Network error occurred' };
    }
  }

  static async requestPasswordReset(email) {
    try {
      const response = await api.post('/api/auth/forgot-password', { email });
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Network error occurred' };
    }
  }

  static async resetPassword(token, newPassword) {
    try {
      const response = await api.post('/api/auth/reset-password', {
        token,
        password: newPassword,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Network error occurred' };
    }
  }
}

export default AuthService;
