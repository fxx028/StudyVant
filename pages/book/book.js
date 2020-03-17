// pages/book/book.js
//获取应用实例
const app = getApp()
var Fly = require("../../lib/wx") //wx.js为您下载的源码文件
var fly = new Fly(); //创建fly实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '4',
    book_details: "",
    baseUrl: getApp().globalData.image_base_url,
    colorLidt: ["#f2826a", "#72b2dd", "#ffe1a1", "#f1e1a1",
      "#f5e181", "#ffc191", "#afe1a1", "#cce1a1", "#fde1a1", "#dfe1a1"],
    book_preview:"",
    people_review:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    fly.get("http://api.zhuishushenqi.com/book/53ad795c75dfd5fa0d8ae982").then((d) => {
      //输出请求数据
      console.log(d.data)
      this.setData({
        book_details: d.data
      });
    }).catch(err => {
      console.log(err.status, err.message)
    }),
      fly.get("http://api.zhuishushenqi.com/book-list/53ad795c75dfd5fa0d8ae982/recommend?limit=3").then((d) => {
        //输出请求数据
        console.log(d.data)
        this.setData({
          book_preview: d.data
        });
      }).catch(err => {
        console.log(err.status, err.message)
      })
      ,
      fly.get("http://api.zhuishushenqi.com/post/review/best-by-book?book=53ad795c75dfd5fa0d8ae982").then((d) => {
        //输出请求数据
        console.log(d.data)
        this.setData({
          people_review: d.data
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