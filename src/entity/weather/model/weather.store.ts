import { createStore } from 'vuex';
import { WeatherAPI } from '../api';
import { WeatherResult } from '../types';

type State = {
  cities: {[p: string]: WeatherResult | undefined | Error};
}

export default createStore<State>({
  state: {
    cities: {},
  },
  getters: {
  },
  mutations: {
    setWeather(state, { cityName, weather }: { cityName: string, weather: WeatherResult }) {
      state.cities[cityName] = weather;
    },
  },
  actions: {
    async fetchWeatherByCity(context, cityName: string) {
      const api = new WeatherAPI(process.env.VUE_APP_API_ID);
      const geoCoord = await api.convertToCoord(cityName);
      const result = await api.getWeatherByCoord(geoCoord[0].lat, geoCoord[0].lon);
      context.commit('setWeather', {
        cityName,
        weather: result,
      });
    },
  },
});
