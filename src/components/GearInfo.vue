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
  <div class="gear-info">
    <div class="info-row">
      <span class="label">ID</span>
      <span class="value">{{ gear.id }}</span>
    </div>

    <div class="info-row">
      <span class="label">Nom</span>
      <span class="value strong">{{ gear.name }}</span>
    </div>

    <div class="info-block">
      <span class="label">Description</span>
      <div class="description">
        {{ gear.description }}
      </div>
    </div>

    <div class="info-row align-center">
      <span class="label">Catégorie</span>
      <span class="value">
        {{ gear.category.name }}
        <img
          :src="getImageUrl(gear.category.path)"
          :alt="gear.category.name"
          class="gear-icon"
        />
      </span>
    </div>

    <div class="info-row">
      <span class="label">Coût unitaire</span>
      <span class="value cost">{{ gear.cost }}</span>
    </div>

    <div class="info-row">
      <span class="label">Quantité</span>
      <span class="value stock" :class="{ low: gear.stock === 0 }">
        {{ gear.stock }}
      </span>
    </div>
  </div>
</template>
<style scoped>
.gear-info {
  background-color: #efecc0;
  padding: 1rem;
  border-top: 2px solid #d7c18e;
  color: #161616;
}

/* Row layout */
.info-row {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(22, 22, 22, 0.08);
}

.info-block {
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(22, 22, 22, 0.08);
}

.align-center {
  align-items: center;
}

.label {
  font-weight: 600;
  opacity: 0.7;
}

.value {
  font-weight: 500;
}

.strong {
  font-weight: 700;
}

/* Description formatting */
.description {
  white-space: pre-line;
  margin-top: 0.3rem;
  opacity: 0.9;
}

/* Cost highlight (mint family) */
.cost {
  color: #0098c4;
  font-weight: 700;
}

/* Stock styling */
.stock {
  font-weight: 700;
  color: #0061c1;
}

.stock.low {
  color: #d2061b;
}

/* Icon */
.gear-icon {
  height: 20px;
  margin-left: 8px;
  vertical-align: middle;
}
</style>
