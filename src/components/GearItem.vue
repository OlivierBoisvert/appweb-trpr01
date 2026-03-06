<script setup lang="ts">
import { type Gear } from "../scripts/types";
import GearInfo from "./GearInfo.vue";
import { ref, onMounted } from "vue";
import { Modal } from "bootstrap";

const deleteModalRef = ref<HTMLElement | null>(null);
let deleteModal: Modal;

onMounted(() => {
  if (deleteModalRef.value) {
    deleteModal = new Modal(deleteModalRef.value);
  }
});

function openDeleteModal() {
  deleteModal.show();
}

function confirmDelete() {
  deleteModal.hide();
  emit("deleteGear");
}

const emit = defineEmits(["selectGear", "modifyGear", "deleteGear"]);

const props = defineProps<{
  gear: Gear;
  selectedGear?: Gear;
}>();

//README
const getImageUrl = (path: string) => {
  return new URL(path, import.meta.url).href;
};
</script>
<template>
  <li class="gear-item d-flex align-items-center px-3 py-2">
    <!-- Gear Name -->
    <div class="gear-name">
      {{ gear.name }}
    </div>

    <!-- Gear Icon -->
    <div
      class="list-row-grade d-flex justify-content-center align-items-center"
    >
      <img
        :src="getImageUrl(gear.category.path)"
        :alt="gear.category.name"
        class="gear-icon"
      />
    </div>

    <!-- Buttons -->
    <div class="list-row-buttons d-flex gap-2">
      <button class="btn btn-info-custom" @click="$emit('selectGear')">
        Info
      </button>
      <button class="btn btn-modify-custom" @click="$emit('modifyGear')">
        Modifier
      </button>
      <button class="btn btn-dupe-custom" @click="$emit('duplicateGear')">
        Dupliquer
      </button>
      <button class="btn btn-delete-custom" @click="openDeleteModal">
        Supprimer
      </button>
    </div>
  </li>

  <div class="modal fade" tabindex="-1" ref="deleteModalRef" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirmation</h5>
          <button class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
          Voulez-vous vraiment supprimer <strong>{{ gear.name }}</strong> ?
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">
            Annuler
          </button>
          <button class="btn btn-danger" @click="confirmDelete">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Gear Info -->
  <div v-if="gear.id === selectedGear?.id" class="gear-info-wrapper">
    <GearInfo :gear="gear" />
  </div>
</template>
<style scoped>
.gear-item {
  display: flex;
  align-items: center;
  justify-content: space-between; /* key: spread children */
  background-color: #efecc0;
  color: #161616;
  border: none;
  border-bottom: 1px solid #d7c18e;
  transition: all 0.2s ease;
}

.gear-item:hover {
  background-color: #fe8a76;
}

.gear-name {
  font-weight: 600;
  flex: 1; /* grow to fill space */
}

/* Gear icon */
.list-row-grade img {
  width: 30px;
  height: 30px;
}

/* Buttons container */
.list-row-buttons {
  display: flex;
  gap: 0.5rem; /* spacing between buttons */
  flex-shrink: 0; /* prevent shrinking on small screens */
}

/* Button styles remain the same */
.btn-info-custom {
  background-color: #0098c4;
  color: white;
  border: none;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  transition: 0.2s ease;
}
.btn-info-custom:hover {
  background-color: #0061c1;
}

.btn-modify-custom {
  background-color: #a562af;
  color: white;
  border: none;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  transition: 0.2s ease;
}
.btn-modify-custom:hover {
  background-color: #c873c6;
}

.btn-delete-custom {
  background-color: #d2061b;
  color: white;
  border: none;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  transition: 0.2s ease;
}
.btn-delete-custom:hover {
  background-color: #78000b;
}

.btn-dupe-custom {
  background-color: #66dd9f;
  color: white;
  border: none;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  transition: 0.2s ease;
}
.btn-dupe-custom:hover {
  background-color: #00eadb;
}

/* Gear info wrapper */
.gear-info-wrapper {
  border-bottom: 1px solid #d7c18e;
}
</style>
