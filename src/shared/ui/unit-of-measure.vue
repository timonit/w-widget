<template>
  <span class="ml-0.5 text-xs">
    {{ unit }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  unit: {
    type: String,
    required: true,
  }
})
</script>
