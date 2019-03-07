## 数据说明
  1. cateList: 首页tab列表页说明
  
  
## shouye_data
  1. newItemList: 新品收发
  2. sceneLightShoppingGuideModule： 
    1. 实时好评
    2. 新品热销
    3. 严选线下店家首选
    
## 网易在线接口
  1. 实物tab: http://m.you.163.com/topic/v1/find/getTabs.json
  2. 实物推荐默认： http://m.you.163.com/topic/v1/find/recManual.json
  3. 实物推荐分页加载api:
    1. 示例： http://m.you.163.com/topic/v1/find/recAuto.json?page=3&size=5&exceptIds=6201,5888,4035,4513,4037,6242,5950,5942,5821,5716,5867,5868,5823,5714,5980,5641,5213,4740,2876,3438,2747,4210,2077,3773,5711,5950,5715,4618,4678,4273,3707,3686
    2. url: http://m.you.163.com/topic/v1/find/recAuto.json
    3. 参数：
      page = number ---> number为分页加载的页数，根据加载的次数一次累加
      size = number ---> number为加载数据的大小
      exceptIds = id ---> id为请求数据的id，当前ID不需要改动
      



### 实物tab数据接口
  1. 请求方式： GET
  2. 请求的url： http://m.you.163.com/topic/v1/find/getTabs.json
  
### 实物列表数据
  1. 推荐： 
    请求的url: http://m.you.163.com/topic/v1/find/recManual.json
    请求的方式： GET
    
    
### 搜索接口
  1. url: http://m.you.163.com/xhr/search/searchAutoComplete.json?csrf_token=b3562f9291acf772228f8aa617e
  2. 方式： post
  3. 参数：keywordPrefix: 表单相输入的内容
  4.返回的数据格式：json ---> {"data":["按摩","按摩椅"],"code":"200"}
    
    

