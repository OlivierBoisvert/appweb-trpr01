<script setup lang="ts">
import { type Gear } from "../scripts/types";
import GearInfo from "./GearInfo.vue";

const props = defineProps<{
  gear: Gear;
  selectedGear?: Gear;
}>();

//README
const getImageUrl = (path: string) => {
  return new URL(path, import.meta.url).href;
};
</script>
<template>
  <li
    class="list-group-item bg-dark text-light d-flex align-items-center px-3 py-2"
  >
    <div class="flex-grow-1">
      {{ gear.name }}
    </div>

    <div
      class="list-row-grade d-flex justify-content-center align-items-center"
    >
      <img
        :src="getImageUrl(gear.category.path)"
        :alt="gear.category.name"
        class="gear-icon"
      />
    </div>

    <div class="list-row-info d-flex justify-content-center">
      <button @click="$emit('selectGear')">Info</button>
    </div>

    <div class="list-row-delete d-flex justify-content-center">
      <button @click="$emit('deleteGear')">Delete</button>
    </div>
  </li>

  <div v-if="gear.id === selectedGear?.id">
    <GearInfo :gear="gear" />
  </div>
</template>
<style scoped></style>
