import { WeatherAPI } from '../api';
import type { WeatherResult } from '../types';
import { defineStore } from 'pinia';

type WeatherState = {
  cities: {[p: string]: WeatherResult | undefined | Error};
}

export const useWeatherStore = defineStore('weather', {
  state: (): WeatherState => ({
    cities: {},
  }),
  getters: {},
  actions: {
    async fetchWeatherByCity(cityName: string) {
      console.log('ENV', config.API_ID, config.API_ID);
      const api = new WeatherAPI(config.API_ID);
      const geoCoord = await api.convertToCoord(cityName);
      const result = await api.getWeatherByCoord(geoCoord[0].lat, geoCoord[0].lon);
      this.cities[cityName] = result;
    },
  },
});
