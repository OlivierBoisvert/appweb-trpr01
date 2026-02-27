<script setup lang="ts">
import { ref } from "vue";
import { type Gear } from "../scripts/types";
import { type Grade } from "../scripts/types";

const props = defineProps<{
  placeHolderGear?: Gear;
  isModifying: boolean;
}>();

let name = ref<string>("");
let description = ref<string>("");
let cost = ref<number>(0);
let stock = ref<number>(0);
let category = ref<string>("");
</script>
<template>
  <div class="container mt-4">
    <div class="card shadow-sm">
      <div class="card-body">
        <h4 class="card-title mb-4">Create Gear</h4>

        <form @submit.prevent>
          <!-- Name -->
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              id="name"
              v-model="name"
              type="text"
              class="form-control"
              required
            />
          </div>

          <!-- Description -->
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea
              id="description"
              v-model="description"
              class="form-control"
              rows="3"
              required
            ></textarea>
          </div>

          <!-- Cost -->
          <div class="mb-3">
            <label for="cost" class="form-label">Cost</label>
            <input
              id="cost"
              v-model.number="cost"
              type="number"
              step="0.01"
              min="0"
              class="form-control"
              required
            />
          </div>

          <!-- Stock -->
          <div class="mb-3">
            <label for="stock" class="form-label">Stock</label>
            <input
              id="stock"
              v-model.number="stock"
              type="number"
              step="1"
              min="0"
              class="form-control"
              required
            />
          </div>

          <!-- Category -->
          <div class="mb-3">
            <label for="category" class="form-label">Category</label>
            <select
              id="category"
              v-model="category"
              class="form-select"
              required
            >
              <option disabled value="">Select Category</option>
              <option value="Zayin">Zayin</option>
              <option value="Teth">Teth</option>
              <option value="He">He</option>
              <option value="Waw">Waw</option>
              <option value="Aleph">Aleph</option>
            </select>
          </div>

          <button
            v-if="!isModifying"
            @click="$emit('addGear', name, description, cost, stock, category)"
            class="btn btn-outline-success"
            :disabled="!name.trim()"
          >
            Ajouter
          </button>

          <button
            v-else
            @click="$emit('modifyGear')"
            class="btn btn-outline-success"
            :disabled="!name.trim()"
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
