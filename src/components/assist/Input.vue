<template>
    <div id="input">
        <div class="tdi_name_cont tdi_cont">
            <div>
                <input type="text" name="todoname" class="tdinput" id="tdinput_name" required autocomplete="off" v-model="todoname"/>
                <label for="tdninput" class="form__label" id="name__label">ToDo name</label>
            </div>
        </div>
        <div class="tdi_name_cont tdi_cont">
            <div>
                <input type="text" name="todoname" class="tdinput" id="tdinput_name" required autocomplete="off" v-model="todoname"/>
                <label for="tdninput" class="form__label" id="name__label">ToDo name</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'input-quest'
}
</script>

<style>
#input {
    margin-left: 2em;
    margin-top: 4em
}
.tdi_cont + .tdi_cont {
    margin-left: 2em
}
.tdinput {
	border: 0;
	outline: 0;
	color: #fff;
	padding: 0;
	background: transparent;
    transition: border-color 0.2s;
    display: block;
	transition: 0.2s;
	font-size: 1em;
    color: #086375;
    height: 2em;
    font-family: inherit;
    margin-left: 2em;
    border-bottom: 2px solid #9b9b9b;
}
.tdinput:focus {
	padding-bottom: 6px;
	border-width: 3px;
	border-image: linear-gradient(to right, #028090, #2cd3af);
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
    width: 20%;
    display: inline-block;
    background-color: #1dd3b0;
    border-radius: 50em;
}
.form__label {
    opacity: 0;
}
</style>
