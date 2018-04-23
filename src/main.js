import Vue from 'vue';
import App from './App.vue';
import router from './router'
import './common/index.less'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
