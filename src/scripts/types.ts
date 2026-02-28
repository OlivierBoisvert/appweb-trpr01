import { ref } from "vue";

export interface Grade {
  name: string;
  path: string;
}

export interface Gear {
  id: number;
  name: string;
  description: string;
  cost: number;
  stock: number;
  category: Grade;
}

export interface Warning {
  message: string;
}

//README
const warningList = ref<Warning[]>([]);

export function useWarnings() {
  function addWarning(warning: Warning) {
    warningList.value.push(warning);
  }

  return {
    warningList,
    addWarning,
  };
}
