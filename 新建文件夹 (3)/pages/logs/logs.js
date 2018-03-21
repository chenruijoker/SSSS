//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  clickme: function () {
    this.setData({ msg: "queen" }),
      wx.scanCode({
        success: (res) => {
          console.log(res)
        }
      })
  },
  onLoad: function () {
   
    this.setData({
      msg:"joker",
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      },
    
      )
    })
  }
})
