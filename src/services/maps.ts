import { Loader } from '@googlemaps/js-api-loader';

const API_KEY = 'AIzaSyDpQHu2BqCDTeeriwoG3ZY4nt6HYRPU678';

export const loadGoogleMaps = async () => {
  const loader = new Loader({
    apiKey: API_KEY,
    version: 'weekly',
    libraries: ['places']
  });

  return await loader.load();
};

export const INDIANAPOLIS_CENTER = {
  lat: 39.7684,
  lng: -86.1581
};