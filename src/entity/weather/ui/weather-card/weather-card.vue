<template>
  <div class="p-4 bg-white" style="width: 250px">
    <h1 class="text-xl">{{ weather?.name || cityName }}</h1>
    <div v-if="weather" class="flex flex-col">
      <img :src="createIconLink(weather.weather[0].icon)" width="100" height="100">
      <p>{{ weather.weather[0].description }}</p>
      <div class="flex flex-col gap-2 py-2">
        <div class="flex" title="Temperature">
          <div class="basis-7">
            <font-awesome-icon icon="fa-temperature-low" />
          </div>
          <span>{{ weather.main.temp.toFixed(0) }}C&deg;, feels like {{
            weather.main.feels_like.toFixed(0) }}C&deg;</span>
        </div>

        <div class="flex" title="Humidity">
          <div class="basis-7">
            <font-awesome-icon icon="fa-droplet" />
          </div>
          <span>{{ weather.main.humidity }} %</span>
        </div>

        <div class="flex" title="Pressure">
          <div class="basis-7">
            <font-awesome-icon icon="fa-gauge-high" />
          </div>
          <span>{{ weather.main.pressure }} hPa</span>
        </div>

        <div class="flex" title="Wind">
          <div class="basis-7">
            <font-awesome-icon icon="fa-wind" />
          </div>
          <span>{{ weather.wind.speed }} m/s, <font-awesome-icon icon="fa-compass" /> {{ weather.wind.deg }} deg</span>
        </div>

        <div class="flex" title="Cloud">
          <div class="basis-7">
            <font-awesome-icon icon="fa-cloud" />
          </div>
          <span>{{ weather.clouds?.all || 0 }} %</span>
        </div>

        <div class="flex" title="Visibility">
          <div class="basis-7">
            <font-awesome-icon icon="fa-eye" />
          </div>
          <span>{{ weather.visibility / 1000 }} km</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useWeatherStore, type WeatherResult } from '../..';
import { GET_ICON } from '../../api/constans';

const cityName = 'Уральск';
const weatherStore = useWeatherStore();
const weather = ref<WeatherResult | null>(null);

const createIconLink = (id: string) => `${GET_ICON}/${id}@2x.png`;

weatherStore.fetchWeatherByCity(cityName);
weatherStore.$subscribe((mutation, state) => {
  if (Array.isArray(mutation.events)) {
    mutation.events.forEach(event => {
      if (event.key === cityName) weather.value = event.newValue;
    });
  } else {
    if (mutation.events.key === cityName) {
      console.log(mutation.events.newValue);
      weather.value = mutation.events.newValue;
    }
  }
});
</script>
