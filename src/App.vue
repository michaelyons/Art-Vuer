<template>
  <div id="app">
    <h1>Vue Art</h1>
    <p>Navigate the links below to Vue artists from a particular country</p>
    <div id="nav">
      <router-link to="/">Welcome</router-link> |
      <router-link to="/american-artists">American Artists</router-link> |
      <router-link to="/dutch-artists">Dutch Artists</router-link> |
      <router-link to="/spanish-artists">Spanish Artists</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
html {
  background: #cc95c0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #7aa1d2,
    #dbd4b4,
    #cc95c0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #7aa1d2,
    #dbd4b4,
    #cc95c0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: royalblue;
}
</style>
