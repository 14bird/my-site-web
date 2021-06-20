import Vue from 'vue'
import ElementUI from 'element-ui';
import Myfoot from "../vue/Myfoot.vue"

Vue.use(ElementUI);
Vue.use(Myfoot)

new Vue({
  el: '#myfoot',
  render: h => h(Myfoot)
})