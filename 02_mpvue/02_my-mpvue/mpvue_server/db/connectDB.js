const promiseConnect = new Promise((resolve, reject)=>{
  // 1. 引入 moogose 模块
  const mongoose = require('mongoose');
  
  // 2. 连接本地数据库
  mongoose.connect('mongodb://localhost:27017/userBooks', {useNewUrlParser: true});
  
  // 3. 绑定监听事件
  mongoose.connection.once('open', err => {
    if(err){
      reject(err);
    }else{
      resolve('数据库连接成功！');
    }
  });
});

module.exports = promiseConnect;
