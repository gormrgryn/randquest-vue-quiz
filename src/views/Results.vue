<template>
    <div class="results">
        <p>Questions {{ quests }}</p>
        <p>Right Answers {{ ra }}</p>
        <p>Wrong Answers {{ wa }}</p>
    </div>
</template>

<script>
export default {
  name: 'results',
  data() {
    return {
      quests: this.$store.getters.getQuests.length,
      ra: this.$store.getters.getQuests.filter(i => i.status.correct == true).length,
      wa: this.$store.getters.getQuests.filter(i => i.status.correct == false).length
    }
  }
}
</script>

<style>
.results > p {
    color: #3c1642;
    font-size: 2em;
    margin-left: 4em
}
</style>
