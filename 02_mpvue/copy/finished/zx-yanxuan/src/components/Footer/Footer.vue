<template>
  <footer class="footer">
    <nav>
      <a href="javascript:;" class="item" @click="goto('/home')" :class="{active: isCurrent('/home')}">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </a>
      <a href="javascript:;" class="item" @click="goto('/list')" :class="{active: isCurrent('/list')}">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
        <span>分类</span>
      </a>
      <a href="javascript:;" class="item" @click="goto('/searchgoods')" :class="{active: isCurrent('/searchgoods')}">
        <i class="iconfont icon-tupian"></i>
        <span>识物</span>
      </a>
      <a href="javascript:;" class="item" @click="goto('/shopcard')" :class="{active: isCurrent('/shopcard')}">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </a>
      <a href="javascript:;" class="item" @click="goto('/personal')" :class="{active: isCurrent('/personal')}">
        <i class="iconfont icon-geren"></i>
        <span>个人</span>
      </a>
    </nav>
  </footer>

</template>
<script>
  export default {
    methods: {
      goto(path){
        this.$router.replace(path)
      },
      isCurrent(path){
        return this.$route.path === path
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .footer
    position fixed
    z-index 5
    left 0
    right 0
    bottom 0
    height 1.30667rem
    background-color #fafafa
    border-top 1px solid #d9d9d9
    nav
      display flex
      flex-direction row
      justify-content space-around
      font-size .32rem
      .item
        position relative
        text-align center
        color #666666
        i
          display block
          font-size .5rem
          padding-top 0.3rem
        span
          display block
          margin-top 0.1rem
          font-size .32rem
        &.active
          color green

</style>
