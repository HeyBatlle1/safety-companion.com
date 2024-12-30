import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { loadGoogleMaps, INDIANAPOLIS_CENTER } from '../../services/maps';

const CityMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService | null>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);
  const [destination, setDestination] = useState('');

  useEffect(() => {
    let map: google.maps.Map;

    const initMap = async () => {
      try {
        await loadGoogleMaps();
        
        if (mapRef.current) {
          map = new google.maps.Map(mapRef.current, {
            center: INDIANAPOLIS_CENTER,
            zoom: 12,
            mapTypeId: 'satellite',
            mapTypeControl: true,
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.TOP_RIGHT,
              mapTypeIds: ['satellite', 'roadmap']
            }
          });

          const dirService = new google.maps.DirectionsService();
          const dirRenderer = new google.maps.DirectionsRenderer({
            map,
            suppressMarkers: false,
            polylineOptions: {
              strokeColor: '#4299e1',
              strokeWeight: 5
            }
          });

          setDirectionsService(dirService);
          setDirectionsRenderer(dirRenderer);
        }
      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    initMap();
  }, []);

  const calculateRoute = async () => {
    if (!directionsService || !directionsRenderer || !destination) return;

    try {
      const result = await directionsService.route({
        origin: INDIANAPOLIS_CENTER,
        destination,
        travelMode: google.maps.TravelMode.DRIVING
      });

      directionsRenderer.setDirections(result);
    } catch (error) {
      console.error('Error calculating route:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="flex space-x-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter destination..."
            className="w-full bg-slate-800/50 border border-blue-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/40"
          />
          <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <button
          onClick={calculateRoute}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
        >
          <Navigation className="w-5 h-5" />
          <span>Route</span>
        </button>
      </div>

      <div className="w-full h-[400px] rounded-xl overflow-hidden border border-blue-500/20">
        <div ref={mapRef} className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default CityMap;