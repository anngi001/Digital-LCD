<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <ul>
      <vs-avatar size="70px" src="https://avatars1.githubusercontent.com/u/26720243?s=400&u=f1720a458291eb92ffa8dde979a1b1d18099e5a1&v=4"/>
      <li><a href="https://github.com/anngi001?tab=repositories" target="_blank">Github</a></li>
      <h2>Anngi St. Alvarado Bazán</h2>
    </ul>  
    <img src="./assets/logo.png" >  
  </div>
  
  
     
  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to LCD Digital'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
