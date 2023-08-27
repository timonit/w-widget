<script setup lang="ts">
  import { useSettingsStore } from '@/entity';
  import WeatherCard from '@/entity/weather/ui/weather-card/weather-card.vue';
  import SettingsCard from '@/widget/settings/ui/settings-card.vue';
  import { ref } from 'vue';

  const settings = useSettingsStore();

  const showSettings = ref(settings.cities.length ? false : true);
  const openSettings = () => {
    showSettings.value = true;
  }

  const closeSettins = () => {
    if (settings.cities.length) {
      showSettings.value = false;
    }
  }
</script>

<template>
  <div class="w-[250px] min-h-[3.5rem] relative bg-sky-500">
    <button @click="openSettings" class="absolute top-0 right-0 p-4 z-20 text-white">
      <font-awesome-icon icon="fa-gear" />
    </button>
    <SettingsCard v-if="showSettings" @close="closeSettins" class="absolute z-20 top-0 left-0 shadow-lg" />
    <WeatherCard v-for="city in settings.cities" :key="city" :cityName="city" />
  </div>
</template>
