<template>
  <div class="scan_read_box">
    <p class="scan_btn" @click="scanPic">扫码读书</p>
  </div>
</template>

<script>
  import myRequest from '../../../utils/myRequest'

  export default {
    data () {
      return {
        bookId: 0,
        book: []
      }
    },
    mounted () {
    
    },
    methods: {
      scanPic () {
        wx.scanCode({
          success:  async (response)=>{
            if(response.result){
              this.bookId = response.result
              this.book = await myRequest("/getBookById", {req: this.bookId})
              wx.navigateTo({
                url: "/pages/books/bookDetail/main?book="+JSON.stringify(this.book)
              })
            }
          },
          fail: (err)=>console.log(err)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $themeColor = #02a774
  .scan_read_box
    width 100%
    height 100%
    .scan_btn
      width 94%
      height 100rpx
      border-radius 10rpx
      margin 20rpx auto
      color $themeColor
      background-color: #eee
      border 1rpx solid #aaa
      display flex
      justify-content center
      align-items center
</style>
