<script setup lang="ts">
import { type Gear } from "../scripts/types";

const props = defineProps<{
  gear: Gear;
}>();
</script>
<template>
  <li
    class="list-group-item bg-dark text-light d-flex align-items-center px-3 py-2"
  >
    <div class="flex-grow-1">
      {{ gear.nom }}
    </div>

    <div
      class="list-row-grade d-flex justify-content-center align-items-center"
    >
      <img
        src="../assets/images/zayin.webp"
        alt="Zayin"
        class="gear-icon"
        v-if="gear.categorie.name === 'Zayin'"
      />
      <img
        src="../assets/images/teth.webp"
        alt="Teth"
        class="gear-icon"
        v-else-if="gear.categorie.name === 'Teth'"
      />
      <img
        src="../assets/images/he.webp"
        alt="He"
        class="gear-icon"
        v-else-if="gear.categorie.name === 'He'"
      />
    </div>

    <div class="list-row-info d-flex justify-content-center">
      <button class="">Info</button>
    </div>

    <div class="list-row-delete d-flex justify-content-center">
      <button class="">Delete</button>
    </div>
  </li>
</template>
<style></style>
