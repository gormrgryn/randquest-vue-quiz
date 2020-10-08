<template>
  <div>
    <div>
      <span v-text="currq" class="question"></span>
    </div>
    <div id="ansinp">
      <div>
        <input type="text" class="a_input" id="a_input" required autocomplete="off">
      </div>
      <label for="tdninput" class="ans_lab">ToDo name</label>
    </div>
    <div class="submit">
      <span>Submit</span>
    </div>
  </div>
</template>

<script>
import lodash from 'lodash'

export default {
  name: 'quest',
  data() {
    return {
      question: '',
      currq: null
    }
  },
  methods: {
    proxy(prox) {
      let pr = [...lodash.cloneDeep(prox)]
      pr.forEach(i => i = {...lodash.cloneDeep(i)})
      return pr
    },
    getrand(arr) {
      return arr[Math.floor(Math.random() * (arr.length - 1))]
    }
  },
  computed: {
    questions() {
      return this.proxy(this.$store.getters.getQuests)
    }
  },
  mounted() {
    this.currq = lodash.cloneDeep(this.getrand(this.questions.filter(i => i.status.asked == false))).quest
  }
};
</script>

<style scoped>
#ansinp {
  margin-top: 3em;
  background-color: #1dd3b0;
  border-radius: 50em;
  margin-left: 2em;
  display: block;
  width: 40em;
}
#asinp > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.a_input {
  border: 0;
  outline: 0;
  color: #fff;
  background: transparent;
  transition: border-color 0.2s;
  display: block;
  transition: 0.2s;
  font-size: 1em;
  color: #086375;
  height: 2em;
  font-family: inherit;
  border-bottom: 1px solid #086375;
  margin-left: 2.3em;
  width: 35em;
}
#a_input:focus {
  margin-top: 0.5em;
  border-width: 2px;
  border-image-slice: 1;
}
.a_input:placeholder-shown ~ .ans_lab {
  font-size: 1.3rem;
  cursor: text;
  position: relative;
  bottom: 1.5em;
  transition: 0.2s;
}
.a_input:focus ~ .ans_lab {
  position: relative;
  bottom: 3.3em;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #11998e;
  font-weight: 700;
}
.ans_lab {
  opacity: 0;
}
.question {
  margin-left: 3em;
  font-weight: bold;
  color: #086375;
  font-size: 1.5em
}
.submit {
  margin-left: 2.5em
}
</style>
