//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    image: null,
    time: null,
    userInfo: {},
    hasUserInfo: false,
    userName: null,
    userSchoolCode: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
    
  },
  
  formatTime: function(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    return [year, month, day].map(this.formatNumber).join('-') + ' ' + [hour, minute, second].map(this.formatNumber).join(':')
  },
  
 formatNumber: function(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  },
  formatName: function(name) {
    let res = name.substring(0, 1);
    console.log(name.length)
    for (let i = 1; i < name.length; i ++) {
      res += '*';
    }
    return res;
  },
  formatCode: function(code) {
    let res = code.substring(0, 1);
    let length = code.length;
    for (let i = 1; i < length - 1; i ++) {
      res += '*';
    }
    res += code.charAt(length - 1);
    return res;
  },
  getUserInfo: function (callback) {
    console.log("-----getUserInfo-----")
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      callback(app.globalData.userInfo);
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        callback(res.userInfo);
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
          callback(res.userInfo)
        }
      })
    }
  },
  returnMain: function () {
    // 重定向url
    wx.navigateBack({
      // url: '../index/index',
    })
    // 显示弹窗

    // 弹窗

    // school_gate_success
  },
  onLoad: function () {
    console.log("--------------onLoad---------------")
    // 获取微信基本信息

    this.getUserInfo((userInfo) => {
      
      // 构建 map
      let map = {
        '&nbsp;&nbsp;': {
          name: '李彬',
          code: '201845003',
          image: '/img/my_image.jpg'
        },
        '熊🐻': {
          name: '彬彬',
          code: '201845003',
          image: 'http://www.binhub.top:8080/image?name=my_image.jpg'
        },
        '呼哈哈': {
          name: '王振东',
          code: '201845007',
          image: 'http://www.binhub.top:8080/image?name=school_gate_dongdong.jpg'
        },
        '小姚有点困': {
          name: '姚惠珠',
          code: '201845004',
          image: 'http://www.binhub.top:8080/image?name=school_gate_yao_hui_zhu.jpg'
        },

        '攻城蜗牛': {
          name: '盛振华',
          code: '201845007',
          image: 'http://www.binhub.top:8080/image?name=school_gate_sheng_zhen_hua.jpg'
        },
        'unknown': {
          name: 'unknown',
          code: '2sssssss7',
          image: 'http://www.binhub.top:8080/image?name=hhh.jpg'
        },
        'Shsfo': {
          name: '贾坤',
          code: '2sssssss7',
          image: 'http://www.binhub.top:8080/image?name=school_gate_dongdong.jpg'
        },
        'Dx.': {
          name: '董雪',
          code: '201845009',
          image: 'http://www.binhub.top:8080/image?name=school_gate_dong_xue.jpg'
        },
        'LEE': {
          name: '李振',
          code: '201845009',
          image: 'http://www.binhub.top:8080/image?name=school_gate_dongdong.jpg'
        },
        // school_gate_dong_xue.jpg

      }
      
      let info = map[userInfo.nickName.trim()];
      
      if(info === null || info === undefined) {
        info = map['unknown'];
      }
      console.log("--------------info---------------")
      console.log(info)
      this.setData({
        time: this.formatTime(new Date()),
        userName: this.formatName(info.name),
        userSchoolCode: this.formatCode(info.code),
        image: info.image,
      })

    });

  },
})
