import { defineStore,  } from 'pinia';
import type { SettingsState } from './types';
import { SettingsStorage } from './settings.storage';

const useSettingsStore = defineStore('settings', {
  state: (): SettingsState => {
    const storage = new SettingsStorage();
    const settings = storage.get();
    if (settings) return settings;
    return { cities: [] };
  },
  getters: {},
  actions: {
    setCity(cityName: string) {
      if (typeof cityName !== 'string') throw new Error('type is not supported');
      if (this.cities.indexOf(cityName) < 0) this.cities = [...this.cities, cityName];
      const storage = new SettingsStorage();
      storage.save(this.$state);
    },
    removeCity(cityName: string) {
      if (this.cities.indexOf(cityName) < 0) throw new Error('city not found');
      const storage = new SettingsStorage();
      this.cities = this.cities.filter((city) => city !== cityName);
      storage.save(this.$state);
    },
    moveCity(cityName: string, index: number) {
      if (this.cities.indexOf(cityName) < 0) throw new Error('city not found');
      const storage = new SettingsStorage();
      const cities = this.cities.filter((city) => city !== cityName);
      cities.splice(index, 0, cityName);

      this.cities = cities;
      storage.save(this.$state);
    },
  },
});

export { useSettingsStore };
