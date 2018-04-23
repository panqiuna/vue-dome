<template>
  <div class="page">
    <!--父级-->
    <MHeader title="首页"></MHeader>

    <div class="scroll-content">
      <Swiper :swiperSlides="arr"></Swiper>

      <!--最新上架-->
      <h3>最新上架</h3>
      <ul class="hot-list" v-if="mambos.length">
        <li v-for="mambo in mambos">
          <img :src="mambo.mamboCover" alt="">
          <span>{{mambo.mamboName.slice(0,5)+'...'}}</span>
        </li>
      </ul>
      <Loading v-else></Loading>
    </div>
  </div>
</template>
<script>
  import MHeader from '../components/Header.vue';
  import Swiper from '../components/Swiper.vue';
  //获取数据
  import axios from 'axios';
  //loading
  import Loading from '../components/Loading.vue';
  export default {
    data(){
      return {//arr轮播图 data热映
        msg: 'hello',
        arr: [],
        mambos:[]
      }
    },
    created(){//创建之后
      //获取数据
      axios.get('/api/sliders').then(res=>{//成功之后的回调函数(使用箭头函数保证this指向)
        this.arr=res.data;
      }).catch(err=>{//失败
        console.log(err);
      });

      axios.get('/api/hot').then(res=>{
          this.mambos=res.data
      }).catch(err=>{
        console.log(err);
      });

    },

    components: {MHeader, Swiper,Loading},
    methods: {},
    computed: {},
    mounted(){
    }
  }
</script>
<style scoped lang="less">
  h3{
    color: #2d2d2d;
    line-height: 40px;
    padding: 1%;
  }
.hot-list{
  padding: 1%;
  display: flex;
  flex-wrap: wrap;//换行

 li{
   width: 33.3333%;
   img{
     width: 100%;
   }
   span{
     color: #2a2a2a;
     //不换行
     /*display: inline-block;*/
     /*width: 100%;*/
     /*overflow: hidden;*/
     /*text-overflow: ellipsis;*/
     /*white-space: normal;*/
   }
 }
}
</style>
