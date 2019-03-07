<template>
  <div class="list">
    <header>
      <div>
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品,共20000款好物</span>
      </div>
    </header>
    <ListNav />
    <NavInfo />
  </div>
</template>
<script>
  import ListNav from './ListNav/index.vue'
  import NavInfo from './NavInfo/NavInfo.vue'
  export default {
    mounted() {
      this.$store.dispatch('getNavData')
      this.$store.dispatch('getNavDetail')
    },
    components: {
      ListNav,
      NavInfo
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .list
    header
      bottom-border-1px(#ccc)
      display flex
      align-items center
      height 1.17333rem
      padding 0 .4rem
      background-color #fff
      position relative
      div
        width 100%
        display flex
        justify-content center
        align-items center
        height .74667rem
        font-size .37333rem
        background-color #ededed
        border-radius .10667rem
        .iconfont
          font-size 0.5rem
        span
          color #666
</style>
