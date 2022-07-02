<!-- https://vuejs.org/examples/#grid -->
<script setup lang="ts">
  import { ref } from 'vue'
  import GridComponentVue from '@/components/GridComponent.vue'

  const searchQuery = ref('')
  const gridColumns = ['name', 'power']
  const gridData = [
    { name: 'Chuck Norris', power: Infinity },
    { name: 'Bruce Lee', power: 9000 },
    { name: 'Jackie Chan', power: 7000 },
    { name: 'Jet Li', power: 8000 },
  ]
</script>

<template>
  <main>
    <form id="search">
      Search
      <input v-model="searchQuery" name="query" />
    </form>
    <GridComponentVue
      :data="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery"
    >
    </GridComponentVue>
  </main>
</template>
