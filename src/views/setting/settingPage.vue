<!-- 设置页面 -->
<template>
    <div class="body">
      <el-container>
        <el-header>
          <el-page-header @back="$router.back()" content="设置">></el-page-header>
        </el-header>
        <el-main>
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="账号设置">
              <div class="IDPage">
                <img :src="imageUrl" v-if="imageUrl">
                <img class="ImgNone" :src="headerUrl" v-else>
                <div class="msg">
                  <p class="username">{{ $store.getters.getUser.userName }}</p>
                  <p class="id">{{ "账号 :" + '  ' + $store.getters.getUser.id }}</p>
                </div>
                <div class="AutomaticLogin">
                  <p class="LoginText">自动登录</p>
                  <div v-if="$store.getters.getAutomaticLogin">
                    <p class="state">已开启</p>
                    <p class="revise" @click="ReviseAutomaticLoginState()">关闭</p>
                  </div>
                  <div v-else>
                    <p class="state">未开启</p>
                    <p class="revise" @click="ReviseAutomaticLoginState()">开启</p>
                  </div>
                  <div class="inter">
                    <p>开启后,在本机登录mockQQ将无需手机确认.</p>
                    <p>可在手机和电脑上关闭.</p>
                  </div>
                  <el-button type="info" @click="QuitLogin()">退出登录</el-button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="消息通知">
              <div class="MsgNoticePage">
                <div class="NoticeSounds">
                  <p class="title">通知声音</p>
                  <div class="main">
                    <div class="MsgSounds">
                      <p>新消息通知声音</p>
                      <el-switch
                        v-model="MsgSoundsValue"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                      </el-switch>
                    </div>
                    <div class="VoiceSounds">
                      <p>语音和视频通话声音</p>
                      <el-switch
                        v-model="VoiceSoundsValue"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                      </el-switch>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="通用设置">
              <div class="GenSettings">
                <div class="language">
                  <p class="title">语言</p>
                  <p>
                    <el-select v-model="value" placeholder="简体中文">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </p>
                </div>
                <div class="Gen">
                  <p class="title">通用</p>
                  <div class="main">
                    <el-checkbox v-model="GenSettings.Auto">开机时自动打开mockQQ</el-checkbox>
                    <el-checkbox v-model="GenSettings.KeepChats">保留聊天记录</el-checkbox>
                    <el-checkbox v-model="GenSettings.Display">显示网络搜索历史</el-checkbox>
                    <el-checkbox v-model="GenSettings.Adaptation">适配系统缩放比例</el-checkbox>
                    <el-checkbox v-model="GenSettings.DefaultBrowser">使用系统默认浏览器打开网页</el-checkbox>
                    <el-checkbox v-model="GenSettings.AutoText">聊天中的语音消息自动转为文字</el-checkbox>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="快捷键">
              <div class="ShortcutKey">
                <div class="msg">
                  <p class="title">发送消息</p>
                  <p>Enter</p>
                </div>
                <div class="screenshot">
                  <p class="title">截取屏幕</p>
                  <p>Alt + A</p>
                </div>
                <div class="open">
                  <p class="title">打开mockQQ</p>
                  <p>Ctrl + Alt + W</p>
                </div>
                <div class="lock">
                  <p class="title">锁定mockQQ</p>
                  <p>Ctrl + L</p>
                </div>
                <div class="detect">
                  <p class="title">检测快捷键</p>
                  <p>
                    <el-checkbox v-model="ShortcutKey">快捷键与其他软件冲突使提醒</el-checkbox>
                  </p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="关于mockQQ">
              <div class="ConcerningMockQQ">
                <div class="version">
                  <p class="title">版本信息</p>
                  <div class="main">
                    <p>mockQQ 1.0.0</p>
                    <el-button type="info">检查更新</el-button>
                  </div>
                </div><br>
                <div class="help">
                  <p class="title">mockQQ帮助</p>
                  <el-button type="info">查看帮助</el-button>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tabPosition: 'left',
      // 头像
      imageUrl: this.$store.getters.getUser.imageUrl,
      headerUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      MsgSoundsValue: true,
      VoiceSoundsValue: true,
      options: [{
        value: '简体中文',
        label: '简体中文'
      }, {
        value: 'English',
        label: 'English'
      }],
      value: '',
      GenSettings: {
        Auto: false,
        KeepChats: false,
        Display: false,
        Adaptation: false,
        DefaultBrowser: false,
        AutoText: false
      },
      ShortcutKey: false
    }
  },
  methods: {
    ReviseAutomaticLoginState () {
      this.$store.commit('SetAutomaticLogin')
    },
    QuitLogin () {
      this.$router.go(0)
    }
  }
}
</script>

