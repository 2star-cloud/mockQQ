<template>
  <div class="body">
    <div class="opacity_bg"></div>
    <el-backtop></el-backtop>
    <el-container v-if="tar">
      <el-header>
        <el-row class="demo-avatar demo-basic">
          <div class="grid-content bg-purple-light">
            <div class="demo-basic--circle">
                <div class="setting">
                  <el-upload
                    class="avatar-uploader"
                    action="http://localhost:8080/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else >
                      <el-avatar :size="50" :src="headerUrl">
                    </el-avatar></i>
                  </el-upload>
                  <router-link class="list-group-item" active-class="active" to="/SettingPage">
                    <i class="el-icon-setting"></i>
                  </router-link>
                </div>
            </div>
          </div>
        </el-row>
      </el-header>
      <el-main>
        <el-row class="demo-avatar demo-basic">
          <div class="grid-content bg-purple-light">
            <div class="demo-basic--circle">
                  <p>用户名: {{ $store.getters.getUser.userName }}</p>
                  <p>账号: {{ $store.getters.getUser.id }}</p>
                  <p>生日: {{ $store.getters.getUser.birthday }}</p>
                  <p>年龄: {{ $store.getters.getUser.age }}</p>
                  <p class="collection1">收藏:</p>
                  <router-link class="list-group-item" @click="tar===false" active-class="active" to="/MinePage/CollectionPage">点我打开</router-link>
                  <router-view class="collection"></router-view>
                </div>
          </div>
        </el-row>
      </el-main>
      <el-footer>
        <p @click="open($event.target.innerText,data.AboutUs)">关于我们</p>
        <p @click="open($event.target.innerText,data.JoinUs)">加入我们</p>
        <p @click="open($event.target.innerText,data.CodeRepositories)">代码仓库</p>
        <p @click="open($event.target.innerText,data.FrequentlyQuestions)">常见问题</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { introduce } from '@/api/index'
export default {
  data () {
    return {
      headerUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      imageUrl: this.$store.getters.getUser.imageUrl,
      tar: true,
      data: ''
    }
  },
  async created () {
    if (this.$store.getters.getIntroduce) {
      const { data } = await introduce(this.$store.getters.getUser.id)
      this.data = data
      this.$store.commit('finalSetIntroduce')
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    open (title, value) {
      this.$alert(value, title, {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'success ',
            message: '已关闭'
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.body{
  background-color: rgba(255,255,255,0.5);
}

// 设置与头像的样式
.setting{
  margin-top: 20px;
}
.el-icon-setting{
  display:inline;
  float: right;
  font-size: 20px;
}
// 头像的样式
.avatar-uploader {
  display:inline;
  margin-top: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  text-align: center;
}

// 收藏页入口的样式
.list-group-item{
  text-decoration: none;
  position: relative;
}
.list-group-item::before {
    content: '';
    height: 2px;
    background: #409EFF;
    /* 伪元素默认样式 display: inline;所以需要转成inline-block宽高才会生效 */
    display: inline-block;
    /* 通过定位使下划线在最低层 */
    position: absolute;
    bottom: -6px;
    width: 0;
    /* 加上一个过渡效果，使之丝滑一些 */
    transition: width 0.36s;
}
.list-group-item:hover::before {
    /* 悬浮时候，让下划线伪元素宽度变成100%即可出现效果 */
    width: 100%;
}

.avatar {
  display: block;
}
.titleHead{
  line-height: center;
}
p{
  margin-bottom: 40px;
}

// 收藏文字的div
.collection1{
  display:inline;
  margin-right: 10px;
  text-decoration: none;
}
.collection2{
  display:inline;
  text-decoration: none;
  color: #409EFF;
}

// 底部的样式
.el-footer {
    background-color: rgba(255,255,255,0.5);
    padding: 80px 120px;
    width: 100%;
    p{
      display: inline;
      margin-right: 50px;
      color: #666;
    }

    p:hover{
      color: rgb(0,0,0);
      cursor:pointer;
    }
}
</style>
