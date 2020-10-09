//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imageDisplay: false,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  openPassPort: function() {
    wx.navigateTo({
      url: '../school/index'
    })
  },
  // lifetimes: {

  //   ready: function () {
  //     console.log("index ready.")
  //     console.log("--imageDisplay--: " + this.imageDisplay)
  //     if(this.imageDisplay) {
  //       console.log("--imageDisplay--")
  //       // setInterval
  //       let that = this;
  //       setTimeout((that) => {
  //         that.setData({
  //           imageDisplay: false,
  //         })
  //       }, 1000);
  //     }
  //   },
  // },
  onShow: function () {

    console.log("index attached.")
    console.log("--imageDisplay--: " + this.imageDisplay)
    setTimeout(() => {

      this.setData({
        imageDisplay: true,
      }, () => {
        setTimeout(() => {
          this.setData({
            imageDisplay: false,
          })
        }, 1000)
      })
    }, 100)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