<style lang="less" scoped>
// 页面背景颜色
.body{
  background-color: white;
}
// 设置的文字颜色
.el-header{
  color: #7b7979;
}

.el-main{
  height: 300px;
}

// 返回上个页面的的样式
.el-page-header{
  margin-top: 20px;
}

// 表格的样式
.el-dropdown{
  float: right;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}

// 表格的大小的样式
.el-main{
  width: 100%;
}

// 账号设置的样式
.IDPage{
  margin-top: -20px;
  margin-left: 50px;
  .ImgNone{
    float: left;
    width: 50px;
    height: 50px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .msg{
    .username{
      font-size: 20px;
      margin-bottom: 10px;
    }
    .id{
      color: #7b7979;
    font-size: 10px;
    }
  }
  .AutomaticLogin{
    margin-left: 30px;
    margin-top: 10px;
    .LoginText{
      float: left;
      margin-right: 10px;
    }
    .state{
      float: left;
      margin-right: 10px;
    }
    .revise{
      float: left;
      color: #409EFF;
      cursor: pointer;
    }
    .revise:hover{
      color:#606266;
    }
    .inter{
      clear:both;
      p{
        color: #ccc;
        font-size: 5px;
        margin-left: 75px;
      }
    }
    .el-button{
      float: left;
      color: black;
      margin-left: 80px;
    }
    .el-button:hover{
      color: #ccc;
    }
  }
}

// 消息通知的样式
.MsgNoticePage{
  margin-left: 50px;
  .NoticeSounds{
    .title{
      color: #7b7979;
      font-size: 10px;
    }
    .main{
      .MsgSounds{
        margin-top: 20px;
        p{
          display: inline;
        }
        .el-switch{
          float: right;
        }
      }
      .VoiceSounds{
        margin-top: 20px;
        p{
          display: inline;
        }
        .el-switch{
          float: right;

        }
      }
    }
  }
}

// 通用设置的样式
.GenSettings{
  margin-left: 50px;
  .language{
    .title{
      display: inline;
      margin-right: 30px;
    }
    p{
      display: inline;
    }
  }
  .Gen{
    .title{
      float: left;
      margin-right: 30px;
    }
    .main{
      float: left;
      width: 200px;
      margin-top: 20px;
      .el-checkbox{
        float: left;
        margin-bottom: 5px;
      }
    }
  }
}

// 快捷键的样式
.ShortcutKey{
  margin-left: 50px;
  font-size: 15px;
  .msg{
    margin-bottom: 20px;
    .title {
      display: inline;
      margin-right: 30px;
    }
    p{
      display: inline;
    }
  }
  .screenshot{
    margin-bottom: 20px;
    .title {
      display: inline;
      margin-right: 30px;
    }
    p{
      display: inline;
    }
  }
  .open{
    margin-bottom: 20px;
    .title {
      display: inline;
      margin-right: 30px;
    }
    p{
      display: inline;
    }
  }
  .lock{
    margin-bottom: 20px;
    .title {
      display: inline;
      margin-right: 30px;
    }
    p{
      display: inline;
    }
  }
  .detect{
    margin-bottom: 20px;
    .title {
      display: inline;
      margin-right: 30px;
    }
    p{
      display: inline;
    }
  }
}

// 关于mockQQ的样式
.ConcerningMockQQ{
  margin-left: 50px;
  margin-top: -10px;
  .version{
    .title {
      float: left;
      margin-right: 78px;
    }
    .main{
      float: left;
      margin-bottom: 20px;
    }
  }
  .help{
      clear: both;
      .title{
        display: inline;
        margin-right: 40px;
      }
      .el-button{
        display: inline;
      }
    }
}

</style>
