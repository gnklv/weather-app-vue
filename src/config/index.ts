import { Config } from '@/config/types';

const config: Config = {
  protocol: 'https',
  apiPrefix: 'api',
  host: 'openweathermap.org',
  imagesPath: '/img/wn',
  endpoints: {
    weather: {
      method: 'GET',
      uri: {
        pathname: '/data/2.5/weather',
      },
    },
  },
  query: {
    appid: process.env.VUE_APP_WEATHER_API_KEY,
    units: 'metric',
    lang: 'ru',
  },
};

export default config;
