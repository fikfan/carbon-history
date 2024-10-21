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
</script>