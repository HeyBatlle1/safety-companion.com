import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Thermometer } from 'lucide-react';
import { getCurrentWeather, WeatherData } from '../../services/weather';

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getCurrentWeather('Indianapolis,Indiana');
        setWeather(data);
      } catch (err) {
        console.error('Weather fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !weather) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Thermometer className="w-6 h-6 text-blue-400" />
          <div>
            <div className="text-2xl font-bold text-white">
              {Math.round(weather.current.temp_c)}°C
            </div>
            <div className="text-sm text-gray-400">
              Indianapolis, IN
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Cloud className="w-6 h-6 text-blue-400" />
          <span className="text-white">
            {weather.current.condition.text}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherWidget;