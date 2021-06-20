import Vue from 'vue'
import ElementUI from 'element-ui';
import Myhead from "../vue/Myhead.vue"

Vue.use(ElementUI);
Vue.use(Myhead)

new Vue({
  el: '#myhead',
  render: h => h(Myhead)
})