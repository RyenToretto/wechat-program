const host = "http://localhost:4100"
export default function (url, data="", method="GET") {
  return new Promise((resolve, reject)=>{
    wx.request({
      url: host+url,
      data, method,
      success: (response)=>resolve(response.data),
      fail: (err)=>reject(err)
    })
  })
}
