<template>
  <div class="flex flex-nowrap" :title="title">
    <div class="basis-7">
      <font-awesome-icon :icon="icon" />
    </div>
    <span>{{ value }}<UnitOfMeasure :unit="unit" /></span>
  </div>
</template>

<script setup lang="ts">
import UnitOfMeasure from '@/shared/ui/unit-of-measure.vue';

defineProps({
  unit: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Number],
    required: true,
  },
  icon: {
    type: String,
    default: '',
  }
})
</script>
