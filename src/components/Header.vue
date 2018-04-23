<template>
    <div class="header">
      <!--子级-->
        {{title}}
    </div>
</template>
<script>

    export default {
        props:{
          title:{}
        },
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
  .header{
    background: #f1f1f1;
    text-align: center;
    height: 50px;
    line-height: 50px;
    position: fixed;
    width: 100%;
    z-index: 9;
  }
</style>
