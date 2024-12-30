import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../logo/Logo';

const TopBar = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20"
    >
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="flex items-center space-x-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 hover:text-blue-400"
            >
              <Bell className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 hover:text-blue-400"
            >
              <Settings className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default TopBar;