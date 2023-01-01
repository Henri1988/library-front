<template>
  <div id="app">

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/book">Books info</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>

body {
  background-image: url("https://cdn.vectorstock.com/i/1000x1000/38/01/abstract-rectangles-in-soft-blue-background-vector-12253801.webp");
  background-repeat: no-repeat;
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#userBox {
  float: right;
}

#userBox button {
  margin-top: -8px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #522806;
}

/*nav a + a::before {*/
/*  content: " | ";*/
/*  padding: 0 10px;*/
/*}*/

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
