import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('@/components/index/index')
// import index from '@/components/index/index'
// 集团介绍
const introduction = () => import('@/components/introduction/introduction')
const structure = () => import('@/components/introduction/structure/structure')
const cultural = () => import('@/components/introduction/cultural/cultural')
const develop = () => import('@/components/introduction/develop/develop')

// import introduction from '@/components/introduction/introduction'
// import structure from '@/components/introduction/structure/structure'
// import cultural from '@/components/introduction/cultural/cultural'
// import develop from '@/components/introduction/develop/develop'
// 成员公司
const memberCompany = () => import('@/components/memberCompany/memberCompany')
const changan = () => import('@/components/memberCompany/changan/changan')
const haihanghuoyun = () => import('@/components/memberCompany/haihanghuoyun/haihanghuoyun')
const haihangsuyun = () => import('@/components/memberCompany/haihangsuyun/haihangsuyun')
const jinpeng = () => import('@/components/memberCompany/jinpeng/jinpeng')
const myCargo = () => import('@/components/memberCompany/myCargo/myCargo')
const tianjinhangyu = () => import('@/components/memberCompany/tianjinhangyu/tianjinhangyu')
const tianjinhuohang = () => import('@/components/memberCompany/tianjinhuohang/tianjinhuohang')
const xianggang = () => import('@/components/memberCompany/xianggang/xianggang')

// import memberCompany from '@/components/memberCompany/memberCompany'
// import changan from '@/components/memberCompany/changan/changan'
// import haihanghuoyun from '@/components/memberCompany/haihanghuoyun/haihanghuoyun'
// import haihangsuyun from '@/components/memberCompany/haihangsuyun/haihangsuyun'
// import jinpeng from '@/components/memberCompany/jinpeng/jinpeng'
// import myCargo from '@/components/memberCompany/myCargo/myCargo'
// import tianjinhangyu from '@/components/memberCompany/tianjinhangyu/tianjinhangyu'
// import tianjinhuohang from '@/components/memberCompany/tianjinhuohang/tianjinhuohang'
// import xianggang from '@/components/memberCompany/xianggang/xianggang'
// 业务产品
const business = () => import('@/components/business/business')
const aviationTrafficService = () => import('@/components/business/aviation_traffic_service/aviation_traffic_service')
const lineTrafficService = () => import('@/components/business/line_traffic_service/line_traffic_service')
const spaTruckService = () => import('@/components/business/spa_truck_service/spa_truck_service')
const complexService = () => import('@/components/business/complex_service/complex_service')
const otherService = () => import('@/components/business/other_service/other_service')

// import business from '@/components/business/business'
// import aviationTrafficService from '@/components/business/aviation_traffic_service/aviation_traffic_service'
// import lineTrafficService from '@/components/business/line_traffic_service/line_traffic_service'
// import spaTruckService from '@/components/business/spa_truck_service/spa_truck_service'
// import complexService from '@/components/business/complex_service/complex_service'
// import otherService from '@/components/business/other_service/other_service'
// 集团要闻
const importantNews = () => import('@/components/importantNews/importantNews')
const newsList = () => import('@/components/importantNews/newsList/newsList')

// import importantNews from '@/components/importantNews/importantNews'
// import newsList from '@/components/importantNews/newsList/newsList'
// 社会责任
const responsibility = () => import('@/components/responsibility/responsibility')
const content = () => import('@/components/responsibility/content/content')

// import responsibility from '@/components/responsibility/responsibility'
// import content from '@/components/responsibility/content/content'
// 客户报告
const clientReport = () => import('@/components/clientReport/clientReport')
const contactInfomation = () => import('@/components/clientReport/contact_information/contact_information')
const workAddress = () => import('@/components/clientReport/work_address/work_address')

// import clientReport from '@/components/clientReport/clientReport'
// import contactInfomation from '@/components/clientReport/contact_information/contact_information'
// import workAddress from '@/components/clientReport/work_address/work_address'
// 人才招聘
const jobOffer = () => import('@/components/jobOffer/jobOffer')
const offerList = () => import('@/components/jobOffer/offerList/offerList')

// import jobOffer from '@/components/jobOffer/jobOffer'
// import offerList from '@/components/jobOffer/offerList/offerList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/introduction',
      component: introduction,
      redirect: '/introduction/structure',
      children: [
        {
          path: '/introduction/structure',
          component: structure
        }, {
          path: '/introduction/cultural',
          component: cultural
        }, {
          path: '/introduction/develop',
          component: develop
        }
      ]
    }, {
      path: '/memberCompany',
      component: memberCompany,
      redirect: '/memberCompany/jinpeng',
      children: [
        {
          path: '/memberCompany/changan',
          component: changan
        }, {
          path: '/memberCompany/haihanghuoyun',
          component: haihanghuoyun
        }, {
          path: '/memberCompany/haihangsuyun',
          component: haihangsuyun
        }, {
          path: '/memberCompany/jinpeng',
          component: jinpeng
        }, {
          path: '/memberCompany/myCargo',
          component: myCargo
        }, {
          path: '/memberCompany/tianjinhangyu',
          component: tianjinhangyu
        }, {
          path: '/memberCompany/tianjinhuohang',
          component: tianjinhuohang
        }, {
          path: '/memberCompany/xianggang',
          component: xianggang
        }
      ]
    },
    {
      path: '/business',
      component: business,
      redirect: '/business/aviation_traffic_service',
      children: [
        {
          path: '/business/aviation_traffic_service',
          component: aviationTrafficService
        },
        {
          path: '/business/line_traffic_service',
          component: lineTrafficService
        },
        {
          path: '/business/spa_truck_service',
          component: spaTruckService
        },
        {
          path: '/business/complex_service',
          component: complexService
        },
        {
          path: '/business/other_service',
          component: otherService
        }
      ]
    },
    {
      path: '/importantNews',
      component: importantNews,
      redirect: '/importantNews/newsList',
      children: [
        {
          path: '/importantNews/newsList',
          component: newsList
        }
      ]
    },
    {
      path: '/responsibility',
      component: responsibility,
      redirect: '/responsibility/content',
      children: [
        {
          path: '/responsibility/content',
          component: content
        }
      ]
    },
    {
      path: '/clientReport',
      component: clientReport,
      redirect: '/clientReport/work_address',
      children: [
        {
          path: '/clientReport/contact_information',
          component: contactInfomation
        },
        {
          path: '/clientReport/work_address',
          component: workAddress
        }
      ]
    },
    {
      path: '/jobOffer',
      component: jobOffer,
      redirect: '/jobOffer/offerList',
      children: [
        {
          path: '/jobOffer/offerList',
          component: offerList
        }
      ]
    }
  ]
})
