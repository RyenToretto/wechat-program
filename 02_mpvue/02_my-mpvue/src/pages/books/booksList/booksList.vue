<template>
  <ul class="books_list_box">
    <li v-for="(book, index) in books" :key="index" @click="toDetail(index)">
      <div>
        <img class="book_img" :src="book.image" alt="">
        <div class="book_info">
          <p>{{book.title}}</p>
          <p>作者：{{book.author}}</p>
          <p>出版社: {{book.publisher}}</p>
        </div>
      </div>
      <span class="book_price">{{book.price}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        books: []
      }
    },
    mounted () {
      this.books = JSON.parse(this.$mp.query.books)
    },
    methods: {
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
  .books_list_box
    width 100%
    background-color $themeColor
    li
      width 100%
      display flex
      align-items center
      justify-content space-between
      >div
        display flex
        align-items center
        .book_info
          font-size 28rpx
          line-height 50rpx
          margin-left 20rpx
          display flex
          flex-direction column
        image
          width 200rpx
          height 200rpx
      .book_price
        margin-right 20rpx
</style>
