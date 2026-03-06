<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Modal } from "bootstrap";
import { type Gear } from "../scripts/types";

const props = defineProps<{
  placeHolderGear: Gear;
  isModifying: boolean;
  isDuplicating: boolean;
}>();

const emit = defineEmits(["addGear", "modifyGear", "cancelModification"]);

const cancelModalRef = ref<HTMLElement | null>(null);
let cancelModal: Modal;

onMounted(() => {
  if (cancelModalRef.value) {
    cancelModal = new Modal(cancelModalRef.value);
  }
});

function openCancelModal() {
  cancelModal.show();
}

function confirmCancel() {
  cancelModal.hide();
  emit("cancelModification");
  resetFormValidation();
}

const formRef = ref<HTMLFormElement | null>(null);
const validated = ref(false);

function submitForm() {
  if (!formRef.value) return;

  validated.value = true;

  if (!formRef.value.checkValidity()) {
    return;
  }

  if (!props.isModifying) {
    emit(
      "addGear",
      props.placeHolderGear.name,
      props.placeHolderGear.description,
      props.placeHolderGear.cost,
      props.placeHolderGear.stock,
      props.placeHolderGear.category.name,
    );
  } else {
    emit(
      "modifyGear",
      props.placeHolderGear.id,
      props.placeHolderGear.name,
      props.placeHolderGear.description,
      props.placeHolderGear.cost,
      props.placeHolderGear.stock,
      props.placeHolderGear.category.name,
    );
  }

  resetFormValidation();
}

function resetFormValidation() {
  validated.value = false;
}
</script>
<template>
  <div class="card gear-card shadow-sm h-100">
    <div class="card-body">
      <h4 class="card-title mb-4" v-if="!isModifying && !isDuplicating">
        Ajouter un équipement
      </h4>
      <h4 class="card-title mb-4" v-else-if="isModifying">
        Modifier un équipement
      </h4>
      <h4 class="card-title mb-4" v-else>Dupliquer un équipement</h4>

      <form
        ref="formRef"
        class="needs-validation"
        :class="{ 'was-validated': validated }"
        novalidate
        @submit.prevent="submitForm"
      >
        <!-- Name -->
        <div class="mb-3">
          <label for="name" class="form-label">Nom</label>
          <input
            id="name"
            v-model="placeHolderGear.name"
            type="text"
            class="form-control"
            required
          />

          <div class="invalid-feedback">Le nom est obligatoire.</div>
        </div>

        <!-- Description -->
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            id="description"
            v-model="placeHolderGear.description"
            class="form-control"
            rows="3"
            required
          ></textarea>
          <div class="invalid-feedback">La description est obligatoire.</div>
        </div>

        <!-- Cost -->
        <div class="mb-3">
          <label for="cost" class="form-label">Coût</label>
          <input
            id="cost"
            v-model.number="placeHolderGear.cost"
            type="number"
            step="0.01"
            min="0"
            class="form-control"
            required
          />
          <div class="invalid-feedback">
            Le coût doit être un nombre positif.
          </div>
        </div>

        <!-- Stock -->
        <div class="mb-3">
          <label for="stock" class="form-label">Quantité</label>
          <input
            id="stock"
            v-model.number="placeHolderGear.stock"
            type="number"
            step="1"
            min="0"
            class="form-control"
            required
          />
          <div class="invalid-feedback">
            Le coût doit être un nombre positif entié.
          </div>
        </div>

        <!-- Category -->
        <div class="mb-3">
          <label for="category" class="form-label">Catégorie</label>
          <select
            id="category"
            v-model="placeHolderGear.category.name"
            class="form-select"
            required
          >
            <option disabled value="">Sélectionnez une catégorie</option>
            <option value="Zayin">Zayin</option>
            <option value="Teth">Teth</option>
            <option value="He">He</option>
            <option value="Waw">Waw</option>
            <option value="Aleph">Aleph</option>
          </select>

          <div class="invalid-feedback">Veuillez choisir une catégorie.</div>
        </div>

        <button
          type="submit"
          v-if="!isModifying && !isDuplicating"
          class="btn btn-add"
        >
          Ajouter
        </button>

        <button type="submit" v-if="isModifying" class="btn btn-modify">
          Modifier
        </button>

        <button type="submit" v-else class="btn btn-add">Duppliquer</button>

        <button
          v-if="isModifying"
          type="button"
          @click="openCancelModal"
          class="btn btn-cancel"
        >
          Annuler
        </button>
      </form>

      <div
        class="modal fade"
        tabindex="-1"
        ref="cancelModalRef"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Annuler la modification</h5>
              <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
              Voulez-vous vraiment annuler les modifications ?
            </div>

            <div class="modal-footer">
              <button class="btn btn-secondary" data-bs-dismiss="modal">
                Continuer l'édition
              </button>
              <button class="btn btn-danger" @click="confirmCancel">
                Oui, annuler
              </button>
            </div>
          </div>
        </div>
      </div>
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

/* Cancel Button (Red family) */
.btn-cancel {
  background-color: #d2061b;
  color: white;
  border: none;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  margin-left: 0.5rem; /* spacing from Modifier */
  transition: all 0.2s ease;
}

.btn-cancel:hover {
  background-color: #78000b;
}
</style>
