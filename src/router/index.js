import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/home/homePage'
import FriendPage from '@/views/friend/friendPage'
import LoginPage from '@/views/login/loginPage'
import EnrollPage from '@/views/login/enrollPage'
import MinePage from '@/views/mine/minePage'
import GroupPage from '@/views/group/groupPage'
import IndexPage from '@/views/home/indexPage'
import DetailPage from '@/views/detail/detailPage'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: LoginPage },
  { path: '/EnrollPage', component: EnrollPage },
  {
    path: '/IndexPage',
    component: IndexPage,
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
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/GroupPage',
        component: GroupPage,
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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
