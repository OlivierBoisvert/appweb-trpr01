<script setup lang="ts">
import { ref } from "vue";
import { type Gear } from "../scripts/types";
import { defaultGear } from "../data/gearData";
import GearItem from "./GearItem.vue";

//ChatGPT README
const gearList = ref<Gear[]>([...defaultGear]);
</script>
<template>
  <div class="container d-flex justify-content-center mt-4">
    <div class="list-wrapper w-100">
      <ul class="list-group list-group-flush" v-if="gearList.length > 0">
        <GearItem v-for="gear in gearList" :key="gear.id" :gear="gear" />
      </ul>

      <ul class="p-3 text-center" v-else>
        <li>No gear in catalogue</li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
