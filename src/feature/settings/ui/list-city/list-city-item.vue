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

    <span class="basis-full pl-2">{{ title }}</span>

    <button @click="remove" class="text-red-500">
      <font-awesome-icon icon="fa-trash" />
    </button>
  </SlickItem>
</template>

<script lang="ts" setup>
import { DragHandle, SlickItem } from 'vue-slicksort';

const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  }
});

const emit = defineEmits<{(e: 'onRemove', title: string): void}>()

const remove = () => {
  emit('onRemove', title);
}
</script>
