import { WeatherAPI } from '../api';
import type { WeatherResult } from '../types';
import { defineStore } from 'pinia';

type WeatherState = {
  cities: {[p: string]: WeatherResult};
  errors: {[p: string]: Error};
}

export const useWeatherStore = defineStore('weather', {
  state: (): WeatherState => ({
    cities: {},
    errors: {},
  }),
  getters: {},
  actions: {
    async fetchWeatherByCity(cityName: string) {
      const api = new WeatherAPI(config.API_ID);
      const geoCoord = await api.convertToCoord(cityName);
      const result = await api.getWeatherByCoord(geoCoord[0].lat, geoCoord[0].lon);
      this.cities[cityName] = result;
    },
  },
});
