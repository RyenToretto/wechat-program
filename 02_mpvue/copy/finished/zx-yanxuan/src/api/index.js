import ajax from './ajax'
const BASE = '/api'
export const reqNavData = () => ajax('/navdata')
export const reqTopicData = () => ajax('/topicdata')
//获取识物导航中推荐的数据
export const reqRecommends = () => ajax(BASE + '/find/recManual.json')
//达人的数据
// export const reqExperts = () => ajax(BASE + '/find/getTabData.json?page=1&size=5&tabId=4')
let count = 0
export const reqExperts = (sCount,id) => {
  count++
  return ajax(BASE + '/find/getTabData.json',{page: count,size: sCount,tabId: id})
}

//晒单中的数据
export const reqHomeData = () => ajax(BASE + '/look/homeData.json',{csrf_token : '39feb96f03f16ac9ec9cce07e1959e28'})
// export const reqHomeData = () => ajax(BASE + '/look/getList.json?page=1&size=20&type=1&csrf_token=39feb96f03f16ac9ec9cce07e1959e28')
export const reqGetLists = () => ajax(BASE + '/look/getList.json',{page:1,size:20,type:1,csrf_token:'39feb96f03f16ac9ec9cce07e1959e28'})
export const reqGetCollection = () => ajax(BASE + '/look/getCollection.json',{id:26,csrf_token:'39feb96f03f16ac9ec9cce07e1959e28'})
