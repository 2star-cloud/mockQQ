import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页的路由
const HomePage = () => import('@/views/home/homePage')

// 好友的路由
const FriendPage = () => import('@/views/friend/friendPage')

// 好友详情的路由
const FriendDetail = () => import('@/views/friend/FriendDetail/FriendDetail.vue')

// 登录的路由
const LoginPage = () => import('@/views/login/loginPage')

// 注册的路由
const EnrollPage = () => import('@/views/login/enrollPage')

// 我的的路由
const MinePage = () => import('@/views/mine/minePage')

// 发现的路由
const FoundPage = () => import('@/views/found/foundPage')

// 导航的路由
const IndexPage = () => import('@/views/home/indexPage')

// 聊天详情的路由
const DetailPage = () => import('@/views/detail/detailPage')

// 收藏的路由
const CollectionPage = () => import('@/views/mine/collection/collectionPage')

// 设置的路由
const SettingPage = () => import('@/views/setting/settingPage')

Vue.use(VueRouter)

const routes = [
  { path: '/', component: LoginPage },
  { path: '/EnrollPage', component: EnrollPage },
  {
    path: '/IndexPage',
    component: IndexPage,
    scrollBehavior (to, from, savedPosition) {
      // 始终滚动到顶部
      return { top: 0 }
    },
    redirect: '/HomePage',
    children: [
      {
        path: '/HomePage',
        component: HomePage,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/FriendPage',
        component: FriendPage,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/FriendDetail',
        component: FriendDetail
      },
      {
        path: '/MinePage',
        component: MinePage,
        children: [
          {
            path: 'CollectionPage',
            component: CollectionPage,
            meta: {
              keepAlive: true
            }
          }
        ]
      },
      {
        path: '/FoundPage',
        component: FoundPage,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/DetailPage',
        component: DetailPage,
        meta: {
          keepAlive: false
        }
      },
      {
        path: '/SettingPage',
        component: SettingPage
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
