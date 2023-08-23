<script setup lang="ts">
  import { useSettingsStore } from '@/entity';
  import WeatherCard from '@/entity/weather/ui/weather-card/weather-card.vue';

  const settings = useSettingsStore();
</script>

<template>
  <div class="container-full w-screen h-screen p-11">
    <WeatherCard v-for="city in settings.cities" :key="city" :cityName="city" />
  </div>
</template>
