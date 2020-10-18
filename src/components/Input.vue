<template>
  <div id="input">
    <div class="inp_cont q_cont">
      <div>
        <input
          v-model="question"
          type="text"
          class="input"
          id="input_q"
          required
          autocomplete="off"
        >
        <label for="tdninput" class="form_label" id="name__label">ToDo name</label>
      </div>
    </div>
    <div class="inp_cont">
      <div>
        <input
          v-model="answer"
          type="text"
          class="input"
          id="input_a"
          required
          autocomplete="off"
        >
        <label for="tdninput" class="form_label" id="name__label">ToDo name</label>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "../main"
import lodash from "lodash"

export default {
  name: "input-quest",
  data() {
    return {
      question: "",
      answer: ""
    };
  },
  methods: {
    proxy(proxy) {
      let pr = [...lodash.cloneDeep(proxy)]
      pr.forEach(i => (i = lodash.cloneDeep(i)))
      return pr
    }
  },
  mounted() {
    eventBus.on("subm", () => {
      this.$store.dispatch("createQuest", {
        quest: this.question,
        answer: this.answer,
        status: {
          asked: false,
          correct: null
        }
      })
      console.log(this.proxy(this.$store.getters.getQuests))
    });
  }
};
</script>

<style>
#input {
  margin-top: 1.5em;
  display: inline-block;
  margin-right: 1.5em;
}
.inp_cont + .inp_cont {
  margin-left: 2em;
}
.input {
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
}
#input_q:focus {
  margin-top: 0.5em;
}
#input_a:focus {
  margin-top: 0.5em;
}
.input:focus {
  border-width: 2px;
  border-image-slice: 1;
}
.input:placeholder-shown ~ .form_label {
  font-size: 1.3rem;
  cursor: text;
  position: relative;
  bottom: 1.5em;
  transition: 0.2s;
}
.input:focus ~ .form_label {
  position: relative;
  bottom: 3.3em;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #11998e;
  font-weight: 700;
}
.inp_cont {
  width: 17em;
  display: inline-flex;
  justify-content: center;
  background-color: #1dd3b0;
  border-radius: 50em;
}
.form_label {
  opacity: 0;
}
.q_cont {
  width: 22em
}
#input_q {
  width: 18em
}
</style>
