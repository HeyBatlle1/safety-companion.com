import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchPlaylistVideos, getChannelInfo } from '../services/youtube';
import VideoCard from '../components/youtube/VideoCard';
import WaveBackground from '../components/graphics/WaveBackground';
import { Play, Users, Video } from 'lucide-react';

interface ChannelInfo {
  title: string;
  description: string;
  thumbnail: string;
  subscriberCount: string;
  videoCount: string;
}

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [channelInfo, setChannelInfo] = useState<ChannelInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [fetchedVideos, channelData] = await Promise.all([
        fetchPlaylistVideos(),
        getChannelInfo(),
      ]);
      setVideos(fetchedVideos);
      setChannelInfo(channelData);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="relative max-w-md mx-auto px-4 py-8">
      <WaveBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {channelInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-blue-500/20"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={channelInfo.thumbnail}
                alt={channelInfo.title}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold text-white">{channelInfo.title}</h2>
                <div className="flex space-x-4 mt-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {parseInt(channelInfo.subscriberCount).toLocaleString()} subscribers
                  </div>
                  <div className="flex items-center">
                    <Video className="w-4 h-4 mr-1" />
                    {parseInt(channelInfo.videoCount).toLocaleString()} videos
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm line-clamp-2">{channelInfo.description}</p>
          </motion.div>
        )}

        <div className="text-center">
          <motion.div
            className="inline-flex items-center space-x-2 mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <Play className="w-6 h-6 text-blue-400" />
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Latest Videos
            </h1>
          </motion.div>
          <p className="text-gray-300">
            Watch our security tutorials and updates
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <motion.div
            className="grid gap-6"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {videos.map((video: any) => (
              <motion.div
                key={video.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <VideoCard video={video} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Videos;