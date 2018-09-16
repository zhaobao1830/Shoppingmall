//index.js
//获取应用实例
const app = getApp()
const baseUrl = 'http://z.cn/api/v1';
Page({
  onLoad: function () {
  },
  getToken: function () {
    // 调用登录接口
    wx.login({
      success: function (res) {
        var code = res.code
        console.log('code')
        console.log(code)
        wx.request({
            url: baseUrl + "/token/user?XDEBUG_SESSION_START=11009",
            data: {
              code: code
            },
            method: 'POST',
            success: res => {
                console.log(res.data)
            },
            fail: err => {
              console.log(err)
            }
        })
      }
    })
  }
})
