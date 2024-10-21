

<template>
  <div class="px-2 md:px-10">
    
    <SelectComparison />
    <TimelineSelect />
    <SelectContinent />
    <div class="chart">
      <LineChart />
    </div> 

  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/useDataStores'

const store = useDataStore()
const { selectedContinents, timelineRange, selectedComparison } = storeToRefs(store)

</script>

<style scoped>
.chart {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
</style>