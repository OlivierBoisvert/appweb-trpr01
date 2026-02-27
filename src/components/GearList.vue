<script setup lang="ts">
import { ref } from "vue";
import { type Gear } from "../scripts/types";
import { type Grade } from "../scripts/types";
import { defaultGear } from "../data/gearData";
import GearItem from "./GearItem.vue";
import { useWarnings } from "../scripts/types";
import GearForm from "./GearForm.vue";

//ChatGPT README
const gearList = ref<Gear[]>([...defaultGear]);

const gearToShowInfo = ref<Gear>();

const { addWarning } = useWarnings();

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

  if (
    name.trim() !== "" &&
    description.trim() !== "" &&
    cost >= 0 &&
    stock >= 0 &&
    category.trim() !== ""
  ) {
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
  }
}
</script>
<template>
  <GearForm :is-modifying="false" @addGear="addGearToList" />

  <div class="container d-flex justify-content-center mt-4">
    <div class="list-wrapper w-100">
      <ul class="list-group list-group-flush" v-if="gearList.length > 0">
        <GearItem
          v-for="gear in gearList"
          :key="gear.id"
          :gear="gear"
          :selected-gear="gearToShowInfo"
          @selectGear="selectGearInfo(gear.id)"
          @deleteGear="deleteGearFromList(gear.id)"
        />
      </ul>

      <ul class="p-3 text-center" v-else>
        <li>No gear in catalogue</li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
