<template>
  <div class="outerBorder">
  <b-navbar id="navbar" toggleable="lg" type="dark" class="rounded-pill border border-5 border-light">
    <b-navbar-brand href="#" style="padding:30px;">Russian Wallrus</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item> 
        <b-nav-item to="/mijnstamboom">Mijn Stamboom</b-nav-item> 
        <b-nav-item to="/dematrix">De Matrix</b-nav-item> 
        <b-nav-item to="/Speedrunning">Speedrunning</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  <!-- dit is de oude nav, gewoon kleurloos met wat linkjes verdeeld over de gehele breedte
  <div id="MainHeader">
    <b-nav tabs fill>
      <b-nav-item active><router-link to="/">Home</router-link></b-nav-item>
      <b-nav-item><router-link to="/mijnstamboom">Mijn Stamboom</router-link></b-nav-item>
      <b-nav-item><router-link to="/dematrix">De Matrix</router-link></b-nav-item>
      <b-nav-item><router-link to="/Speedrunning">Speedrunning</router-link></b-nav-item>
    </b-nav>
  </div>
  en dit is de nieuwe en dan de oude manier waarop ik de links schreef:
          <b-nav-item to="/dematrix">De Matrix</b-nav-item> |
        <b-nav-item><router-link to="/Speedrunning">Speedrunning</router-link></b-nav-item>
  maar ik moet eigenlijk weer terug naar de oude manier, want router link props zijn deprecated
  en dan ergens de css ervan aanpassen.
  
  -->
  <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mijnstamboom">Mijn Stamboom</router-link> |
      <router-link to="/Speedrunning">Speedrunning</router-link>
    </div>
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
  -->
</template>

<style scoped>
.outerBorder {
  border: 2px solid #000133;
  border-radius: 25rem;
}
#navbar {
  background-color: #000133;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: antiquewhite;
  font-size: 200%;
}
#nav-collapse {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: antiquewhite;
}
</style>
<!-- nu krijg je het gezeik van css overal en nergens: volgens mij zijn routerlinks nu gestyled naar het voorbeeld van de small nav.
dat betekent dus dat ze onderstreept zijn als standaard links. maar dat wil ik juist niet voor mijn big nav. 
maar zou dat dan ook niet betekenen dat ze ook groen moeten worden als je er op drukt?
ps dit coden... d helft van de tijd zit je je af te vragen wat er aan de hand is, de andere helft is slechts uitzoeken en coden.
<style>

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #MainHeader a.router-link-exact-active {
    color: #42b983;
  }
</style>
-->