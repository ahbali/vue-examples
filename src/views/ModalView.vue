<!--
Modal component with customizable slots and CSS transitions.
source: https://vuejs.org/examples/#modal
-->

<script setup lang="ts">
  import ModalComponentVue from '@/components/ModalComponent.vue'
  import { ref } from 'vue'

  const showModal = ref(false)
</script>

<template>
  <main>
    <button id="show-modal" @click="showModal = true">Show Modal</button>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <ModalComponentVue :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </ModalComponentVue>
    </Teleport>
  </main>
</template>
