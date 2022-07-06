<script setup lang="ts">
  import { ref, computed } from 'vue'

  export interface MyTree {
    name: string
    children?: Array<MyTree>
  }

  const props = defineProps<{
    model: MyTree
  }>()

  const local_model = ref({ ...props.model })
  const isOpen = ref(false)
  const isFolder = computed(() => {
    return local_model.value.children && local_model.value.children.length
  })

  function toggle() {
    isOpen.value = !isOpen.value
  }

  function changeType() {
    if (!isFolder.value) {
      local_model.value.children = new Array<MyTree>()
      addChild()
      isOpen.value = true
    }
  }

  function addChild() {
    local_model.value.children?.push({ name: 'new stuff' })
  }
</script>

<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
      {{ local_model.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <!--
        A component can recursively render itself using its
        "name" option (inferred from filename if using SFC)
      -->
      <TreeComponent
        v-for="child in local_model.children"
        :key="child.name"
        class="item"
        :model="child"
      />
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>
