import instance from '@/utils/request'

// 登录的请求
export const login = (form) => {
  return instance.post(
    '/login',
    {
      Headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: {
        id: form.id,
        password: form.password,
        captcha: form.captcha
      }
    }
  )
}

// 注册的请求
export const enroll = (form) => {
  return instance.post(
    '/enroll',
    {
      Headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: {
        password: form.pass,
        age: form.age
      }
    }
  )
}

// 获取好友
export const friend = (id) => {
  return instance.post(
    '/friend',
    {
      Headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: {
        id: id
      }
    }
  )
}

// 获取聊天信息
export const chat = (ownID, otherID) => {
  return instance.post(
    '/chat' + otherID,
    {
      Headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: {
        ownID: ownID,
        otherID: otherID
      }
    }
  )
}
