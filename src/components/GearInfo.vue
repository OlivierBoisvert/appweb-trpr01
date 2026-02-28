<script setup lang="ts">
import { type Gear } from "../scripts/types";

const props = defineProps<{
  gear: Gear;
}>();

const getImageUrl = (path: string) => {
  return new URL(path, import.meta.url).href;
};
</script>
<template>
  <div>
    <p>Id : {{ gear.id }}</p>
    <p>Nom : {{ gear.name }}</p>
    <p style="white-space: pre-line">
      Description : <br />{{ gear.description }}
    </p>
    <p>
      Catégorie :
      {{ gear.category.name }}
      <img
        :src="getImageUrl(gear.category.path)"
        :alt="gear.category.name"
        class="gear-icon"
      />
    </p>
    <p>Coût unitaire : {{ gear.cost }}</p>
    <p>Quantité : {{ gear.stock }}</p>
  </div>
</template>
<style scoped></style>
