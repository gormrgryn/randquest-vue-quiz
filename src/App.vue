<template>
  <div>
    <div id="header">
      <!-- <router-link to="/">Qform</router-link> -->
      <h1>RandQuest</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
body {
  background-color: #b2ff9e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3c1642;
  margin: 0;
  font-size: 16px;
}
:root {
  box-sizing: border-box;
}
#app,
#app::before,
#app::after{
  box-sizing: inherit
}
#header > h1 {
  margin-left: 2em;
  font-size: 3em;
}
</style>
