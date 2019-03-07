<template>
  <div class="wrap">
    <div class="home_2">
      <div class="inner" v-for="(home,index) in homes" :key="index">
        <div class="title">{{home.title}}</div>
        <div class="pic">
          <img :src="home.picUrl" alt="">
        </div>
        <div class="rcount">
          <i class="iconfont icon-yanjing"></i>
          <span>{{home.readCount}}</span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getHomes')
    },
    computed: {
      ...mapState(['homes'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    width 100%
    .home_2
      .inner
        width: 100%;
        background: #fff;
        margin: .2rem 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: .36rem .3rem;
        .title
          font-size: 0.5rem;
          color: #333;
          line-height: .52rem;
          margin: -.08rem 0 .16rem 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          font-family: PingFangSC-Regular;
        .pic
          width: 345px;
          height: 188px;
          position: relative;
          margin-bottom: .2rem;
          overflow: hidden;
          border-radius: .08rem;
          img
            width 100%
            height 100%
        .rcount
          font-size: .22rem;
          color: #999;
          line-height: .32rem;
          margin-top: .18rem;
</style>
