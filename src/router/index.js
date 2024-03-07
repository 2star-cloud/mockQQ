import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () => import('@/views/home/homePage')
const FriendPage = () => import('@/views/friend/friendPage')
const LoginPage = () => import('@/views/login/loginPage')
const EnrollPage = () => import('@/views/login/enrollPage')
const MinePage = () => import('@/views/mine/minePage')
const FoundPage = () => import('@/views/found/foundPage')
const IndexPage = () => import('@/views/home/indexPage')
const DetailPage = () => import('@/views/detail/detailPage')
const CollectionPage = () => import('@/views/mine/collection/collectionPage.vue')
const SettingPage = () => import('@/views/setting/settingPage.vue')

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
        component: SettingPage,
        meta: {
          keepAlive: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
