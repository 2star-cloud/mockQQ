import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户
    user: {
      // 用户名
      userName: '',
      // 账号
      id: '',
      // 密码
      password: '',
      // 生日
      birthday: '1月1日',
      // 年龄
      age: '18',
      // 好友
      friend: {
      },
      // 头像
      imageUrl: ''
    },
    // 是否开启自动登录(默认为否)
    AutomaticLogin: false,
    // 是否完成对网站信息的获取
    introduceTar: true
  },
  getters: {
    // 获取用户信息
    getUser (state) {
      return state.user
    },
    // 获取网站介绍的信息
    getIntroduce (state) {
      return state.introduceTar
    },
    // 获取自动登录的状态
    getAutomaticLogin (state) {
      return state.AutomaticLogin
    }
  },
  mutations: {
    // 登录后设置用户信息
    login (state, value) {
      state.user.id = value.id
      state.user.password = value.password
      state.user.userName = value.userName
    },
    // 注册
    enroll (state, value) {
      state.user.id = value.id
      state.user.password = value.password
      state.user.age = value.age
    },
    // 设置用户好友信息
    friend (state, value) {
      state.user.friend = value
    },
    // 完成对网站信息获取的请求
    finalSetIntroduce (state) {
      state.introduceTar = false // 完成对介绍的信息的请求
    },
    // 修改自动登录的状态
    SetAutomaticLogin (state) {
      if (state.AutomaticLogin) {
        state.AutomaticLogin = false
      } else {
        state.AutomaticLogin = true
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
