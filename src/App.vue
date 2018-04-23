<template>
    <div>

      <!--<MHeader title="列表页"></MHeader>-->
      <!--<MHeader title="添加页"></MHeader>-->
      <!--<MHeader title="个人页"></MHeader>-->
      <router-view></router-view>

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
      components:{MNav},
        mounted(){
        }
    }
</script>

