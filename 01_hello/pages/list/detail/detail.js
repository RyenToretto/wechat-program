// pages/list/detail/detail.js
const myData = require("../../../datas/list-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    articleIndex: -1,

    isCollected: false,
    isPlay: false
  },
  manageMusic () {
    const isPlay = !this.data.isPlay;
    this.setData({isPlay});

    if(isPlay){
      const musicManager= wx.getBackgroundAudioManager();
      const {dataUrl, title, coverImgUrl} = this.data.article.music;
      musicManager.src = dataUrl, title, coverImgUrl
      musicManager.title = title
      musicManager.coverImgUrl = coverImgUrl
    }else{
      
    }
  },
  collectArticle () {
    const isCollected = !this.data.isCollected;
    this.setData({isCollected});

    const title = isCollected ? "收藏成功" : "取消收藏";
    wx.showToast({ title});

    const articleIndex = this.data.articleIndex;
    let storageData = wx.getStorageSync("isCollected");
    storageData = storageData?storageData:{};
    storageData[articleIndex] = isCollected;

    wx.setStorage({
      key: "isCollected",
      data: storageData
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {index: articleIndex} = options
    this.setData({
      article: myData.list_data[articleIndex],
      articleIndex
    });

    const storageData = wx.getStorageSync("isCollected");
    const isCollected = storageData[articleIndex];
    if(isCollected){
      this.setData({
        isCollected
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})