import instance from '@/utils/request'

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

// 项目介绍的请求
export const introduce = (id) => {
  return instance.post(
    '/introduce',
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

// 发现的推荐的请求
export const FoundRecommend = (id) => {
  return instance.post(
    '/FoundRecommend',
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

// 发现的热点的请求
export const FoundHotspot = (id) => {
  return instance.post(
    '/FoundHotspot',
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

// 发现的娱乐的请求
export const FoundAmusement = (id) => {
  return instance.post(
    '/FoundAmusement',
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

// 发现的军事的请求
export const FoundMilitary = (id) => {
  return instance.post(
    '/FoundMilitary',
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
