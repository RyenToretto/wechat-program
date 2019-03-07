<template>
  <div class="wrap">
    <div class="shangxin" v-for="(item,index) in news" :key="index">
      <div class="inner">
        <div class="title">{{item.title}}</div>
        <div class="text">{{item.subTitle}}</div>
        <ul class="picLists">
          <li v-for="(pic,index) in item.itemList" :key="index" v-if="item.itemList[index]">
            <img :src="pic.itemUrl" alt="" >
          </li>
        </ul>
        <div class="bottom">
          <i class="iconfont icon-yanjing"></i>
          <span>2453人看过</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('getNews')
    },
    computed: {
      ...mapState(['news'])
    },
    components: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    width 100%
    .shangxin
      width 100%
      .inner
        padding 15px 15px
        .title
          width 100%
          height 27px
          color #333
          font-size 18px
          line-height 27px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .text
          width 100%
          height 64px
          font-size 14px
          line-height 20px
          color #7F7F7F
          overflow hidden
          text-overflow ellipsis
          display -webkit-box
          -webkit-line-clamp 4
          -webkit-box-orient vertical
          padding-top 5px
        .picLists
          display flex
          flex-wrap wrap
          justify-content space-between
          margin: 18px 0;
          li
            width 83px
            height 83px
            background #f4f4f4
            margin-bottom .08rem
            img
              width 100%
              height 100%
        .bottom
          width 100%
          height 16.89px
          margin-bottom 15px
          font-size 12px
          color: #999;
          line-height 16.89px
          margin-top .18rem
</style>
