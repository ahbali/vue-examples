<script setup lang="ts">
  import AxisLabel from '@/components/AxisLabel.vue'
  import { computed } from 'vue'
  import { valueToPoint } from '@/components/utils.vue'
  import type { Stat } from './CustomTypes.vue'

  const props = defineProps<{
    stats: Array<Stat>
  }>()

  const points = computed(() => {
    const total = props.stats.length
    return props.stats
      .map((stat, i) => {
        const { x, y } = valueToPoint(stat.value, i, total)
        return `${x},${y}`
      })
      .join(' ')
  })
</script>

<template>
  <g>
    <polygon :points="points"></polygon>
    <circle cx="100" cy="100" r="80"></circle>
    <axis-label
      v-for="(stat, index) in stats"
      :key="index"
      :stat="stat"
      :index="index"
      :total="stats.length"
    >
    </axis-label>
  </g>
</template>
