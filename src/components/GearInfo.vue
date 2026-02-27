<script setup lang="ts">
import { type Gear } from "../scripts/types";

const props = defineProps<{
  gear: Gear;
}>();

//README
const getImageUrl = (path: string) => {
  return new URL(path, import.meta.url).href;
};
</script>
<template>
  <div>
    <p>Id : {{ gear.id }}</p>
    <p>Nom : {{ gear.nom }}</p>
    <p style="white-space: pre-line">
      Description : <br />{{ gear.description }}
    </p>
    <p>
      Catégorie :
      {{ gear.categorie.name }}
      <img
        :src="getImageUrl(gear.categorie.path)"
        :alt="gear.categorie.name"
        class="gear-icon"
      />
    </p>
    <p>Coût unitaire : {{ gear.prix }}</p>
    <p>Quantité : {{ gear.stock }}</p>
  </div>
</template>
<style></style>
