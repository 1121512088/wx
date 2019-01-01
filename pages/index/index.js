//index.js
//获取应用实例
const app = getApp();
const util = require('../../utils/util.js');

Page({
  data: {
    imgUrls: [],
    radioList: []
  },
  onLoad: function () {
    // let musicList = util.request.get('/recommend');
    // console.log(musicList);
    util.request.get('/recommend').then((res) => {
      this.setData({
        imgUrls: res.data.data.slider,
        radioList: res.data.data.radioList,
      })
    })
  }
})
