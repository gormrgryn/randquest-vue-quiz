<template>
  <div>
    <div>
      <span v-text="question" class="question"></span>
    </div>
    <div id="ansinp">
      <div>
        <input
          type="text"
          v-model="answer"
          class="a_input"
          id="a_input"
          required
          autocomplete="off"
        >
      </div>
      <label for="tdninput" class="ans_lab">ToDo name</label>
    </div>
    <span v-text="result" class="result"></span>
    <div class="submit" @click="check" v-show="answered">
      <span>Submit</span>
    </div>
    <div class="submit" @click="next" v-show="nexts">
      <span>Next</span>
    </div>
    <div class="submit" v-show="res">
      <router-link to="/results">Results</router-link>
    </div>
  </div>
</template>

<script>
// import lodash from 'lodash'
import eventBus from '../main'

export default {
  name: 'quest',
  data() {
    return {
      question: '',
      currq: null,
      result: '',
      answer: '',
      answered: true,
      nexts: false,
      res: false
    }
  },
  methods: {
    getrand(arr) {
      return arr[Math.floor(Math.random() * (arr.length - 1))]
    },
    check() {
      if(this.answer == this.currq.answer) {
        this.result = 'Right Answer!'
      } else {
        this.result = 'Wrong Answer!'
      }
      this.questions.forEach(i => {
        if(i == this.currq) {
          i.status.asked = true
          if(this.answer == this.currq.answer) {
            i.status.correct = true
          } else {
            i.status.correct = false
          }
        }
      })
      if(this.questions.filter(i => i.status.asked == false).length) {
        this.nexts = true
      } else {
        this.res = true 
      }
      this.answered = false
    },
    next() {
      if(this.questions.filter(i => i.status.asked == false).length) {
        eventBus.emit('rlreq')
      }
    }
  },
  computed: {
    questions() {
      return this.$store.getters.getQuests
    }
  },
  mounted() {
    this.currq = this.getrand(this.questions.filter(i => i.status.asked == false))
    this.question = this.currq.quest
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
  margin-bottom: 1em
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
  color: #086375;
  font-size: 1.5em
}
.submit {
  margin-left: 2.5em
}
.result {
  font-size: 1.5em;
  color: #1dd3b0;
  margin-left: 2em
}
.submit > a {
  text-decoration: none;
  color: #affc41
}
</style>
