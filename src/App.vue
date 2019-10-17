<template>
  <div id="app">
    
    <h1>{{ msg }}</h1>
   
    <ul>
      <li><a href="https://github.com/anngi001?tab=repositories" target="_blank">Github</a></li>
      <h2>Anngi St. Alvarado Bazán</h2>
    </ul>
    <img src="./assets/logo.png" >    
    
    <ul>
      <template>
    <section>
        <b-field label="Primer Numero">
            <b-numberinput step="0.01">
            </b-numberinput>
        </b-field>    

        <b-field label="Segundo Numero">
            <b-numberinput step="0.01">
            </b-numberinput>
        </b-field>

        <b-field label="Tercer Numero">
            <b-numberinput step="0.01">
            </b-numberinput>
        </b-field>

        <b-button type="is-info">Convertir </b-button>
      </section>
      <section>
    <b-message title="Success" type="is-success" >
            Lorem ipsum dolor 
            sit amet, consectetur 
            adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-message>
        </section>
   
</template>

    </ul>
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
