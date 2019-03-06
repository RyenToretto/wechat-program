<script>
  import myRequest from "./utils/myRequest"
  export default {
    mounted () {
      wx.login({
        success: async ({code})=>{
          const result = await myRequest("/getOpenId", {code}, "GET")
          wx.setStorage({
            key: "openId",
            data: result.openId
          })
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  page {
    height: 100%;
  }
</style>
