const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const request = {
  get: (url) => {
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://music.niubishanshan.top/api/music' + url,
        method: 'GET',
        dataType: 'json',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          resolve(res);
        },
        fail(error) {
          reject(error);
        }
      })
    })
  },
  post: (url, data) => {
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://music.niubishanshan.top/api/music' + url,
        method: 'POST',
        data: data,
        dataType: 'json',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          resolve(res);
        },
        fail(error) {
          reject(error);
        }
      })
    })
  }
}
// 提示框
const openAlert = (content) => {
  wx.showModal({
    content: content,
    showCancel: false,
    success: function (res) {
      if (res.confirm) {
        // console.log('用户点击确定')
      }
    }
  });
}

module.exports = {
  formatTime: formatTime,
  request: request,
  openAlert: openAlert
}
