import Vue from 'vue'
import DisplayNumber from './components/display-number.vue'



new Vue({
  el: '#app',
  components:{DisplayNumber},
  template: '<DisplayNumber :number="4"></DisplayNumber>'
})
