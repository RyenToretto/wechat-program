<template>
  <ul class="personal_box">
    <li class="login_box">
      <img class="login_img" :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/img/personal/personal.png'" alt="avatar">
      <button v-if="userInfo.nickName" class="login_btn">
        {{userInfo.nickName}}
      </button>
      <button v-else class="login_btn"
              @getuserinfo="clickLogin"
              open-type="getUserInfo">
        登录
      </button>
    </li>
    
    <li class="line_nav">
      <div class="line_card" @click="toMyCollection">
        <span class="my_collect">我的收藏</span>
        <span class="scan_to_read">more &gt; </span>
      </div>
    </li>
    <li class="line_nav">
      <div class="line_card" @click="toScanRead">
        <span class="my_collect">扫码看书</span>
        <span class="scan_to_read">more &gt; </span>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        userInfo: {}
      }
    },
    mounted () {
      wx.getUserInfo({
        success: (response)=>{
          this.userInfo = response.userInfo
        }
      })
    },
    methods: {
      clickLogin (res) {
        if(res.mp.detail.userInfo){
          this.userInfo = res.mp.detail.userInfo
        }
      },
      toScanRead () {
        wx.navigateTo({
          url: "/pages/personal/scanRead/main"
        })
      },
      toMyCollection () {
        wx.navigateTo({
          url: "/pages/personal/myCollection/main"
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $themeColor = #02a774
  .personal_box
    width 100%
    .login_box
      width 100%
      height 180rpx
      background-color $themeColor
      display flex
      align-items center
      image
        width 100rpx
        height 100rpx
        border-radius 50%
        margin 0 30rpx
      .login_btn
        height 60rpx
        margin 0
        line-height 60rpx
        font-size 32rpx
        background rgba(255,255,255, .8)
    .line_nav
      width 100%
      .line_card
        width 94%
        margin 20rpx 3% 0
        box-sizing border-box
        padding 20rpx 10rpx
        border 1rpx solid #eeeeee
        border-radius 10rpx
        font-size 34rpx
        background-color $fff
        display flex
        justify-content space-between
        align-items center
</style>
