<template>
  <div class="max-w-lg">
    <p class="mt-4 mb-2 text-lg font-medium text-black">
      select timeline
    </p>
    
    <div class="flex items-center">
      <Select v-model="selectedStartYear">
        <SelectTrigger class="w-[100px]">
          <SelectValue placeholder="Select a ending year" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Starting year</SelectLabel>
            <SelectItem 
              v-for="year in startYearOptions" 
              :key="year" 
              :value="year.toString()"
            >
              {{ year }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <span class="px-5">to</span>

      <Select v-model="selectedEndYear">
        <SelectTrigger class="w-[100px]">
          <SelectValue placeholder="Select a ending year" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Ending year</SelectLabel>
            <SelectItem 
              v-for="year in endYearOptions" 
              :key="year" 
              :value="year.toString()"
            >
              {{ year }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/useDataStores';

const store = useDataStore();
const { timelineRange, minYear, maxYear } = storeToRefs(store);

const selectedStartYear = ref(timelineRange.value[0].toString())
const selectedEndYear = ref(timelineRange.value[1].toString())

const yearRange = computed(() => {
  const years = []
  for (let year = minYear.value; year <= maxYear.value; year += 2) {
    years.push(year)
  }
  return years
})

const startYearOptions = computed(() => 
  yearRange.value.filter(year => year < parseInt(selectedEndYear.value))
)

const endYearOptions = computed(() => 
  yearRange.value.filter(year => year > parseInt(selectedStartYear.value))
)

watch([selectedStartYear, selectedEndYear], ([newStart, newEnd]) => {
  store.timelineRange = [parseInt(newStart), parseInt(newEnd)]
})
</script>