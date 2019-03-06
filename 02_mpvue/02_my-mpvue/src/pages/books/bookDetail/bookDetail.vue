<template>
  <div class="book_detail_box">
    <div class="top_box">
      <p class="detail_title">{{book.title}}</p>
      <img class="detail_image" :src="book.image" alt="">
      <div class="detail_info">
        <p class="detail_author">作者：{{book.author}}</p>
        <p class="detail_pubdate">出版社：{{book.pubdate}}</p>
        <p class="detail_publisher">出版日期：{{book.publisher}}</p>
        <p class="detail_price">定价：{{book.price}}</p>
      </div>
    </div>
    <div class="bottom_box">
      <button class="detail_collect" @click="collectThis(book.isbn10?book.isbn10:book.isbn13)"
              @getuserinfo="clickLogin"
              open-type="getUserInfo">
        收藏该文章
      </button>
      <header class="intro_title">作者简介...</header>
      <p class="detail_intro" v-for="(intro, index) in book.author_intros" :key="index">{{intro}}</p>
      <header class="summary_title">内容简介...</header>
      <p class="detail_summary" v-for="(summary, index) in book.summarys" :key="index">{{summary}}</p>
    </div>
  </div>
</template>

<script>
  import myRequest from '../../../utils/myRequest'

  export default {
    data () {
      return {
        book: {},
        openId: 0
      }
    },
    mounted () {
      try{
        this.book = JSON.parse(this.$mp.query.book)
      }catch (e) {
        console.log(e)
        console.log("------------ 接口异常 -----------")
        console.log(this.$mp.query.book)
        console.log("------------ 对象是 -----------")
        console.log(this.book)
      }
      this.book.author_intros = this.book.author_intro.split("<br>")
      this.book.summarys = this.book.summary.split("<br>")
      wx.getStorage({
        key: "openId",
        success: (response)=>{
          this.openId = response.data
        },
        fail: (err)=>console.log(err)
      })
    },
    methods: {
      async collectThis (isbn) {
        if(this.openId){
          try{
            const result = await myRequest("/collectBook", {isbn, openId:this.openId}, "GET")
          }catch (e) {
            console.log("Something wrong: ")
            console.dir(e)
          }
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  $themeColor = #02a774
  .book_detail_box
    width 100%
    .top_box,
    .bottom_box
      displa flex
      flex-direction column
      align-items center
    .top_box
      width 80%
      padding 0 10%
      .detail_info
        font-size 32rpx
        color #aaa
        p
          line-height 60rpx
    .bottom_box
      width 94%
      padding 0 3%
      .detail_collect
        width 30%
        margin 40rpx auto 60rpx
        border 2rpx solid #ccc
        border-radius 10rpx
        line-height 60rpx
        font-size 28rpx
        background-color #eee
      .intro_title,
      .summary_title
        font-weight 700
        color $themeColor
      .detail_intro,
      .detail_summary
        text-indent 2em
    .detail_title,
    .detail_image,
    .detail_info,
    .detail_collect,
    .intro_title,
    .detail_intro,
    .summary_title,
    .detail_summary
      width 100%
    .detail_title,
    .detail_collect,
    .intro_title,
    .summary_title
      text-align center
      line-height 100rpx;
</style>
