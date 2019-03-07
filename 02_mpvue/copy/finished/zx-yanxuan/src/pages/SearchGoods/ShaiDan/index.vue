<template>
  <div class="show">
    <div class="head">
      <div class="head-top">{{homeData.recommendName}}</div>
      <div class="head-middle">{{collections.title}}</div>
      <div class="head-bottom">
        <ul class="content" v-if="newLists.length">
          <li v-for="(item,index) in newLists" :key="index">
            <img :src="item.banner.picUrl" alt="">
          </li>
        </ul>
      </div>
    </div>

    <div class="top" v-if="homeData.recModule">
      <div class="t-top">{{homeData.recModule.recommendName}}</div>
      <div class="t-middle">{{collections.title}}</div>
      <div class="t-bottom swiper-container">
        <div class="swiper-wrapper">
          <ul class="content swiper-slide">
            <li v-for="(pic,index) in collections.lookList" :key="index">
              <img :src="pic.banner.picUrl" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="top">TA们的严选生活</div>
      <div class="middle">
        <div class="m-public">
          <p class="active">最新</p>
        </div>
        <div class="m-public">
          <p>本月最热</p>
        </div>
        <div class="m-public">
          <p>晒单合辑</p>
        </div>
      </div>
      <div class="section">
        <div class="left" >
          <div class="item" v-for="(leftList,index) in leftLists" :key="index" v-if="leftList.content">
            <img :src="leftList.bannerInfo.picUrl" alt="">
            <p>{{leftList.content}}</p>
          </div>
        </div>
        <div class="right">
          <div class="item" v-for="(rightList,index) in rightLists" :key="index">
            <img :src="rightList.bannerInfo.picUrl" alt="">
            <p>{{rightList.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('getHomeData')
      this.$store.dispatch('getLists')
      this.$store.dispatch('getCollection')
      this.$nextTick(() => {
        new Swiper ('.swiper-container', {
          direction: 'horizontal',
          loop: true, // 循环
        })
      })
    },
    computed: {
      ...mapState(['homeData','lists','collections']),
      newLists(){
        if(this.collections.lookList){
          return this.collections.lookList.filter((item,index) => index<3)
        }else {
          return []
        }
      },
      leftLists () {
        return this.lists.filter((item,index) => index%2 === 0 )
      },
      rightLists () {
        return this.lists.filter((item,index) => index%2 === 1 )
      },
    },
    components: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .show
    width 100%
    .head
      display flex
      align-items center
      flex-direction column
      flex-shrink 0
      flex-grow 0
      background-color #fff
      padding-top .37333rem
      margin-bottom .26667rem
      padding-bottom .53333rem
      align-content flex-start
      .head-top
        margin-bottom .32rem
        flex-direction row
        align-items center
        color: #7f7f7f;
        font-size .37333rem
        height .53333rem
        line-height .53333rem
        justify-content center
        font-family PingFangSC-Light
      .head-middle
        max-width 6rem
        lines 2
        word-break break-all
        text-align center
        font-size .42rem
        line-height .64rem
        color #333
        overflow hidden
        text-overflow ellipsis
        -webkit-line-clamp: 2
      .head-bottom
        width 10rem
        height 3.2rem
        margin-top .42667rem
        display flex
        flex-direction row
        .content
          display flex
          flex-direction row
          flex 1
          li
            width 115px
            height 115px
            border-radius 4px
            overflow hidden
            margin 0 .13333rem
            img
              width 100%
              height 100%

    .top
      display flex
      align-items center
      flex-direction column
      background-color #fff
      padding-top .37333rem
      margin-bottom .26667rem
      .t-top
        margin-bottom .32rem
        flex-direction row
        align-items center
        color: #7f7f7f;
        font-size .37333rem
        height .53333rem
        line-height .53333rem
        justify-content center
        font-family PingFangSC-Light
      .t-middle
        max-width 6rem
        lines 2
        word-break break-all
        text-align center
        font-size .42rem
        line-height .64rem
        color #333
        overflow hidden
        text-overflow ellipsis
        -webkit-line-clamp: 2
      .t-bottom
        width 10rem
        height 3.2rem
        margin-top .42667rem
        .content
          width 1100%
          height 3.2rem
          margin 12px 0 0 12px
          flex-direction row
          padding-bottom 40px
          li
            width 120px
            height 120px
            border-radius 4px
            overflow hidden
            margin-right 10px
            img
              width 100%
              height 100%
    .content
      padding-top 10px
      display flex
      align-items center
      flex-direction column
      flex-shrink 0
      flex-grow 0
      align-content flex-start
      .top
        margin-bottom .26667rem
        color #333
        font-size 17px
        height 16.98px
        line-height 16.98px
        font-weight 700
      .middle
        width 10rem
        height 1.76rem
        padding-top .32rem
        display flex
        justify-content space-around
        .m-public
          width 2.29333rem
          height 1.6rem
          margin 0 .32rem
          padding .42667rem 0
          p
            width 2.29333rem
            height .74667rem
            border-radius 4px
            line-height .74667rem
            text-align center
            box-sizing border-box
            font-size .37333rem
            color #333
            background-color #f4f4f4
            font-family PingFangSC-Light
            &.active
              background-color #ffe4af
              color #b0955f
              font-weight 700
      .section
        width 9.73333rem
        min-height 13.33333rem
        display flex
        flex-direction row
        align-items stretch
        .left,.right
          width 4.86667rem
          display flex
          align-items center
          flex-direction column
          .item
            width 4.6rem
            border-radius 4px
            align-items center
            overflow hidden
            img
              width 4.6rem
              height 5rem
            p
              padding -1px .21333rem 0
              color #333
              font-size .32rem
              line-height .48rem
              -webkit-flex-wrap wrap
              flex-wrap wrap
              lines 2
              display -webkit-box
              -webkit-box-orient vertical
              overflow hidden
              text-overflow ellipsis
              -webkit-line-clamp 2
</style>
