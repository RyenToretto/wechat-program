<template>
  <div class="first_view_box">
    <swiper @change="handleChange"
            :indicator-dots="index < 3"
            indicator-color="green"
            indicator-active-color="deeppink">
      <swiper-item><img src="/static/img/firstView/1.jpg" alt="1"></swiper-item>
      <swiper-item><img src="/static/img/firstView/2.jpg" alt="2"></swiper-item>
      <swiper-item><img src="/static/img/firstView/3.jpg" alt="3"></swiper-item>
      <swiper-item><img src="/static/img/firstView/nvsheng.jpg" alt="nvsheng"></swiper-item>
    </swiper>
    <button @click="toBooks" v-if="index === 3">开始体验</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        index: 0
      }
    },
    methods: {
      handleChange (e) {
        this.index = e.mp.detail.current;
      },
      toBooks () {
        wx.switchTab({
          url: "/pages/books/main"
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  $themeColor = #02a774
  .first_view_box
    height 100%
    background-color $themeColor
    swiper,
    swiper-item,
    image
      width 100%
      height 100%
    button
      position absolute
      bottom 40rpx
      left 50%
      margin-left -140rpx
      width 280rpx
      height 60rpx
      border-radius 10rpx
      line-height 60rpx
      text-align center
      color #fff
      background rgba(0, 0, 0, 0.5)
</style>
