<template>
  <div class="page">
    <MHeader title="列表页"></MHeader>
    <div class="scroll-content">
      <ul class="list">
        <li v-for="mambo in mambos">
          <img :src="mambo.mamboCover" alt="">
          <div>
            <h3>{{mambo.mamboName}}</h3>
            <p>{{mambo.mamboInfo.slice(0, 15) + '...'}}</p>
            <span>￥{{mambo.mamboPrice}}</span>
            <div class="btnList">
              <button type="button" @click="remove(mambo.id)">删除</button>
              <router-link tag="button" :to="{name:'update',params:{id:mambo.id}}">修改</router-link>

            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import MHeader from '../components/Header.vue';
  import axios from 'axios';
  export default {
    data(){
      return {msg: 'hello', mambos: []}
    },

    methods: {//加载
      getMambos(){
        axios.get('/api/mambo').then(res => {
          this.mambos = res.data;

        });
      },
      remove(id){
        axios.delete('/api/mambo?id=' + id).then(res => {
          //删除成功后 将数据删除掉当前的ID的这一项
          this.mambos=this.mambos.filter(item => item.id !== id);//删除成功后要重新赋值（赋当前的值）
        });
      }
    },
    created(){//加载完成
      //调用
      this.getMambos();
    },
    components: {MHeader},
    computed: {},
    mounted(){
    },
    //激活的钩子函数
    activated(){//缓存后依然会走的函数
      this.getMambos();//点击在重新获取数据
    }
  }
</script>
<style scoped lang="less">
  .list {
    margin: 10px 2%;
    li {
      display: flex;
      border-bottom: 1px solid #ccc;
      padding: 20px 0;
      img {
        width: 140px;
        height: 140px;
      }
      div {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        h3 {
          line-height: 30px;
        }
        p {
          padding: 10px 0;
          color: #2a2a2a;
          line-height: 20px;
        }
        span {
          font-size: 16px;
          color: #999999;
        }
        .btnList {
          margin-left: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          button {
            width: 60px;
            height: 30px;
            background: rgba(189, 0, 0, 0.44);
            color: #fff;
            font-size: 18px;
            box-shadow: none;
            border: 1px solid #999999;
          }
        }
      }
    }
  }
</style>
