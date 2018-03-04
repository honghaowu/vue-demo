<template>
  <div class="nav">
    <router-link to='/home'>
      <i class="iconfont icon-tubiao-"></i>
      <span>首页</span>
    </router-link>
    <router-link to='/list'>
      <i class="iconfont icon-list-1-copy"></i>
      <span>列表</span>
    </router-link>
    <router-link to='/collect'>
      <i class="iconfont icon-shoucang"></i>
      <span>购物车</span>
    </router-link>
    <router-link to='/add'>
      <i class="iconfont icon-tianjia"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>
<script>
    export default {
        name: 'tab'
    }
</script>
<style lang='scss' scoped>
    .nav{
        position:fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        display: flex;
        border-top: 1px solid #ccc;
        a{
            display: flex;
            flex-direction: column;
            flex: 1;
            justify-content: center;
            align-items: center;
            &.router-link-active{
                color: red;
            }
            .iconfont{
                font-size: 20px;
            }
        }
    }
</style>

