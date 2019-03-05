//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    btnWord: "I can live with that."
  },
  toStart(option){
    wx.navigateTo({
      url: '/pages/list/list'
    })
  }
})
