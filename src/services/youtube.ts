import axios from 'axios';

const API_KEY = 'AIzaSyCsOdL-rXrQTgzp5xQnqKfrbr1nkJREcJ0';
const CHANNEL_ID = 'UCfHD4CSGq_Hsm0fePToS6WQ';
const PLAYLIST_ID = 'PLWm_Z39r3ZLdhDgnuZLcggIYFtUcNA46b';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
}

export const fetchPlaylistVideos = async (): Promise<YouTubeVideo[]> => {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/playlistItems',
      {
        params: {
          part: 'snippet',
          maxResults: 50,
          playlistId: PLAYLIST_ID,
          key: API_KEY,
        },
      }
    );

    return response.data.items.map((item: any) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
      publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString(),
    }));
  } catch (error) {
    console.error('Error fetching playlist videos:', error);
    return [];
  }
};

export const getChannelInfo = async () => {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/channels',
      {
        params: {
          part: 'snippet,statistics',
          id: CHANNEL_ID,
          key: API_KEY,
        },
      }
    );

    const channel = response.data.items[0];
    return {
      title: channel.snippet.title,
      description: channel.snippet.description,
      thumbnail: channel.snippet.thumbnails.default.url,
      subscriberCount: channel.statistics.subscriberCount,
      videoCount: channel.statistics.videoCount,
    };
  } catch (error) {
    console.error('Error fetching channel info:', error);
    return null;
  }
};