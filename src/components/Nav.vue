<template>
  <div>
    <nav>
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-weipingjia"></i>
      <span>列表页</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-new"></i>
      <span>添加页</span>
    </router-link>
    <router-link to="/personage">
      <i class="iconfont icon-icon_pc"></i>
      <span>个人页</span>
    </router-link>
    </nav>
  </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    created(){
    },
    methods: {},
    computed: {},
    mounted(){
    }
  }
</script>
<style scoped lang="less">
  nav{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    border-top:2px solid #f5f5f5;
    background: #fff;
    display: flex;
    a{

      display: flex;
      flex: 1;
      flex-direction:column;//上下
      align-items: center;
      justify-content: center;
      i{
        font-size: 20px;
      }
    }
    .router-link-active{
      color: #2135ff;
    }
  }
</style>
