<template>
  <div>
    <p class="text-center text-lg font-medium text-black">{{ chartTitle }}</p>
    <div>
      <VisBulletLegend :items="legendItems" />
      <VisXYContainer :data="filteredData" :height="300">
        <VisLine 
          :x="xAccessors" 
          :y="yAccessors"
          :color="colorAccessor"
        />
        <VisAxis 
          type="x" 
          label="Year"
          :labelMargin="20"
          :labelFontSize="16"
          labelColor="#292929"
          :tickFormat="d => d.toString()"
          :numTicks="12"
          :domain="timelineDomain"
        />
        <VisAxis 
          type="y" 
          :label="yAxisLabel"
          :labelMargin="20"
          :labelFontSize="16"
          labelColor="#292929"
        />
      </VisXYContainer>
    </div>
  </div>
</template>

<script setup>
import { VisXYContainer, VisLine, VisAxis, VisBulletLegend } from '@unovis/vue'
import { useDataStore } from '@/stores/useDataStores';

const store = useDataStore();
const { selectedComparison, selectedContinents, timelineRange, potatoSalesData, chartData } = storeToRefs(store);

// chart data labels
const chartTitle = computed(() => {
  const comparisonName = store.comparisonOptions.find(option => option.value === selectedComparison.value)?.name
  return `${comparisonName} for ${selectedContinents.value.join(', ')} from ${timelineRange.value[0]} to ${timelineRange.value[1]}`
})

// Filter data based on selected timeline and continents
const filteredData = computed(() => {
  return chartData.value.filter(d => 
    d.year >= timelineRange.value[0] && 
    d.year <= timelineRange.value[1]
  ).map(d => {
    const filteredYearData = { year: d.year };
    selectedContinents.value.forEach(continent => {
      if (d[continent] !== undefined) {
        filteredYearData[continent] = d[continent];
      }
    });
    return filteredYearData;
  });
});

// X accessor function
const xAccessors = d => d.year

// Y accessor functions (one for each continent)
const yAccessors = computed(() => 
  selectedContinents.value.map(continent => d => d[continent])
)

//colors for axis
// Define colors for each continent
const continentColors = {
  Asia: '#FF5733',
  Europe: '#06402B',
  Africa: '#5733FF',
  Oceania: '#87CEEB'
};

// Color accessor function
const colorAccessor = (d, i) => continentColors[selectedContinents.value[i]];

// year axis
// Domain for x-axis based on timeline range
const timelineDomain = computed(() => [timelineRange.value[0], timelineRange.value[1]])

// Dynamic y-axis label
const yAxisLabel = computed(() => {
  const comparisonOption = store.comparisonOptions.find(option => option.value === selectedComparison.value)
  return comparisonOption ? comparisonOption.name : 'Value'
})

// Legend items
const legendItems = computed(() => 
  selectedContinents.value.map(continent => ({ 
    name: continent, 
    color: continentColors[continent]
  }))
)

</script>