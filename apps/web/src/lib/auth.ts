// Simulação de autenticação
export const authService = {
  async login(email: string, password: string) {
    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (!response.ok) {
        throw new Error('Falha no login');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erro de autenticação:', error);
      // Fallback para demo se a API não estiver rodando
      if (email === 'demo@noponto.com' && password === '123456') {
        return {
          access_token: 'mock_token_jwt',
          user: {
            id: 1,
            name: 'João Silva',
            email: 'demo@noponto.com',
            role: 'EMPLOYEE'
          }
        };
      }
      throw error;
    }
  },

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  }
};
