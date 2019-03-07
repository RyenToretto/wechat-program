<template>
  <div class="wrap">
    <div class="daren">
      <div class="inner" v-for="(expert,index) in experts" :key="index">
        <div class="inner-one" v-show="expert.type === 0">
          <div class='top'>
            <img :src="expert.avatar" alt="">
            <span>{{expert.nickname}}</span>
          </div>
          <div class="text">
            {{expert.title}}
          </div>
          <div class="middle">
            <img :src="expert.picUrl" alt="">
          </div>
          <div class="bottom">
            <i class="iconfont icon-yanjing"></i>
            <span>{{expert.readCount}}人看过</span>
          </div>
        </div>
        <div class="inner-two" v-show="expert.type === 1">
          <div class="left">
            <div class="top">
              <img :src="expert.avatar" alt="">
              <span>{{expert.nickname}}</span>
            </div>
            <div class="text">{{expert.title}}</div>
            <div class="desc">{{expert.subTitle}}</div>
            <div class="bottom">
              <i class="iconfont icon-yanjing"></i>
              <span>{{expert.readCount}}人看过</span>
            </div>
          </div>
          <div class="right">
            <img :src="expert.picUrl" alt="">
          </div>
        </div>
        <div class="inner-two" v-show="expert.type === 2">
          <div class="left">
            <div class="top">
              <img :src="expert.avatar" alt="">
              <span>{{expert.nickname}}</span>
            </div>
            <div class="text">{{expert.title}}</div>
            <div class="desc">{{expert.subTitle}}</div>
            <div class="bottom">
              <i class="iconfont icon-yanjing"></i>
              <span>{{expert.readCount}}人看过</span>
            </div>
          </div>
          <div class="right">
            <img :src="expert.picUrl" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import {reqExperts} from '../../../api'
  export default {
    data(){
      return {

      }
    },
    mounted () {
      this.$store.dispatch('getExperts')
      this.$nextTick(() => {
        this.scroll = new BScroll('.wrap',{
          click: true
        })
      })
    },
    computed: {
      ...mapState(['experts']),

    },
    watch: {
      experts () {
        this.$nextTick(() => {
          this.scroll = new BScroll('.wrap',{
            click: true,
            probeType: 2,
            pullUpLoad: {
              threshold: -60 // 当上拉距离超过30px时触发 pullingUp 事件
            }
          })
          this.scroll.on("pullingUp", () => {
            setTimeout(()=>{
              this.$store.dispatch('getExperts')
              console.log(this.experts);
            },1000)
            console.log('pullingUp执行了');

          });
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .wrap
    width 100%
    height 667px
    overflow hidden
    .daren
      width 100%
      .inner
        width 100%
        background #fff
        margin .2rem 0
        .inner-one
          padding 0 15px
          .top
            width 100%
            height 28px
            font-size 16px
            color #333
            line-height 28px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            margin 14px 0
            img
              width 28px
              height 28px
              border-radius 50%
              border .01rem solid #d9d9d9
              margin-right .12rem
            span
              display inline-block
              width 28px
              height 28px
              transform translateY(-6px)
          .text
            font-size 18px
            color #333
            line-height 27px
            margin -.08rem 0 .16rem 0
            overflow hidden
            text-overflow ellipsis
            font-family PingFangSC-Regular

          .middle
            width 100%
            height 188px
            border-radius .08rem
            margin-bottom .2rem
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
        .inner-two
          width 100%
          height 168px
          padding 0 15px
          clearFix()
          .left
            width 200px
            height 136px
            float left
            .top
              width 100%
              height 28px
              font-size 16px
              color #333
              line-height 28px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              margin 14px 0
              img
                width 28px
                height 28px
                border-radius 50%
                border .01rem solid #d9d9d9
                margin-right .12rem
              span
                display inline-block
                height 28px
                transform translateY(-6px)
            .text
              font-size 18px
              color #333
              height 50px
              line-height 27px
              margin -.08rem 0 .16rem 0
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-line-clamp 2
              -webkit-box-orient vertical
              font-family PingFangSC-Regular
            .desc
              width 100%
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              font-size 14px
              line-height .4rem
              padding-top .08rem
              color #7f7f7f
            .bottom
              width 100%
              height 16.89px
              margin-bottom 15px
              font-size 12px
              color: #999;
              line-height 16.89px
              margin-top .18rem
          .right
            width 136px
            height 136px
            float right
            border-radius .08rem
            img
              width 100%
              height 100%
</style>
