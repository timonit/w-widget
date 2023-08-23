<template>
  <div class="p-4 relative">
    <h1 class="text-xl text-white">{{ weather?.name || cityName }}</h1>
    <div v-if="weather" class="z-10 relative text-white text-sm">
      <img :src="createIconLink(weather.weather[0].icon)" width="100" height="100">
      <p class="font-light capitalize">{{ weather.weather[0].description }}</p>
      <div class="gap-2 py-2 font-light grid grid-cols-2">
        <WeatherMeasure title="Temperature" icon="fa-temperature-low" :value="`${weather.main.temp.toFixed(0)}&deg;`"
          unit="C" />

        <WeatherMeasure title="Feels like" icon="fa-person-rays" :value="`${weather.main.feels_like.toFixed(0)}&deg;`"
          unit="C" />

        <WeatherMeasure title="Wind" icon="fa-wind" :value="weather.wind.speed" unit="m/s" />

        <WeatherMeasure title="Wind direction" icon="fa-compass" :value="weather.wind.deg" unit="deg" />

        <WeatherMeasure title="Humidity" icon="fa-droplet" :value="weather.main.humidity" unit="%" />

        <WeatherMeasure title="Pressure" icon="fa-gauge-high" :value="weather.main.pressure" unit="hPa" />

        <WeatherMeasure title="Cloud" icon="fa-cloud" :value="weather.clouds?.all || 0" unit="%" />

        <WeatherMeasure title="Visibility" icon="fa-eye" :value="weather.visibility / 1000" unit="km" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WeatherMeasure from './weather-measure.vue';
import { useWeatherStore, type WeatherResult } from '../..';
import { GET_ICON } from '../../api/constans';

const { cityName } = defineProps({
  cityName: {
    type: String,
    required: true,
  },
});

const weatherStore = useWeatherStore();
const weather = ref<WeatherResult | null>(null);
const createIconLink = (id: string) => `${GET_ICON}/${id}@2x.png`;

weatherStore.fetchWeatherByCity(cityName);

weatherStore.$subscribe((mutation) => {
  if (Array.isArray(mutation.events)) {
    mutation.events.forEach(event => {
      if (event.key === cityName) weather.value = event.newValue;
    });
  } else {
    if (mutation.events.key === cityName) weather.value = mutation.events.newValue;
  }
});
</script>
