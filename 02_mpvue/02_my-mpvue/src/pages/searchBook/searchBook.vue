<template>
  <div id="search_box">
    <div class="head">
      <input @confirm="toRequest" confirm-type="搜索" v-model="searchContent" type="text" placeholder="书中自有黄金屋" placeholder-class="placeholder">
      <span v-show="searchContent.length" @click="searchContent=''" class="clean">X</span>
    </div>
    <ul class="books_list_box">
      <li v-for="(book, index) in books" :key="index" @click="toDetail(book)">
        <div>
          <div>
            <img class="book_img" :src="book.image" alt="">
          </div>
          <div class="book_info">
            <p class="ellipsis">{{book.title}}</p>
            <p class="ellipsis">作者：{{book.author}}</p>
            <p class="ellipsis">出版社: {{book.publisher}}</p>
          </div>
        </div>
        <span class="book_price">{{book.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import myRequest from "../../utils/myRequest"
  export default {
    data(){
      return {
        searchContent: '',
        books: []
      }
    },
    methods: {
      async toRequest(){
        const response =  await myRequest("/searchBooks", {req: this.searchContent})
        this.books = response.data.books
      },
      toDetail (book) {
        wx.navigateTo({
          url: `/pages/books/bookDetail/main?book=${JSON.stringify(book)}`
        })
      }
    },
    destroyed () {
      this.searchContent = ""
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #search_box
    .head
      width 80%
      border-bottom 1rpx solid #02a774
      margin 0 auto 20rpx
      height 80rpx
      position relative
      input
        height 100%
        .placeholder
          color #02a774
          text-align center
          font-size 32rpx
      .clean
        position absolute
        z-index 99
        right 10rpx
        top 0
        height 100%
        line-height 80rpx
  .books_list_box
    width 100%
    background-color $themeColor
    li
      width 100%
      margin-bottom 20rpx
      display flex
      align-items center
      justify-content space-between
      >div
        display flex
        align-items center
        >div
          width 200rpx
          height 200rpx
          .book_img
            width 100%
            height 100%
        .book_info
          width 350rpx
          height 180rpx
          font-size 28rpx
          margin-left 20rpx
          display flex
          flex-direction column
          justify-content space-around
          .ellipsis
            width 100%
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
        image
          width 200rpx
          height 200rpx
      .book_price
        margin-right 20rpx
        width 150rpx
</style>
