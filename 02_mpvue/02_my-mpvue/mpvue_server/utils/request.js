let Fly = require("flyio/src/node")
let fly = new Fly();

exports.reqGet = function (url) {
  return new Promise((resolve, reject)=>{
    fly.get(url)
      .then(response=>resolve(response))
      .catch(err=>{console.log(err)})
  })
}

