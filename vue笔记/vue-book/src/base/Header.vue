<template>
  <div class="header">
      <slot></slot>
      <i v-if="back" class="iconfont icon-fanhui" @click="goBack"></i>
  </div>
</template>
<script>
    export default {
        props: {
            back:{
                type: Boolean,
                default: false
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style lang='scss' scoped>
    .header{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: lightblue;
        font-weight: bold;
        i{
            position: absolute;
            left: 10px;
        }
    }
</style>

