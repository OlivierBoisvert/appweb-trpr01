<script setup lang="ts">
import { useWarnings } from "../scripts/types";
const { warningList } = useWarnings();
</script>
<template>
  <ul>
    <li v-for="warning in warningList">
      {{ warning }}
    </li>
  </ul>
</template>
<style scoped></style>
