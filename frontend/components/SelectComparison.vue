<template>
  <div class="pb-4">
      <p class="mt-4 mb-2 text-lg font-medium text-black">select comparison</p>
      <Select v-model="selectedComparison">
        <SelectTrigger class="w-[240px] ">
          <SelectValue placeholder="Select a comparison" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem 
            v-for="comparison in comparisonOptions" 
            :key="comparison.value"
            :value="comparison.value"
          >
            {{ comparison.name }}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
</template>

<script setup>
import { useDataStore } from '@/stores/useDataStores';

const store = useDataStore();
const { selectedComparison, comparisonOptions } = storeToRefs(store);

</script>