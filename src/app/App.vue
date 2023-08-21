<script setup lang="ts">
import { useWeatherStore } from '@/entity/weather';

const weatherStore = useWeatherStore();

const cityName = 'Uralsk';

weatherStore.fetchWeatherByCity(cityName);
</script>

<template>
  <div class="container p-6 bg-sky-400 rounded-lg">
    <h1>timon</h1>
    <h1>{{ weatherStore.cities[cityName] }}</h1>
  </div>
</template>
