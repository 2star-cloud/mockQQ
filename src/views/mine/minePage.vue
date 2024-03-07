<template>
  <div class="body">
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
                  <p>用户名:</p>
                  <p>账号:</p>
                  <p>生日:</p>
                  <p>年龄:</p>
                  <p class="collection1">收藏:</p>
                  <router-link class="list-group-item" @click="tar===false" active-class="active" to="/MinePage/CollectionPage">点我打开</router-link>
                  <router-view></router-view>
                </div>
          </div>
        </el-row>
      </el-main>
      <el-footer>
        Footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headerUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      imageUrl: '',
      tar: true
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
    }
  }
}
</script>

<style lang="less" scoped>
.body{
  background-color: white;
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
</style>
