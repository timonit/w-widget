<template>
  <button @click="remove" class="text-red-500">
    <font-awesome-icon icon="fa-trash" />
  </button>
</template>

<script setup lang="ts">
import { useSettingsStore } from '@/entity';

const settings = useSettingsStore();

const { cityName } = defineProps<{ cityName: string; }>();

const remove = () => {
  settings.removeCity(cityName);
};
</script>
