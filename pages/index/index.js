//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imageDisplay: false,
  },
  openPassPort: function() {
    wx.navigateTo({
      url: '../school/index'
    })
  },
  locationScanCode: function() {
    let that = this;
    wx.scanCode({
      onlyFromCamera: false,
      scanType: ['qrCode'],
      success: function(res) {
        // 返回值中包含rawData和result两个字段，
        // 对rawData进行一次base64解码得到 result 中内容
        // 对rawData进行两次base64解码可得到如下形式
        // pid=60101070_3&timestamp=1590556690000
        // 注测试扫码的是软件园校区餐厅70桌3号座位上的二维码

        console.log(res);
        // 打开新页面
        that.openPassPort();
      },
      fail: function(res) {

        console.log(res);
      }
    })
  },

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
  },
})
