<template>
  <div class="personal">
    <header>
      <div class="topic-header">
        <div class="left">
          <a href="javascript:;" @click="$router.replace('/home')">
            <i class="iconfont icon-shouye"></i>
          </a>
        </div>
        <div class="main"></div>
        <div class="right">
          <a href="javascript:;">
            <i class="iconfont icon-sousuo"></i>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-gouwuche"></i>
          </a>
        </div>
      </div>
    </header>
    <div class="loginwrap">
      <div class="logowrap">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="btnwrap">
        <div class="phoneBtn" @click="goLogin(true)">
          <i class="iconfont icon-shouji1"></i>
          <span>手机号码登录</span>
        </div>
        <div class="emailBtn" @click="goLogin(false)">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="register">
          <span>手机号快捷注册</span>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
      </div>
    </div>
    <div class="thirdwrap">
      <span class="item">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </span>
      <span class="item">
        <i class="iconfont icon-qq"></i>
        <span>QQ</span>
      </span>
      <span class="item">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </span>
    </div>
  </div>
</template>
<script>
  import PubSub from 'pubsub-js'
  export default {
    methods: {
      goLogin(isTrue){
        if(isTrue){
          this.isPhoneLogin = true
        }else {
          this.isPhoneLogin = false
        }
        const data = this.isPhoneLogin
        PubSub.publish('msg',data)
        this.$router.replace('/login')
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .personal
    background: #F2F5F4;
    height 630px
    header
      position: fixed;
      left: 0;
      top: 0;
      z-index: 99;
      width: 100%;
      height: 1rem;
      background-color: #fafafa;
      box-sizing: border-box;
      border-bottom: .01rem solid #d9d9d9
      .topic-header
        z-index: 1;
        max-width: 768px;
        box-sizing: border-box;
        margin: auto;
        overflow: hidden;
        padding: 0 .26rem 0 .24rem;
        position: relative;
      i
        font-size .6rem
        color black
      .left
        float left
      .right
        float right
      .main
        position: absolute;
        width: 3.2rem;
        height: 100%;
        line-height: 1rem;
        text-align: center;
        left: 50%;
        top: 5px;
        margin-left: -0.8rem;
        font-size: .4rem;
        color: #7F7F7F;
        z-index: 1;
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        background-size 2rem .7rem
        background-repeat no-repeat
    .loginwrap
      position: relative;
      top 37.5px
      height: 100%;
      background: #F2F5F4;
      .logowrap
        text-align: center;
        padding-top: 2.13333rem;
        padding-bottom: 2.13333rem;
        img
          width: 3.57333rem;
          height: 1.2rem;
      .btnwrap
        padding: 0 .53333rem;
        margin-bottom: 2.73333rem;
        .phoneBtn
          margin-bottom: .42667rem;
          width 100%
          height: 1.25333rem;
          line-height: 1.25333rem;
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          font-size: .37333rem;
          color: #fff;
          border: 1px solid #b4282d;
          background-color: #b4282d;
          border-radius: 4px;
          overflow: hidden;
          i
            vertical-align: middle;
            font-size 14px
          span
            text-align: center;
            line-height: .90667rem;
            font-size: .37333rem;
            color: #fff;
        .emailBtn
          margin-bottom: .42667rem;
          width 100%
          height: 1.25333rem;
          line-height: 1.25333rem;
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          font-size: .37333rem;
          color: #fff;
          border: 1px solid #b4282d;
          border-radius: 4px;
          overflow: hidden;
          i
            vertical-align: middle;
            color: #b4282d;
          span
            text-align: center;
            line-height: .90667rem;
            font-size: .37333rem;
            color: #b4282d;
        .register
          color: #333;
          font-size: .37333rem;
          text-align: center;
          width: 100%;
    .thirdwrap
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 1.06667rem;
      height: .53333rem;
      text-align: center;
      .item
        height: .53333rem;
        border-right: 1px solid #979797;
        display: inline-block;
        text-align: center;
        padding: 0 .53333rem;
        font-size .3rem
        color #7f7f7f
        &:last-child
          border-right: none;
</style>
