<template>
  <div>
    <el-container>
      <el-header>
        <el-row class="demo-avatar demo-basic">
          <div class="grid-content bg-purple-light">
            <div class="demo-basic--circle">

              <el-row :gutter="10">
                <el-col :span="2">
                  <div class="grid-content bg-purple">

                  </div>
                </el-col>
                <el-col :span="8">
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
                </el-col>
              </el-row>
            </div>
          </div>
        </el-row>
      </el-header>
      <el-main>
        Main
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
      imageUrl: ''
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
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
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
.avatar {
  display: block;
}
</style>
