<script setup lang="ts">
import { ref } from "vue";
import { type Gear } from "../scripts/types";

const props = defineProps<{
  placeHolderGear: Gear;
}>();

let name = ref<string>("");
let description = ref<string>("");
let cost = ref<number>(0);
let stock = ref<number>(0);
let category = ref<string>("");
</script>
<template>
  <div class="card gear-card shadow-sm h-100">
    <div class="card-body">
      <h4 class="card-title mb-4" v-if="placeHolderGear.name === ''">
        Ajouter un équipement
      </h4>
      <h4 class="card-title mb-4" v-else>Modifier un équipement</h4>

      <form @submit.prevent>
        <!-- Name -->
        <div class="mb-3">
          <label for="name" class="form-label">Nom</label>
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
          <label for="cost" class="form-label">Coût</label>
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
          <label for="stock" class="form-label">Quantité</label>
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
          <label for="category" class="form-label">Catégorie</label>
          <select id="category" v-model="category" class="form-select" required>
            <option disabled value="">Select Category</option>
            <option value="Zayin">Zayin</option>
            <option value="Teth">Teth</option>
            <option value="He">He</option>
            <option value="Waw">Waw</option>
            <option value="Aleph">Aleph</option>
          </select>
        </div>

        <button
          v-if="placeHolderGear.name === ''"
          @click="$emit('addGear', name, description, cost, stock, category)"
          class="btn btn-add"
          :disabled="!name.trim()"
        >
          Ajouter
        </button>

        <button
          v-else
          @click="
            $emit(
              'modifyGear',
              placeHolderGear.id,
              name,
              description,
              cost,
              stock,
              category,
            )
          "
          class="btn btn-modify"
          :disabled="!name.trim()"
        >
          Modifier
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Card background */
.gear-card {
  background-color: #efecc0;
  border: none;
}

/* Labels */
.form-label {
  color: #161616;
  font-weight: 600;
}

/* Inputs */
.form-control,
.form-select {
  background-color: #ffffff;
  border: 2px solid #e9e9e9;
  color: #161616;
  transition: all 0.2s ease;
}

.form-control:focus,
.form-select:focus {
  border-color: #00eadb;
  box-shadow: 0 0 0 0.2rem rgba(0, 234, 219, 0.25);
}

/* Add Button (Green family) */
.btn-add {
  background-color: #00eadb;
  color: #161616;
  border: none;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  transition: all 0.2s ease;
}

.btn-add:hover {
  background-color: #6cffb3;
  color: #161616;
}

.btn-add:disabled {
  background-color: #d7c18e;
  cursor: not-allowed;
}

/* Modify Button (Purple family) */
.btn-modify {
  background-color: #a562af;
  color: white;
  border: none;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  transition: all 0.2s ease;
}

.btn-modify:hover {
  background-color: #c873c6;
}

/* Example Delete Button Style (for later use) */
.btn-delete {
  background-color: #d2061b;
  color: white;
  border: none;
}

.btn-delete:hover {
  background-color: #78000b;
}
</style>
