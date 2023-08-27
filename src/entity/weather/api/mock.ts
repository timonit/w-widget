import type { WeatherConverToCoordResult, WeatherResult } from '../types';

export const weatherResultMock: WeatherResult = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10d',
    },
  ],
  base: 'stations',
  main: {
    temp: 298.48,
    feels_like: 298.74,
    temp_min: 297.56,
    temp_max: 300.05,
    pressure: 1015,
    humidity: 64,
    sea_level: 1015,
    grnd_level: 933,
  },
  visibility: 10000,
  wind: {
    speed: 0.62,
    deg: 349,
    gust: 1.18,
  },
  rain: {
    '1h': 3.16,
  },
  clouds: {
    all: 100,
  },
  dt: 1661870592,
  sys: {
    type: 2,
    id: 2075663,
    country: 'IT',
    sunrise: 1661834187,
    sunset: 1661882248,
  },
  timezone: 7200,
  id: 3163858,
  name: 'Zocca',
  cod: 200,
};
export const WeatherConverToCoordResultMock: WeatherConverToCoordResult[] = [
  {
    name: 'Lewisham',
    local_names: {
      ascii: 'Lewisham',
      de: 'London Borough of Lewisham',
      en: 'Lewisham',
      feature_name: 'Lewisham',
      fi: 'Lewisham',
      fr: 'Lewisham',
      hu: 'Lewisham kerület',
      nl: 'Lewisham',
      no: 'Lewisham',
      ro: 'Lewisham',
    },
    lat: 51.4535,
    lon: -0.018,
    country: 'GB',
  },
  {
    name: 'Islington',
    local_names: {
      ascii: 'Islington',
      de: 'London Borough of Islington',
      en: 'Islington',
      feature_name: 'Islington',
      fr: 'Islington',
      nl: 'Islington',
      no: 'Islington',
      ro: 'Islington',
    },
    lat: 51.547,
    lon: -0.1094,
    country: 'GB',
  },
];
