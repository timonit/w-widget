import { createStore } from 'vuex';
import { weatherStore } from '@/entity';

export default createStore({
  modules: {
    weather: weatherStore,
  },
});
