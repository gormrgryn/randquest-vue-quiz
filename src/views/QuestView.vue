<template>
    <quest :key="rlkey"></quest>
</template>

<script>
import Quest from '../components/Quest'
import eventBus from '../main'

export default {
  components: {
    'quest': Quest
  },
  data() {
    return {
      rlkey: 0
    }
  },
  mounted() {
    eventBus.on('rlreq', () => {
      this.rlkey += 1
    })
  }
}
</script>

<style>

</style>
