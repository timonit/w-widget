<script setup lang="ts">
  import { useSettingsStore } from '@/entity';
  import WeatherCard from '@/entity/weather/ui/weather-card/weather-card.vue';
  import SettingsCard from '@/widget/settings/ui/settings-card.vue';

  const settings = useSettingsStore();
</script>

<template>
  <div class="w-[250px] bg-slate-500">
    <WeatherCard v-for="city in settings.cities" :key="city" :cityName="city" />
    <SettingsCard />
  </div>
</template>
