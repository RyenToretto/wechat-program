import Mock from 'mockjs'
import navData from './datas/fenlei_zhuanqu.json'
import topicData from './datas/topic.json'
import topicDataInfo from './datas/topic_data.json'


Mock.mock('/navdata', {
  code: 0,
  data: navData.categoryL1List
})
Mock.mock('/topicdata', {
  code: 0,
  data: topicData
})
Mock.mock('/topicdatainfo', {
  code: 0,
  data: topicDataInfo
})
