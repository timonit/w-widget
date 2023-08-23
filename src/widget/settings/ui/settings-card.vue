<template>
  <div class="w-full bg-zinc-300">
    <ListCity />
    <SettingsForm @onSave="save" />
  </div>
</template>

<script setup lang="ts">
import SettingsForm from '@/feature/settings/ui/settings-form/settings-form.vue';
import { useSettingsStore } from '@/entity';
import ListCity from '@/feature/settings/ui/list-city/list-city.vue';

const settings = useSettingsStore();

const save = (value: string) => {
  settings.setCity(value);
};
</script>
