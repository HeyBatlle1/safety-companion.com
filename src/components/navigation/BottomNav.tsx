import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Map, MessageCircle, AlertTriangle, FileText, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Map, label: 'Maps', path: '/maps' },
    { icon: MessageCircle, label: 'Chat', path: '/chat' },
    { icon: AlertTriangle, label: 'Safety', path: '/safety' },
    { icon: FileText, label: 'SDS', path: '/msds' },
    { icon: Video, label: 'Videos', path: '/videos' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-slate-800/95 backdrop-blur-lg border-t border-blue-500/20">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-around py-2">
          {navItems.map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname === path;
            return (
              <motion.button
                key={path}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate(path)}
                className={`flex flex-col items-center p-2 relative ${
                  isActive ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="bottomNav"
                    className="absolute inset-0 bg-blue-400/10 rounded-lg"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <Icon className="w-6 h-6" />
                <span className="text-xs mt-1">{label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;