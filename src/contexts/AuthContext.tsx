import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../services/firebase';
import { handleGoogleSignIn, handleSignOut } from '../utils/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock user for development
const mockUser: User = {
  uid: 'mock-user-id',
  email: 'test@example.com',
  displayName: 'Test User',
  photoURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  emailVerified: true,
  isAnonymous: false,
  metadata: {},
  providerData: [],
  refreshToken: '',
  tenantId: null,
  delete: async () => {},
  getIdToken: async () => '',
  getIdTokenResult: async () => ({
    token: '',
    signInProvider: null,
    claims: {},
    authTime: '',
    issuedAtTime: '',
    expirationTime: '',
  }),
  reload: async () => {},
  toJSON: () => ({}),
  phoneNumber: null,
  providerId: 'google.com',
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use mock user in development
  const [user, setUser] = useState<User | null>(mockUser);
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    try {
      await handleGoogleSignIn();
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await handleSignOut();
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};