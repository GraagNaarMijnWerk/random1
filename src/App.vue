<template>
  <div id="app">
    <MainHeader/>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="12" offset="0">    
          <router-view/>
        </b-col>
      </b-row>
    </b-container>  
  </div>
  <!--
  de oude header met de losse links:
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/mijnstamboom">Mijn Stamboom</router-link> |
      <router-link to="/DeMatrix">De Matrix</router-link> |
      <router-link to="/Speedrunning">Speedrunning</router-link>
    </div>

 -->
</template>

<script>
import MainHeader from './components/MainHeader.vue'

export default {
  name: 'App',
  components: {
    MainHeader
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
