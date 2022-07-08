<script setup lang="ts">
  import { computed } from 'vue'
  import { valueToPoint } from '@/components/utils.vue'
  import type { Stat } from '@/components/CustomTypes.vue'

  const props = defineProps<{
    stat: Stat
    index: number
    total: number
  }>()

  const point = computed(() =>
    valueToPoint(+props.stat.value + 10, props.index, props.total)
  )
</script>

<template>
  <text :x="point.x" :y="point.y">{{ stat.label }}</text>
</template>
