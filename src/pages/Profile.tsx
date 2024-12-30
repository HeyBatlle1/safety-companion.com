import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Bell, Lock, Settings, LogOut } from 'lucide-react';
import ProfileBackground from '../components/graphics/ProfileBackground';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="relative max-w-md mx-auto px-4 py-8">
      <ProfileBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center">
          <div className="relative inline-block">
            <motion.div
              className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'Profile'}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <User className="w-12 h-12 text-blue-400" />
                </div>
              )}
            </motion.div>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-white">
            {user?.displayName || 'User'}
          </h2>
          <p className="text-gray-400">{user?.email}</p>
        </div>

        <div className="space-y-3">
          {[
            { icon: Shield, label: 'Security Settings', badge: '2' },
            { icon: Bell, label: 'Notifications', badge: '5' },
            { icon: Lock, label: 'Privacy', badge: null },
            { icon: Settings, label: 'General Settings', badge: null },
          ].map(({ icon: Icon, label, badge }, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{label}</span>
              </div>
              {badge && (
                <span className="px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
                  {badge}
                </span>
              )}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="w-full py-3 px-4 rounded-xl border border-red-500/20 text-red-400 flex items-center justify-center space-x-2"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Profile;