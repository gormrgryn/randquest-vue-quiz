<template>
  <div style="margin-left: 2em">
    <div class="label">
      <span>Questions</span>
      <span>Answers</span>
    </div>
    <div ref="scount">
      <div v-for="f in forms" :key="f">
        <input-quest></input-quest>
        <span class="delinp" @click="remForm" v-show="remShow">x</span>
      </div>
    </div>
    <div class="submit" @click="subForm">
      <span>Submit</span>
    </div>
    <div class="addsf" @click="addForm">
      <span>+</span>
    </div>
  </div>
</template>

<script>
import InputQuest from '../components/Input'
import eventBus from '../main'

export default {
  name: "QForm",
  components: {
    "input-quest": InputQuest
  },
  data() {
    return {
      forms: 1, // using this property just to add divs with v-for loop
      remShow: false
    };
  },
  mounted() {
    this.updRem()
  },
  methods: {
    subForm() {
      eventBus.emit('subm')
      this.$router.push({path: '/quest'})
    },
    updRem() { // not able to use this.$refs in computed, this function checks remShow value
      setTimeout(() => {
        this.remShow = this.$refs.scount.children.length == 1 ? false : true
      })
      console.log(this.remShow)
      console.log(this.$refs.scount.children)
      console.log(this.$refs.scount)
    },
    addForm() {
      ++this.forms
      this.updRem()
    },
    remForm(e) {
      e.target.parentNode.remove() // do not decrement this.forms, strange thing hapenning
      this.updRem()
    }
  }
};
</script>

<style>
.addsf {
  font-size: 3em;
  background-color: #3c1642;
  color: #affc41;
  position: fixed;
  bottom: 0.7em;
  right: 1em;
  border-radius: 5em;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 6px #3c1642;
  transition: 0.3s;
}
.label {
  display: flex;
  justify-content: space-between;
  width: 24em;
  font-size: 1.5em;
}
.addsf:hover {
  box-shadow: 0 0 12px #3c1642;
}
.delinp {
  color: #3c1642;
  display: inline-block;
  font-size: 2em;
  position: relative;
  top: 0.35em;
  cursor: pointer;
}
.submit {
  background-color: #3c1642;
  color: #affc41;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6em;
  height: 3em;
  border-radius: 3em;
  box-shadow: 0 0 6px #3c1642;
  transition: 0.3s;
  margin-top: 2em;
  cursor: pointer;
  font-weight: 500
}
.submit:hover {
  box-shadow: 0 0 12px #3c1642;
}
</style>
