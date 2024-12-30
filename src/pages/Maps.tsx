import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import CityMap from '../components/maps/CityMap';

const Maps = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <MapPin className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Satellite View & Directions
            </h1>
          </motion.div>
          <p className="text-gray-300">
            View satellite imagery and get directions to your destination
          </p>
        </div>

        <CityMap />
      </motion.div>
    </div>
  );
};

export default Maps;