<template>
  <div class="books_box">
    <swiper indicator-dots
            indicator-color="green"
            indicator-active-color="deeppink">
      <swiper-item><img src="/static/img/firstView/1.jpg" alt="1"></swiper-item>
      <swiper-item><img src="/static/img/firstView/2.jpg" alt="2"></swiper-item>
      <swiper-item><img src="/static/img/firstView/3.jpg" alt="3"></swiper-item>
      <swiper-item><img src="/static/img/firstView/nvsheng.jpg" alt="nvsheng"></swiper-item>
    </swiper>
    <header class="books_nav">
      <span class="all_books">全部商品</span>
      <span class="more_books" @click="toBooksList">&gt;</span>
    </header>
    <ul class="books_ul">
      <li v-for="(book, index) in books" :key="index" @click="toDetail(index)">
        <img class="book_img" :src="book.image" alt="">
        <p class="book_title">《{{book.title}}》</p>
        <p class="book_author">{{book.author}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import books from "./datas/data.json"
  export default {
    data () {
      return {
        books: []
      }
    },
    mounted () {
      this.books = books
    },
    methods: {
      toBooksList () {
        wx.navigateTo({
          url: "/pages/books/booksList/main?books="+JSON.stringify(this.books)
        })
      },
  
      toDetail (index) {
        wx.navigateTo({
          url: `/pages/books/bookDetail/main?book=${JSON.stringify(this.books[index])}`
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  $themeColor = #02a774
  .books_box
    width 100%
    swiper,
    swiper-item
      width 100%
      image
        width 100%
    .books_nav
      width 100%
      display flex
      justify-content space-between
      align-items center
      .all_books
        margin-left 20rpx
      .more_books
        width 100rpx
        margin-right 20rpx
        text-align right
    .books_ul
      display flex
      flex-wrap wrap
      li
        width 50%
        display flex
        flex-direction column
        align-items center
        padding 10rpx
        box-sizing border-box
        border-bottom 1rpx solid #eee
        &:nth-child(2n + 1)
          border-right 1rpx solid #eee
        img
          width 200rpx
          height 200rpx
        p
          font-size 32rpx
          line-height 60rpx
</style>
