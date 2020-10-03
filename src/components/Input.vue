<template>
    <div id="input">
        <div class="tdi_name_cont tdi_cont">
            <div>
                <input v-model="question" type="text" class="tdinput" id="tdinput_name" required autocomplete="off"/>
                <label for="tdninput" class="form__label" id="name__label">ToDo name</label>
            </div>
        </div>
        <div class="tdi_name_cont tdi_cont">
            <div>
                <input v-model="answer" type="text" class="tdinput" id="tdinput_name" required autocomplete="off"/>
                <label for="tdninput" class="form__label" id="name__label">ToDo name</label>
            </div>
        </div>
    </div>
</template>

<script>
import eventBus from '../main'
import lodash from 'lodash'

export default {
  name: 'input-quest',
  data() {
    return {
      question: '',
      answer: ''
    }
  },
  methods: {
    proxy(proxy) {
      let pr = [...lodash.cloneDeep(proxy)]
      pr.forEach(i => i = lodash.cloneDeep(i))
      return pr
    }
  },
  mounted() {
    eventBus.on('subm', () => {
      this.$store.dispatch('createQuest', {
        quest: this.question,
        answer: this.answer,
        status: {
          asked: false,
          correct: null
        }
      })
      this.proxy(this.$store.getters.getQuests)
    })
  }
}
</script>

<style>
#input {
    margin-top: 1.5em;
    display: inline-block;
    margin-right: 1.5em
}
.tdi_cont + .tdi_cont {
    margin-left: 2em
}
.tdinput {
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
#tdinput_name:focus {
    margin-top: .5em;
}
.tdinput:focus {
	border-width: 2px;
	border-image-slice: 1;
}
.tdinput:placeholder-shown ~ .form__label {
	font-size: 1.3rem;
	cursor: text;
    position: relative;
    bottom: 1.5em;
    transition: 0.2s
}
.tdinput:focus ~ .form__label {
    position: relative;
    bottom: 3.3em;
    display: block;
	transition: 0.2s;
	font-size: 1rem;
	color: #11998e;
	font-weight: 700;
}
.tdi_cont {
    width: 17em;
    display: inline-flex;
    justify-content: center;
    background-color: #1dd3b0;
    border-radius: 50em;
}
.form__label {
    opacity: 0;
}
</style>
