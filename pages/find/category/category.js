// pages/find/category/category.js
//获取应用实例
const app = getApp()
var Fly = require("../../../lib/wx") //wx.js为您下载的源码文件
var fly = new Fly(); //创建fly实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    female: "",
    male: "",
    press: "",
    baseUrl: getApp().globalData.image_base_url
  },

  onClickFemale: function (e) {
    console.log("index：" + e.target.id)
  },
  onClickMale: function (e) {
    console.log("index：" + e.target.id)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fly.get("http://api.zhuishushenqi.com/cats/lv2/statistics").then((d) => {
      console.log(d.data)
      this.setData({
        female: d.data.female,
        male: d.data.male,
        press: d.data.press
      });
    }).catch(err => {
      console.log(err.status, err.message)
    })
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