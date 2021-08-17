<template>
  <div id="app">
    <!-- hier komt de grid van de main page. en de tags van de components.
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <img alt="Vue logo" src="./assets/logo.png">
    <MainHeader/>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="8" offset="2">    
          <StamboomLijst/>
          <Naschrift/> 
        </b-col>
      </b-row>
    </b-container>  
    <TestComponent/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainHeader from './components/MainHeader.vue'
import StamboomLijst from './components/StamboomLijst.vue'
import Naschrift from './components/Naschrift.vue'
import TestComponent from './components/TestComponent.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    MainHeader,
    StamboomLijst,
    Naschrift,
    TestComponent
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
