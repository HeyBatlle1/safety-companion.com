import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar } from 'lucide-react';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
    description: string;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const handleClick = () => {
    window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative rounded-xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-blue-500/20"
      onClick={handleClick}
    >
      <div className="relative aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-16 h-16 rounded-full bg-blue-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="w-8 h-8 text-white" fill="white" />
          </div>
        </motion.div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold line-clamp-2 mb-2">{video.title}</h3>
        <p className="text-sm text-gray-400 line-clamp-2 mb-2">{video.description}</p>
        <div className="flex items-center text-sm text-gray-400">
          <Calendar className="w-4 h-4 mr-1" />
          {video.publishedAt}
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;