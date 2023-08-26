<template>
  <SlickList axis="y" class="p-4 w-full" v-model:list="settings.cities" :useDragHandle="true" @update:list="update">
    <ListCityItem class="z-40 shadow-md" v-for="(city, i) in settings.cities" :city="city" :key="city" :index="i">
    </ListCityItem>
    <span v-if="!settings.cities.length" class="text-gray-400 text-center">Add the first location</span>
  </SlickList>
</template>

<script setup lang="ts">
import { useSettingsStore } from '@/entity';
import ListCityItem from './list-city-item.vue';
import { SlickList } from 'vue-slicksort';
import { SettingsStorage } from '@/entity/settings/model/settings.storage';

const settings = useSettingsStore();
const settingsStorage = new SettingsStorage();

const update = (cities: string[]) => {
  settingsStorage.save({ ...settings.$state, cities });
};
</script>
