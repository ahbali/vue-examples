<script setup lang="ts">
  import TodoMVCComponentVue from '@/components/TodoMVCComponent.vue'
  const STORAGE_KEY = 'vue-todomvc'
  const initial_data = [
    {
      id: 0,
      title: 'do something',
      completed: false,
    },
    {
      id: 1,
      title: 'hello world',
      completed: false,
    },
  ]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial_data))
</script>

<template>
  <main>
    <TodoMVCComponentVue :storage-key="STORAGE_KEY" />
  </main>
</template>
