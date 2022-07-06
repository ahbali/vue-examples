<!--
A nested tree component that recursively renders itself.
You can double click on an item to turn it into a folder.
original implementation in js: https://vuejs.org/examples/#tree
-->

<script setup lang="ts">
  import { ref, type Ref } from 'vue'
  import TreeComponentVue, { type MyTree } from '@/components/TreeComponent.vue'

  const treeData: Ref<MyTree> = ref({
    name: 'My Tree',
    children: [
      { name: 'hello' },
      { name: 'world' },
      {
        name: 'child folder',
        children: [
          {
            name: 'child folder',
            children: [{ name: 'hello' }, { name: 'world' }],
          },
          { name: 'hello' },
          { name: 'world' },
          {
            name: 'child folder',
            children: [{ name: 'hello' }, { name: 'world' }],
          },
        ],
      },
    ],
  })
</script>

<template>
  <main>
    <ul>
      <TreeComponentVue class="item" :model="treeData" />
    </ul>
  </main>
</template>

<style>
  .item {
    cursor: pointer;
    line-height: 1.5;
  }
  .bold {
    font-weight: bold;
  }
</style>
