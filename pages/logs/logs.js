//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    imgUrls: [
    ],
  },
  onLoad: function () {
    // let musicList = util.request.get('/recommend');
    // console.log(musicList);
    util.request.get('/recommend').then((res) => {
      this.setData({
        imgUrls: res.data.data.slider
      })
    })
  }
  
})
