<template>
  <div class="topic">
    <header>
      <div class="topic-header">
        <div class="left">
          <a href="javascript:;">
            <i class="iconfont icon-shouye"></i>
          </a>
        </div>
        <div class="main">
          <a href="javascript:;" class="active">发现</a>
          <a href="javascript:;">甄选家</a>
        </div>
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
    <div class="topicNav">
      <div class="topic-nav">
        <a href="javascript:;" :class="{active: isCurrent(paths[index])}" v-for="(item,index) in topicData.data" :key="index"
        @click="goto(paths[index])"
        >{{item.tabName}}</a>
      </div>
    </div>
    <div class="navInfo">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        paths: ['/searchgoods/tuijian','/searchgoods/daren','/searchgoods/shangxin','/searchgoods/shaidan','/searchgoods/home']
      }
    },
    mounted(){
      this.$store.dispatch('getTopicData')
    },
    computed: {
      ...mapState(['topicData'])
    },
    methods: {
      goto(path){
        this.$router.push(path)
      },
      isCurrent(path){
        return this.$route.path === path
      }

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .topic
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
        top: 0;
        margin-left: -1.6rem;
        font-size: .4rem;
        color: #7F7F7F;
        z-index: 1;
        a
          margin-right .3rem
          color black
          &.active
            font-size: .6rem;
            color: #b4282d;
            font-weight: bold;
    .topicNav
      width: 100%;
      background: #fafafa;
      border-bottom: .01rem solid #d9d9d9;
      box-sizing: border-box;
      overflow: hidden;
      position: fixed;
      top: 1.02rem;
      left: 0;
      z-index: 20;
      .topic-nav
        width: 100%;
        height: .72rem;
        display flex
        justify-content space-around
        a
          display: inline-block;
          height: .72rem;
          line-height: .72rem;
          box-sizing: border-box;
          font-size: .4rem;
          color: #7F7F7F;
          padding: 0 .08rem;
          margin: 0 .2rem;
          vertical-align: middle;
          &.active
            color: #B4282D;
            border-bottom: .04rem solid #B4282D;
    .navInfo
      margin 2rem 0 1.5rem 0
      overflow hidden
      height 100%
</style>
