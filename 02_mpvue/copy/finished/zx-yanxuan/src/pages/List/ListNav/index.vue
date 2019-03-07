<template>
  <div class="list-nav">
    <div class="inner">
      <ul>
        <li class="item" :class="{'active': navIndex===index}" v-for="(n,index) in navData"
            :key="index" @click="currentIndex(index)">
          <a href="javascript:;">{{n.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted(){

      new BScroll('.inner',{
        click: true
      })
    },
    methods: {
      currentIndex(index){
        this.$store.dispatch('setIndex',index)
        this.$store.dispatch('getNavDetail')
      }
    },
    computed: {
      ...mapState(['navData','navIndex'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .list-nav
    position fixed
    top 1.17333rem
    left 0
    bottom 0
    z-index 4
    width 2.16rem
    background-color #fff
    .inner
      position relative
      height 100%
      width 100%
      overflow hidden
      ul
        padding .53333rem 0
        li
          width 100%
          height .66667rem
          text-align center
          border none
          margin-top .53333rem
          &:nth-child(1)
            margin-top 0
          &.active
            position relative
            &:before
              content ''
              position absolute
              top 0
              left 0
              bottom 0
              width .08rem
              background-color #ab2b2b
          a
            display block
            color #333
            font-size .37333rem
            line-height .66667rem
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
</style>
