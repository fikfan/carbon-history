<template>
  <div class="pb-4">
    <p class="mt-4 mb-2 text-lg font-medium text-black">select continent</p>
    <div class="flex items-center space-x-2" v-for="continent in availableContinents" :key="continent">
      <Checkbox 
        :id="continent"
        :checked="isChecked(continent)"
        @update:checked="() => toggleContinent(continent)"
        :disabled="isDisabled(continent)"
      />
      <label :for="continent">
        {{ continent }}
      </label>
    </div>

    <div class="mt-2">
      <Button @click="selectAll">Select All</Button>
    </div>
  </div>
</template>

<script setup>
//pinia imports
import { useDataStore } from '../stores/useDataStores';

const store = useDataStore();
const { selectedContinents, availableContinents } = storeToRefs(store)

const isChecked = (continent) => {
  return selectedContinents.value.includes(continent)
}

const isDisabled = (continent) => {
  return selectedContinents.value.length === 1 && isChecked(continent)
}

const toggleContinent = (continent) => {
  store.toggleContinent(continent)
}

const selectAll = () => {
  store.selectAllContinents();
}
</script>