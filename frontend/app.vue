<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useDataStore } from './stores/useDataStores';

const store = useDataStore();

onMounted(async() => {
  await store.fetchData();
})

const rawData = computed(() => store.rawData)

useHead({
  title: 'carbon history',
  meta: [
    { name: 'description', content: 'simple carbon history app' }
  ],
})

</script>