import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types
interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create provider
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Mock login function
  const login = async (email: string, password: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock validation
      if (email && password) {
        setUser({
          id: '1',
          name: email.split('@')[0],
          email,
        });
        // Save to localStorage for persistence
        localStorage.setItem('flipkartUser', JSON.stringify({
          id: '1',
          name: email.split('@')[0],
          email,
        }));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  // Mock register function
  const register = async (name: string, email: string, password: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock validation
      if (name && email && password) {
        setUser({
          id: '1',
          name,
          email,
        });
        // Save to localStorage for persistence
        localStorage.setItem('flipkartUser', JSON.stringify({
          id: '1',
          name,
          email,
        }));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Register error:', error);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('flipkartUser');
  };

  // Check for existing user on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem('flipkartUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Create hook for easy context usage
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};