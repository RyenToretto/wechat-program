<template>
  <div class="my_collection_box">
    <ul class="books_list_box">
      <li v-for="(book, index) in books" :key="index" @click="toDetail(book)">
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
  </div>
</template>

<script>
  import myRequest from '../../../utils/myRequest'

  export default {
    data () {
      return {
        books: []
      }
    },
    mounted () {
      wx.getStorage({    // 根据 openId 获取数据库中的 isbn，再获取到 book
        key: "openId",
        success: async (response)=>{
          this.openId = response.data
          const isbnArr = await myRequest("/getBookId", {openId: this.openId})
          const books = []
          await new Promise((resolve, reject)=>{
            isbnArr.forEach(async isbn=>{
              const newBook = await myRequest("/getBookById", {req: isbn})
              books.push(newBook)
            })
            resolve()
          })
          this.books = books
        },
        fail: (err)=>console.log(err)
      })
    },
    methods: {
      toDetail (book) {
        wx.navigateTo({
          url: `/pages/books/bookDetail/main?book=${JSON.stringify(book)}`
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  $themeColor = #02a774
  page
    background-color: $themeColor
  .my_collection_box
    width 100%
    height 100%
    .books_list_box
      width 100%
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
