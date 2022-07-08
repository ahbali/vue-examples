<script lang="ts">
  export function valueToPoint(value: number, index: number, total: number) {
    const x = 0
    const y = -value * 0.8
    const angle = ((Math.PI * 2) / total) * index
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    const tx = x * cos - y * sin + 100
    const ty = x * sin + y * cos + 100
    return {
      x: tx,
      y: ty,
    }
  }

  // source of the shuffle function: https://stackoverflow.com/a/48083382
  export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }
</script>
