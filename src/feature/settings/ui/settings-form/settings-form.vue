<template>
  <form class="p-4 w-full text-left" @submit="save">
    <label class="text-sm text-gray-400">Add location</label>
    <div class="form-control flex flex-nowrap shadow-md">
      <input v-model="city" placeholder="Name of city" type="text" class="w-full rounded-md rounded-r-none border-none" />
      <button class="rounded-md rounded-l-none px-4 bg-sky-500 text-white" type="submit">
        <font-awesome-icon icon="fa-floppy-disk" />
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const city = ref<string>('');
const emit = defineEmits<{(e: 'onSave', value: string): void}>();

const save = (event: Event) => {
  event.preventDefault();
  const rx = new RegExp('([^\\w\u0400-\u04FF]|^)([\\w\u0400-\u04FF])');
  const value = city.value.trim().toLowerCase();
  if (value) emit('onSave', value.replace(rx, (match) => match.toUpperCase()));
  city.value = '';
}
</script>
