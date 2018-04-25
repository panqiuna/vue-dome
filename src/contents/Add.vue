<template>
  <div class="page">
    <MHeader title="添加页"></MHeader>
    <div class="scroll-content">
      <ul class="from-list">
        <li>
          <label for="mamboName">名称:</label>
          <input type="text" placeholder="请输入名称" id="mamboName" v-model="mambo.mamboName">
        </li>
        <li>
          <label for="mamboCover">手环的封面图:</label>
          <input type="text" placeholder="请输入封面图" id="mamboCover" v-model="mambo.mamboCover">
        </li>

        <li>
          <label for="mamboInfo">详细地址:</label>
          <input type="text" placeholder="请输入地址" id="mamboInfo" v-model="mambo.mamboInfo">
        </li>
        <li>
          <label for="mamboPrice">手环价格:</label>
          <input type="text" placeholder="请输入价格" id="mamboPrice" v-model="mambo.mamboPrice">
        </li>
        <li>
          <button type="button" @click="add">添加手环 </button>
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
      return {
        msg: 'hello',
        mambo: {
          mamboName: '',
          mamboCover: '',
          mamboInfo: '',
          mamboPrice: ''
        }
      }
    },
    methods: {
      add(){
        axios.post('/api/mambo', this.mambo).then(res => {
          //清空
          this.mambo = {
            mamboName: '',
            mamboCover: '',
            mamboInfo: '',
            mamboPrice: ''
          }
          this.$router.push('/list')//成功后跳转到列表页
        })
      }
    },
    created(){
      this.add()
    },
    computed: {},
    components: {MHeader},
    mounted(){
    }
  }
</script>
<style scoped lang="less">
  .from-list {
    padding: 10px 30px;
    li {
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      input {
        padding: 5px;
        height: 30px;
        box-shadow: none;
        border: 1px solid #666;
        border-radius: 5px;
      }
      input::placeholder {
        /*padding: 5px;*/
        color: #85e2ff;
      }
      button {
        font-size: 20px;
        color: #fff;
        height: 50px;
        background: #a4b4b6;
        border-radius: 5px;
        box-shadow: none;
      }
    }
  }
</style>
