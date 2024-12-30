import axios from 'axios';

const API_KEY = 'AIzaSyDpQHu2BqCDTeeriwoG3ZY4nt6HYRPU678';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    wind_dir: string;
    humidity: number;
    feelslike_c: number;
    uv: number;
  };
}

export const getCurrentWeather = async (location: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: location,
        appid: API_KEY,
        units: 'metric'
      }
    });

    // Transform OpenWeatherMap data to our WeatherData format
    return {
      location: {
        name: response.data.name,
        region: '',
        country: response.data.sys.country,
        localtime: new Date().toISOString()
      },
      current: {
        temp_c: response.data.main.temp,
        temp_f: (response.data.main.temp * 9/5) + 32,
        condition: {
          text: response.data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        },
        wind_kph: response.data.wind.speed * 3.6, // Convert m/s to km/h
        wind_dir: getWindDirection(response.data.wind.deg),
        humidity: response.data.main.humidity,
        feelslike_c: response.data.main.feels_like,
        uv: 0 // OpenWeatherMap basic API doesn't include UV index
      }
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw new Error('Failed to fetch weather data');
  }
};

// Helper function to convert wind degrees to direction
const getWindDirection = (degrees: number): string => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
                     'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(((degrees %= 360) < 0 ? degrees + 360 : degrees) / 22.5) % 16;
  return directions[index];
};