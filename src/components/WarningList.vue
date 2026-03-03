<script setup lang="ts">
import { useWarnings } from "../scripts/types";
const { warningList } = useWarnings();
</script>
<template>
  <div class="card warning-card h-100">
    <div class="card-header warning-header">⚠ Avertissements</div>

    <div class="card-body warning-body">
      <div v-if="warningList.length === 0" class="empty-state">
        Aucun avertissements
      </div>

      <div
        v-for="(warning, index) in warningList"
        :key="index"
        class="warning-item"
      >
        {{ warning.message }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.warning-card {
  border: none;
  background-color: #efecc0;
}

.warning-header {
  background-color: #d2061b;
  color: #ffffff;
  font-weight: 600;
}

.warning-body {
  background-color: #fe8a76;
  overflow-y: auto;
}

.warning-item {
  background-color: #ffffff;
  border-left: 5px solid #78000b;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  color: #161616;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.empty-state {
  text-align: center;
  color: #161616;
  opacity: 0.6;
  padding: 1rem;
}
</style>
