import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Maps from '../pages/Maps';
import Chat from '../pages/Chat';
import Safety from '../pages/Safety';
import MSDS from '../pages/MSDS';
import Videos from '../pages/Videos';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/maps"
        element={
          <PrivateRoute>
            <Maps />
          </PrivateRoute>
        }
      />
      <Route
        path="/chat"
        element={
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        }
      />
      <Route
        path="/safety"
        element={
          <PrivateRoute>
            <Safety />
          </PrivateRoute>
        }
      />
      <Route
        path="/msds"
        element={
          <PrivateRoute>
            <MSDS />
          </PrivateRoute>
        }
      />
      <Route
        path="/videos"
        element={
          <PrivateRoute>
            <Videos />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;