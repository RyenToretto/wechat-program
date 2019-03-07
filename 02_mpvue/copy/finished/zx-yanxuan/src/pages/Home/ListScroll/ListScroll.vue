<template>
  <div class="home-list">
    <ul>
      <li v-for="(list, index) in lists" :key="index">
        <span>{{list}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        lists: ['推荐','居家','鞋包配饰','服装','电器','洗护','饮食','餐厨','哈哈','哈哈']
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .home-list
    width 100%
    height 100%
    ul
      padding 0 .4rem
      background #ffffff
      clearFix()
      li
        float left
        margin 0 .2rem
        span
          font-size .3rem
          text-align center
          color gray
</style>
