<template>
  <div class="loginwrap">
    <div class="content">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="userLogin">
        <div class="inner">
          <div class="public username">
            <input type="text" title="" :placeholder="isPhoneLogin?'请输入手机号':'请输入邮箱'" v-model="username">
          </div>
          <div class="public pwd">
            <input type="text" maxlength="8" title="" :placeholder="loginWay===0?'请输入短信验证码':'请输入密码'" v-if="isPhoneLogin" v-model="pwd">
            <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
            <button class="btn-code" v-if="isPhoneLogin && loginWay===0">获取验证码</button>
          </div>
          <div class="help">
            <div class="left">
              <span v-if="loginWay===0">遇到问题?</span>
              <span v-else>忘记密码?</span>
            </div>
            <div class="right" @click="toggleWay">
              <span v-if="isPhoneLogin">使用{{loginWay===0?'短信':'密码'}}验证登录</span>
              <span v-if="!isPhoneLogin">忘记密码?</span>
            </div>
          </div>
          <div class="btn btn-login" @click="login">
            <span>登录</span>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="btn other-login" @click="$router.replace('/personal')">
          <span>其他登录方式</span>
        </div>
        <div class="register">
          <span>注册帐号</span>
          <i class="icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import { MessageBox, Toast} from 'mint-ui';
  export default {
    name: '',
    data () {
      return {
        isPhoneLogin: true,  //是否为手机号登陆
        loginWay: 0, //0手机短信验证 ,否则1为密码
        username: '' , //手机号或者邮箱
        pwd: '' ,  //短信验证码或者密码
      }
    },
    mounted(){
      PubSub.subscribe('msg', (msg, data) => {
          this.isPhoneLogin = data
      })
    },
    computed: {
      isNormalPhone(){
        return /^1\d{10}$/.test(this.username)
      },
      isNormalEmail(){
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.username)
      }
    },
    methods: {

      toggleWay(){
        if(this.isPhoneLogin){
          if(this.loginWay ===0){
            this.loginWay = 1
          }else{
            this.loginWay = 0
          }
        }

      },

      login(){
        const {isPhoneLogin,loginWay,username,pwd}  = this
        if(isPhoneLogin){
          if(!this.isNormalPhone || !/\d{11}/.test(username)){
            return Toast('请输入正确手机号~')
          }
          if(loginWay === 0){
            if(!/\d{6}/.test(pwd)){
              return Toast('请输入正确验证码~')
            }
          }else{
            if(!this.pwd){
              return Toast('请输入正确密码~')
            }
          }
          Toast('登录成功,即将跳转到首页~')
          setTimeout(()=>{
            this.$router.replace('/home')
          },2000)
        }else{
          if(!this.isNormalEmail){
            return Toast('请输入正确邮箱~')
          }
          if(!this.pwd){
            return Toast('请输入正确密码~')
          }
          Toast('登录成功,即将跳转到首页~')
          setTimeout(()=>{
            this.$router.replace('/home')
          },2000)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .loginwrap
    width 100%
    .content
      width 100%
      position fixed
      top 1.17333rem
      left 0
      z-index 10
      .btn
        width 100%
        height 1.28rem
        font-size 0.4rem
        text-align center
        line-height 1.28rem
        border-radius 3px
      .logo
        width 100%
        text-align center
        margin-top .74667rem
        margin-bottom 0
        img
          width 2.56rem
          height .85333rem
      .userLogin
        width 100%
        height: 286px
        margin-top .23333rem
        .inner
          padding 0 0.555556rem
          padding-top 1.6rem
          .public
            width 100%
            height 1.28rem
            line-height 0.6rem
            bottom-border-1px(#d9d9d9)
            margin-bottom 0.4rem
            input
              width 8.27rem
              height 0.6rem
              font-size 0.4rem
              line-height 0.6rem
              margin 0.39rem 0
              padding-left 0
              -webkit-tap-highlight-color transparent
              letter-spacing normal
              outline none
          .pwd
            position relative
            input
              width 5.33rem
            .btn-code
              position absolute
              right 0.22rem
              top 0.3rem
              z-index: 100;
              display block
              width 2.3rem
              height 0.75rem
              text-align center
              color #333
              font-size 14px
              background #fff
              line-height 0.75rem
              border 1px solid #7F7F7F
              border-radius 4px
          .help
            height 0.582rem
            line-height 0.582rem
            padding 0.233rem 0 2.24rem
            .left
              float left
              height 0.6rem
              text-decoration none
              cursor pointer
              color #7f7f7f !important
              font-size 0.4rem
              line-height 0.6rem
            .right
              float right
              background none
              color #333
              font-size 0.4rem
              height 0.6rem
              padding 0
              line-height 0.6rem
          .btn-login
            background #b4282d
            margin-top -1.1rem
            cursor pointer
            color #fff
      .footer
        margin-top 1.3rem
        padding 0 .53333rem
        .other-login
          color #b4282d
          background-color transparent
          border 1px solid #b4282d
        .register
          margin-top .12667rem
          text-align center
          line-height .53333rem;
          span
            font-size .37333rem
            line-height .53333rem
            color #333
          .icon
            margin-left .05333rem
            transform translateY(.1rem)
            display inline-block
            vertical-align middle
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png)
            background-repeat no-repeat
            background-size 100% 100%
            width .37333rem
            height .37333rem
</style>
