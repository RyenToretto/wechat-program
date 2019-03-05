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
  
  const result = await reqGet(url);
  ctx.body = "这是服务器返回的数据(JSON 字符串)";
})
/******************************************************/

app
  .use(router.routes())    // 中间件 允许多个路由
  .use(router.allowedMethods());    // 运行使用 路由方法

app.listen("4100", ()=>{
  console.log("服务器已经启动： http://localhost:4100")
});

/*
  koa 的路由回调 支持 async ，即可以运行 异步代码
 */
