<template>
  <div class="page">
    <!--动画-->
    <transition name="slider">
    <!--缓存-->
    <keep-alive>
      <router-view style="position: absolute;top:0;left: 0;width: 100%;"></router-view>
    </keep-alive>
    </transition>
    <MNav></MNav>
  </div>
</template>
<script>
  import MNav from './components/Nav.vue';

  export default {
    data(){
      return {}
    },
    created(){
    },
    methods: {},
    computed: {},
    components: {MNav},
    mounted(){
    }
  }
</script>
<style scoped lang="less">
  .slider-enter{//进入前
  transform: translateX(100%);
  }
  .slider-enter.-active{//激活
    transition: all 0.3s;
  }
  .slider-leave-active{//结束
    transform: translateX(-100%);
    transition: all 0.3s;
  }
</style>
