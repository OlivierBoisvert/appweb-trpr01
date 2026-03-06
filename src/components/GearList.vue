<script setup lang="ts">
import { ref } from "vue";
import { type Gear } from "../scripts/types";
import { type Grade } from "../scripts/types";
import { defaultGear } from "../data/gearData";
import GearItem from "./GearItem.vue";
import { useWarnings } from "../scripts/types";
import GearForm from "./GearForm.vue";
import WarningList from "./WarningList.vue";

//ChatGPT README
const gearList = ref<Gear[]>([...defaultGear]);

const gearToShowInfo = ref<Gear>();

const { addWarning } = useWarnings();

const placeholderGear = ref<Gear>({
  id: 0,
  name: "",
  description: "",
  cost: 0,
  stock: 0,
  category: { name: "", path: "" },
});

function resetPlaceholderGear(): void {
  placeholderGear.value.id = 0;
  placeholderGear.value.name = "";
  placeholderGear.value.description = "";
  placeholderGear.value.cost = 0;
  placeholderGear.value.stock = 0;
  placeholderGear.value.category = { name: "", path: "" };

  isFormModifying.value = false;
}

let isFormModifying = ref<boolean>(false);

function selectGearInfo(gearId: number): void {
  gearList.value.forEach((gear) => {
    if (gear.id === gearId) {
      if (gearToShowInfo.value === gear) {
        gearToShowInfo.value = undefined;
      } else {
        gearToShowInfo.value = gear;
      }
    }
  });
}

function deleteGearFromList(idToDelete: number) {
  gearList.value = gearList.value.filter((gear) => gear.id !== idToDelete);
}

function addGearToList(
  name: string,
  description: string,
  cost: number,
  stock: number,
  category: string,
) {
  const grade: Grade = {
    name: category,
    path: "../assets/images/" + category.toLowerCase() + ".webp",
  };

  let newId: number = Math.max(...gearList.value.map((gear) => gear.id)) + 1;

  let newGear: Gear = {
    id: newId,
    name: name,
    description: description,
    cost: cost,
    stock: stock,
    category: grade,
  };

  gearList.value.push(newGear);

  if (stock === 0) {
    addWarning({
      message: name + " est en rupture de stock.",
    });
  }

  resetPlaceholderGear();
}

function setModifyForm(gear: Gear) {
  placeholderGear.value.id = gear.id;
  placeholderGear.value.name = gear.name;
  placeholderGear.value.description = gear.description;
  placeholderGear.value.cost = gear.cost;
  placeholderGear.value.stock = gear.stock;
  placeholderGear.value.category = gear.category;

  isFormModifying.value = true;
}

// Modify Gear function
function modifyGear(
  id: number,
  name: string,
  description: string,
  cost: number,
  stock: number,
  category: string,
) {
  const grade: Grade = {
    name: category,
    path: "../assets/images/" + category.toLowerCase() + ".webp",
  };

  gearList.value.forEach((gear) => {
    if (gear.id === id) {
      gear.name = name;
      gear.description = description;
      gear.cost = cost;
      gear.stock = stock;
      gear.category = grade;

      // reset placeholder
      placeholderGear.value.name = "";
      placeholderGear.value.description = "";
      placeholderGear.value.cost = 0;
      placeholderGear.value.stock = 0;
      placeholderGear.value.category = { name: "", path: "" };

      if (stock === 0) {
        addWarning({
          message: name + " est en rupture de stock.",
        });
      }

      resetPlaceholderGear();
    }
  });
}
</script>
<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12 col-md-6">
        <WarningList />
      </div>

      <div class="col-12 col-md-6">
        <GearForm
          :place-holder-gear="placeholderGear"
          :is-modifying="isFormModifying"
          @addGear="addGearToList"
          @modifyGear="modifyGear"
          @cancelModification="resetPlaceholderGear"
        />
      </div>
    </div>
  </div>

  <div class="container d-flex justify-content-center mt-4">
    <div class="gear-list-card w-100">
      <div class="gear-list-header">Catalogue d'équipement</div>

      <ul v-if="gearList.length > 0" class="gear-list">
        <GearItem
          v-for="gear in gearList"
          :key="gear.id"
          :gear="gear"
          :selected-gear="gearToShowInfo"
          @selectGear="selectGearInfo(gear.id)"
          @deleteGear="deleteGearFromList(gear.id)"
          @modifyGear="setModifyForm(gear)"
        />
      </ul>

      <div v-else class="gear-empty">No gear in catalogue</div>
    </div>
  </div>
</template>
<style scoped>
/* Main card */
.gear-list-card {
  background-color: #efecc0;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

/* Header */
.gear-list-header {
  background-color: #4e4361; /* deep purple family */
  color: white;
  font-weight: 600;
  padding: 0.8rem 1.2rem;
  font-size: 1.1rem;
}

/* Remove default list styling */
.gear-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Empty state */
.gear-empty {
  padding: 2rem;
  text-align: center;
  color: #161616;
  opacity: 0.6;
}
</style>
