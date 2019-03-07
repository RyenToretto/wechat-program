let Koa = require("koa");
let KoaRouter = require("koa-router");
let {reqGet} = require("./utils/request");

const app = new Koa();
const router = new KoaRouter();

/*********************** 路由 *************************/
router.get("/", async (ctx, next)=>{
  ctx.body = "这是服务器返回的数据(JSON 字符串)"
})

router.get("/searchBooks", async (ctx, next)=>{
  const req = ctx.query.req;
  const url = `https://api.douban.com/v2/book/search?q=${req}`;
  let result = "";
  
  try{
    result = await reqGet(url);
  }catch (e) {
    console.log("Something wrong: ")
    console.dir(e)
  }
  ctx.body = result;
})

const APPID = "wx345b42da830c9c3a";
const SECRET = "9affc80f8ad3bac9b555344da0c073f6";
router.get("/getOpenId", async (ctx, next)=>{
  const JSCODE = ctx.query.code;
  const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${JSCODE}&grant_type=authorization_code`;
  let result = {};
  
  try{
    result = await reqGet(url);
  }catch (e) {
    console.log("Something wrong: ")
    console.dir(e)
  }
  result = JSON.parse(result.data)
  ctx.body = JSON.stringify({openId: result.openid});
})

const promiseConnect = require('./db/connectDB.js');    // 数据库 编程从这里开始
const Books = require('./db/schema.js')
router.get("/collectBook", async (ctx, next)=>{
  const {isbn, openId} = ctx.query;
  
  // 存用户的收藏书籍 到数据库
  promiseConnect.then(async result=>{
    console.log(result);
    
    const books = await Books.findOne({"openId": openId });
    if(!books){
      // ④ 实例一个 文档对象
      const newBooks = new Books({openId, isbn});
      
      // ⑤ 保存数据
      await newBooks.save();    // 是一个 Promise 对象
    }else if(books.isbnArr.indexOf(isbn)<0){
      books.isbnArr.push(isbn)
      // books.isbnArr.splice(books.isbnArr.indexOf("undefined"), 1)
      // userTable.isbnArr = [...new Set([...userTable.isbnArr])]    // 数组去重
      await books.save();    // 是一个 Promise 对象
    }
  }).catch(err=>console.log(err));
  
  ctx.body = "收藏成功";
})

router.get("/getBookId", async (ctx, next)=>{
  const openId = ctx.query.openId;
  let isbnArr = []
  await new Promise((resolve, reject)=>{
    promiseConnect.then(async result=>{
      console.log(result);
    
      const books = await Books.findOne({"openId": openId });
      if(books){
        isbnArr = books.isbnArr
      }
      resolve()
    }).catch(err=>console.log(err));
  })
  
  ctx.body = isbnArr;
})

router.get("/getBookById", async (ctx, next)=>{
  const req = ctx.query.req;
  const url = `https://api.douban.com/v2/book/isbn/${req}`;
  let result = "";
  
  try{
    result = await reqGet(url);
  }catch (e) {
    console.log("---- Something wrong: ")
    console.dir(e)
  }
  ctx.body = result.data;
})
/******************************************************/
app
  .use(router.routes())    // 中间件 允许多个路由
  .use(router.allowedMethods());    // 运行使用 路由方法

app.listen("4100", ()=>{
  console.log("服务器已经启动： http://localhost:4100/searchBooks?req=css")
});

/*
  koa 的路由回调 支持 async ，即可以运行 异步代码
 */
