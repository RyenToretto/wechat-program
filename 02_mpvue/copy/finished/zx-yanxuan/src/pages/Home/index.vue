<template>
  <div class="home">
    <!--头部-->
    <header>
      <a href="javascript:;" class="home-logo"></a>
      <div class="home-search">
        <i class="iconfont icon-sousuo"></i>
        <span class="placeholder">搜索商品,共19999件好物</span>
      </div>
      <div class="home-login">登录</div>
    </header>
    <!--nav列表-->
    <!--<ListScroll />-->
    <!--轮播-->
    <Carousel />
    <!--网易自营品牌-->
    <div class="servicePolicy">
      <ul>
        <li class="item">
          <a href="javascript:;">
            <i class="iconfont icon-duihao"></i>
            <span class="text">网易自营品牌</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <i class="iconfont icon-duihao"></i>
            <span class="text">30天无忧退货</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <i class="iconfont icon-duihao"></i>
            <span class="text">48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
//  import ListScroll from './ListScroll/ListScroll.vue'
  import Carousel from './Carousel/Carousel.vue'
  export default {
    components: {
      Carousel
//      ListScroll
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home
    header
      z-index 2
      display flex
      flex 1
      flex-flow row nowrap
      align-items center
      background #fff;
      padding .21333rem .4rem
      box-sizing border-box
      .home-logo
        width 1.84rem
        height .53333rem
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        display inline-block
        margin-right .26667rem
        background-size cover
        background-position center
      .home-search
        display flex
        justify-content center
        align-items center
        height .74667rem
        font-size .37333rem
        background-color #ededed
        border-radius .10667rem
        box-sizing border-box
        flex-grow 1
        .iconfont
          font-size 0.6rem
        .placeholder
          font-size .37rem
          color gray
      .home-login
        width .98667rem
        height .53333rem
        line-height .53333rem
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius .10667rem
        margin-left .21333rem
        font-size .32rem


    .servicePolicy
      background-color #FFFFFF
      color #B4282D
      ul
        box-sizing border-box
        width 100%
        height .96rem
        padding 0 .4rem
        display flex
        li
          display flex
          justify-content center
          align-items center
          a
            color #B4282D
            display flex
            justify-content center
            align-items center
            .iconfont
              font-size .5rem
              margin-left .2rem
            .text
              font-size .32rem
              margin-left .2rem
              line-height .42667rem
              vertical-align middle


</style>
