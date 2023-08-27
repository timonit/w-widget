<template>
  <div class="w-full bg-zinc-100 text-gray-600">
    <div class="flex justify-between items-center p-4">
      <span>Settings</span>
      <button @click="close">
        <font-awesome-icon icon="fa-xmark" />
      </button>
    </div>
    
    <ListCity />
    <hr/>
    <SettingsForm @onSave="save" />
  </div>
</template>

<script setup lang="ts">
import SettingsForm from '@/feature/settings/ui/settings-form/settings-form.vue';
import { useSettingsStore } from '@/entity';
import ListCity from '@/feature/settings/ui/list-city/list-city.vue';

const settings = useSettingsStore();
const emit = defineEmits<{(e: 'close'): void}>()

const save = (value: string) => {
  settings.setCity(value);
};

const close = () => {
  emit('close');
}
</script>
