// pages/detail/detail.js
const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList: {},
    hide: false,
    name: '此时此刻',
    author: '许巍',
    src: '',
    poster: '../../image/good.png' 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { id } = options;
    util.request.get(`/songIdlist/${id}`).then((res) => {
      this.setData({
        detailList: res.data.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio');
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
    wx.playBackgroundAudio({
      dataUrl: this.data.src,
      title: '',
      coverImgUrl: ''
    })
    // wx.seekBackgroundAudio({
    //   position: 30
    // })
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

  },
  audioPlay(event) {
    const { songmid, singer, songname } = event.currentTarget.dataset;
    util.request.get(`/songUrllist/${songmid}`).then((res) => {
      let srcUrl = res.data.data[0];
      if (srcUrl !== 'http://isure.stream.qqmusic.qq.com//') {
        this.setData({
          src: srcUrl,
          name: singer,
          author: songname,
          hide: true
        }, () => {
          this.audioCtx.play();
        })
      } else {
        util.openAlert('暂无权限! sorry');
      }

    })  
  }
})