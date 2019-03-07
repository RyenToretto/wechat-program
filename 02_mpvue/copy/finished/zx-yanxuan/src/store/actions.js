import {
  RECEIVE_NAVDATA,
  RECEIVE_NAVDETAIL,
  RESET_NAVINDEX,
  RECEIVE_TOPICDATA,
  RECEIVE_RECOMMENDS,
  RECEIVE_EXPERTS,
  RECEIVE_NEWS,
  RECEIVE_HOMES,
  RECEIVE_GETCOLLECTION,
  RECEIVE_GETLISTS,
  RECEIVE_HOMEDATA
} from './mutations-types'
import {reqNavData,reqTopicData,reqRecommends,reqExperts,reqGetCollection,reqGetLists,reqHomeData} from '../api'

export default {
  async getNavData ({commit}) {
    const result = await reqNavData()
    if (result.code === 0) {
      const navData = result.data
      commit(RECEIVE_NAVDATA, {navData})
    }
  },
  setIndex({commit},index){
    commit(RESET_NAVINDEX,{index})
  },
  getNavDetail({commit}) {
    commit(RECEIVE_NAVDETAIL)
  },
  async getTopicData ({commit}) {
    const result = await reqTopicData()
    if (result.code === 0) {
      const topicData = result.data
      commit(RECEIVE_TOPICDATA, {topicData})
    }
  },
  //异步获取推荐数据
  async getRecommends({commit}){
    const result = await reqRecommends()
    if (result.code === '200') {
      const recommends = result.data
      commit(RECEIVE_RECOMMENDS, {recommends})
    }
  },
  //异步获取达人数据
  async getExperts({commit}){
    const result = await reqExperts(5,4)
    if (result.code === '200') {
      const experts = result.data.result
      commit(RECEIVE_EXPERTS, {experts})
    }
  },
  //异步获取上新数据
  async getNews({commit}){
    const result = await reqExperts(5,5)
    if (result.code === '200') {
      const news = result.data.result
      commit(RECEIVE_NEWS, {news})
    }
  },
  //异步获取HOME数据
  async getHomes({commit}){
    const result = await reqExperts(5,6)
    if (result.code === '200') {
      const homes = result.data.result
      commit(RECEIVE_HOMES, {homes})
    }
  },
  //异步获取晒单数据
  async getHomeData({commit}){
    const result = await reqHomeData()
    if (result.code === '200') {
      const homeData = result.data.recModule
      commit(RECEIVE_HOMEDATA, {homeData})
    }
  },
  async getLists({commit}){
    const result = await reqGetLists()
    if (result.code === '200') {
      const lists = result.data.topicList
      commit(RECEIVE_GETLISTS, {lists})
    }
  },
  async getCollection({commit}){
    const result = await reqGetCollection()
    if (result.code === '200') {
      const collection = result.data
      commit(RECEIVE_GETCOLLECTION, {collection})
    }
  },
}
