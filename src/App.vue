<template>
  <div id="app">
    <!-- hier komt de grid van de main page. en de tags van de components.
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <img alt="Vue logo" src="./assets/logo.png">
    <HeaderIntro/>
    <StamboomLijst/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderIntro from './components/HeaderIntro.vue'
import StamboomLijst from './components/StamboomLijst.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderIntro,
    StamboomLijst
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
