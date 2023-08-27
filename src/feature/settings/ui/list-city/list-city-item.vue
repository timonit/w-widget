<template>
  <SlickItem
    :index="index" 
    class="
      flex
      align-middle
      px-3.5
      py-2
      last
      bg-white
      mb-0.5
      last:mb-0
      last:border-b-0
      last:rounded-b-md
      first:rounded-t-md
    "
  >
    <DragHandle class="cursor-pointer">
      <font-awesome-icon icon="fa-bars" />
    </DragHandle>

    <span class="basis-full pl-2">{{ city }}</span>

    <RemoveCityBtn :cityName="city" />
  </SlickItem>
</template>

<script lang="ts" setup>
import { DragHandle, SlickItem } from 'vue-slicksort';
import RemoveCityBtn from '../remove-city-btn.vue';

const { city, index } = defineProps({
  city: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  }
});
</script>
