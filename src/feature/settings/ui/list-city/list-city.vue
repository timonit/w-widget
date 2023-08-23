<template>
  <SlickList axis="y" class="p-4 w-full" v-model:list="cities" :useDragHandle="true">
    <ListCityItem v-for="(city, i) in cities" :title="city" :key="city" :index="i" >
      <DragHandle>
        <font-awesome-icon icon="fa-bars" />
      </DragHandle>
    </ListCityItem>
  </SlickList>
</template>

<script setup lang="ts">
import { useSettingsStore } from '@/entity';
import ListCityItem from './list-city-item.vue';
import { SlickList, DragHandle } from 'vue-slicksort';
import { ref, watch } from 'vue';

const settings = useSettingsStore();

const cities = ref(settings.cities);

watch(cities, (val) => {
  settings.setState({ cities: val });
});
</script>
