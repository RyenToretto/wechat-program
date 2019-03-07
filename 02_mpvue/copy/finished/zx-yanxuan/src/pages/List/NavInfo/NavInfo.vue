<template>
  <div class="nav-info">
    <div class="info">
      <div class="top">
        <img :src="navDetail.bannerUrl" alt="" v-if="navDetail">
      </div>
      <div class="main">
        <ul class="nav-info-list">
          <li class="cateItem" v-for="(nav,index) in navDetail.subCateList" :key="index">
            <a href="javascript:;">
              <div class="cateImg">
                <img :src="nav.bannerUrl" alt="">
              </div>
              <div class="cateName ellipsis">{{nav.name}}</div>
            </a>
          </li>
          <!--<li class="cateItem" v-for="(nav,index) in navDetail.subCateList" v-else>-->
              <!--<a href="javascript:;">-->
              <!--<div class="cateImg">-->
                <!--<img :src="nav.bannerUrl" alt="">-->
              <!--</div>-->
              <!--<div class="cateName ellipsis">{{nav.name}}</div>-->
            <!--</a>-->
          <!--</li>-->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted(){

      new BScroll('.nav-info',{
        click: true
      })
    },
    computed:{
      ...mapState(['navDetail'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .nav-info
    overflow hidden
    .info
      margin-left 2.16rem
      padding .4rem .4rem .28rem
      background-color #fff
      .top
        position relative
        width 100%
        height 2.56rem
        display table
        margin-bottom .42667rem
        background center no-repeat #f4f4f4
        background-size cover
        border-radius 4px
        img
          width 100%
          height 100%
      .main
        .cateItem
          width: 1.92rem
          height: 1.92rem
          display inline-block
          margin-left .2rem
          img
            display: block;
            width: 100%;
            background: #fff;
            height: 100%;
        .cateName
          height: .96rem;
          font-size: .32rem;
          text-align: center;
          line-height: .48rem;
          display: block;
          color black
</style>
