//index.js
//获取应用实例
const app = getApp()
var Fly = require("../../lib/wx") //wx.js为您下载的源码文件
var fly = new Fly(); //创建fly实例
Page({
  data: {
    recommend:'',
    baseUrl: getApp().globalData.image_base_url
  },
 

  //事件处理函数
  clickSearch: function (event) {
    console.log("点击跳转到搜索页面页面")
  },
  onClickBook: function() {
    console.log("点击跳转到阅读页面")
  },
  onLoad: function () {
    fly.get("http://api.zhuishushenqi.com/book/recommend?gender=male").then((d) => {
      //输出请求数据
      d.data.books.map(el=>{
        if (el.title.length>6){
          el.title = el.title.substring(0, 6) + '...'
        }
        return el
      })
      this.setData({
        recommend: d.data
      });
    }).catch(err => {
      console.log(err.status, err.message)
    })
  }
})
