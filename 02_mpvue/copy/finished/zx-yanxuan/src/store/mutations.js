//直接更新state的方法


import {
  RECEIVE_NAVDATA,
  RESET_NAVINDEX,
  RECEIVE_NAVDETAIL,
  RECEIVE_TOPICDATA,
  RECEIVE_RECOMMENDS,
  RECEIVE_EXPERTS,
  RECEIVE_NEWS,
  RECEIVE_HOMES,RECEIVE_HOMEDATA,RECEIVE_GETLISTS,RECEIVE_GETCOLLECTION
} from './mutations-types'


//获取nav页数据
export default {
  [RECEIVE_NAVDATA] (state, {navData}) {
    state.navData = navData
  },

  [RESET_NAVINDEX] (state, {index}) {
    state.navIndex = index
  },
  [RECEIVE_NAVDETAIL] (state) {
    state.navDetail = state.navData[state.navIndex]
  },
  [RECEIVE_TOPICDATA] (state, {topicData}) {
    state.topicData = topicData
  },
  [RECEIVE_RECOMMENDS] (state, {recommends}) {
    state.recommends = recommends
  },
  [RECEIVE_EXPERTS] (state, {experts}) {
    state.experts = experts
  },
  [RECEIVE_NEWS] (state, {news}) {
    state.news = state.news.concat(news)
  },
  [RECEIVE_HOMES] (state, {homes}) {
    state.homes = state.homes.concat(homes)
  },
  [RECEIVE_HOMEDATA] (state, {homeData}) {
    state.homeData = homeData
  },
  [RECEIVE_GETLISTS] (state, {lists}) {
    state.lists = lists
  },
  [RECEIVE_GETCOLLECTION] (state, {collection}) {
    state.collections = collection
  },


}
