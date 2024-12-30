import axios from 'axios';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  published_at: string;
  source?: {
    name: string;
  };
}

// Construction news RSS feeds
const RSS_FEEDS = [
  'https://www.constructiondive.com/feeds/news/',
  'https://www.enr.com/rss/all-news',
  'https://www.constructionequipment.com/rss.xml'
];

const parseRSS = (xmlText: string): NewsArticle[] => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  const items = xmlDoc.querySelectorAll('item');
  
  return Array.from(items).map(item => ({
    title: item.querySelector('title')?.textContent || 'No Title',
    description: item.querySelector('description')?.textContent?.replace(/<[^>]*>/g, '') || 'No Description',
    url: item.querySelector('link')?.textContent || '#',
    published_at: new Date(item.querySelector('pubDate')?.textContent || new Date()).toISOString(),
    source: {
      name: xmlDoc.querySelector('channel > title')?.textContent || 'Construction News'
    }
  }));
};

const fetchRSSFeed = async (url: string): Promise<NewsArticle[]> => {
  try {
    const corsProxy = 'https://api.allorigins.win/raw?url=';
    const response = await axios.get(`${corsProxy}${encodeURIComponent(url)}`, {
      headers: {
        'Accept': 'application/rss+xml, application/xml, application/atom+xml',
        'User-Agent': 'Mozilla/5.0 (compatible; ConstructionNewsBot/1.0)'
      }
    });
    
    return parseRSS(response.data);
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    return [];
  }
};

export const fetchConstructionNews = async (): Promise<NewsArticle[]> => {
  try {
    const allNews: NewsArticle[] = [];
    const feedPromises = RSS_FEEDS.map(feed => fetchRSSFeed(feed));
    const results = await Promise.allSettled(feedPromises);
    
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        allNews.push(...result.value);
      }
    });

    // Sort by date and take the 10 most recent
    return allNews
      .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
      .slice(0, 10);
  } catch (error) {
    console.error('Error fetching construction news:', error);
    return getFallbackNews();
  }
};

const getFallbackNews = (): NewsArticle[] => {
  return [{
    title: 'Construction Industry Updates',
    description: 'Check back later for the latest construction industry news and updates.',
    url: '#',
    published_at: new Date().toISOString(),
    source: {
      name: 'System'
    }
  }];
};