<template>
    <div class="update">
      <header>
        <i class="iconfont icon-fanhuijian" @click="back"></i>
        修改
      </header>
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
            <button type="button" @click="update">确定修改</button>
          </li>
        </ul>

    </div>
</template>
<script>
import axios from 'axios';
    export default {
        data(){
            return {msg:'hello',
              mambo: {
                mamboName: '',
                mamboCover: '',
                mamboInfo: '',
                mamboPrice: ''
              }
            }
        },
      methods: {
        //返回按钮
        back(){//返回上一级
          this.$router.go(-1);//返回上一级
        },
        getMambo(){
    axios.get('/api/mambo?id='+this.$route.params.id).then(res=>{
        this.mambo=res.data;
    });
        },
        update(){
            //找到要修改的id mambo和找到要修改id的内容（mambo）
        axios.put('/api/mambo?id='+this.mambo.id,this.mambo).then(res=>{
            //调回上一级
            this.back()
        })

        },

      },
        created(){//当页面加载完之后去获取数据 拿到上一页的id
//          this.$route.params.id 拿他的属性而不是方法
          this.getMambo();

        },
      activated(){
            //获取对应的id
        this.getMambo();

      },

        computed: {},
        mounted(){
        }
    }
</script>
<style scoped lang="less">
  .update{
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: 99999999;
    header{
      height: 50px;
      background: #f1f1f1;
      text-align: center;
      line-height: 50px;
      /*居中*/
      /*display: flex;*/
      /*align-items: center;*/
      /*justify-content: center;*/
      position: relative;
      i{
        position: absolute;
        left: 10px;
        top:0;
      }
    }
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
  }
</style>
