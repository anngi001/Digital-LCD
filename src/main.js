import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuejs/vue-loader'
import 'material-icons/iconfont/material-icons.css'



import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
})

new Vue({
  el: '#app',
  render: h => h(App,Vuesax,Vue)
})
