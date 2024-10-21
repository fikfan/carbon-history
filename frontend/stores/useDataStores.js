import { defineStore } from 'pinia'

// dummy data generator

const generateDummyData = () => {
  const data = [];
  for (let year = 1980; year <= 2022; year += 2) {
    data.push({
      year,
      Asia: Math.floor(1000000 + (year - 1980) * 50000 + Math.random() * 100000),
      Europe: Math.floor(1500000 + (year - 1980) * 40000 + Math.random() * 100000),
      Africa: Math.floor(500000 + (year - 1980) * 30000 + Math.random() * 50000),
      Oceania: Math.floor(300000 + (year - 1980) * 20000 + Math.random() * 30000),
    });
  }
  return data;
}

export const useDataStore = defineStore('data', {
  state: () => ({
    selectedContinents: ['Asia'],
    availableContinents: ['Asia', 'Oceania', 'Europe', 'Africa'],
    timelineRange: [1990, 2000],
    minYear: 1990,
    maxYear: 2022,
    selectedComparison: 'population',
    comparisonOptions: [
      { name: 'Population', value: 'population' },
      { name: 'Total CO2 Emissions', value: 'co2' },
      { name: 'Total CO2 Consumptions', value: 'consumption_co2' },
      { name: 'Temperature Change from CO2', value: 'temperature_change_from_co2' },
      { name: 'CO2 Emissions per Capita', value: 'co2_per_capita' },
      { name: 'Total Greenhouse Gas Emissions', value: 'total_ghg' },
    ],
    rawData: null,
  }),
  
  getters: {
    chartData: (state) => {
      if (!state.rawData) return []
      
      const result = []
      for (let year = state.minYear; year <= state.maxYear; year++) {
        const yearData = { year }
        state.availableContinents.forEach(continent => {
          if (state.rawData[continent]) {
            const continentYearData = state.rawData[continent].data.find(d => d.year === year)
            if (continentYearData) {
              yearData[continent] = continentYearData[state.selectedComparison]
            }
          }
        })
        result.push(yearData)
      }
      return result
    }

  },
  
  actions: {
    //fetch data
    async fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/data/')
        const data = await response.json();
        this.rawData = data;
        console.log(data);
      } catch(error) {
        console.log('Error fetching data:', error)
      }
    },

    // handle continent select
    toggleContinent(continent) {
      if (this.selectedContinents.includes(continent)) {
        // Remove the continent only if it's not the last one
        if (this.selectedContinents.length > 1) {
          this.selectedContinents = this.selectedContinents.filter(c => c !== continent)
        }
      } else {
        this.selectedContinents.push(continent)
      }
    },

    selectAllContinents() {
      this.selectedContinents = [...this.availableContinents]
    },

    updateSelectedContinents(continents) {
      this.selectedContinents = continents
    },

    //handle timeline selects
    updateTimelineRange(range) {
      this.timelineRange = range
    },

    //handle chart selects
    updateSelectedComparison(comparison) {
      this.selectedComparison = comparison
    }
  }
})