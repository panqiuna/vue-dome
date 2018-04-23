import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../contents/Home.vue'
import List from '../contents/List.vue';
import Add from '../contents/Add.vue';
import Personage from '../contents/Personage.vue';

Vue.use(VueRouter);

const routes=[
  {path:'/home',component:Home},
  {path:'/list',component:List},
  {path:'/add',component:Add},
  {path:'/personage',component:Personage},
  {path:'*',redirect:'/home'}
]
export default new VueRouter({
  routes
})

