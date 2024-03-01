<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <el-skeleton v-if="tar" :rows="18" animated />
      <el-container v-else>
          <el-header>
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                  <el-menu-item index="1" @click="$router.push('/HomePage')">首页</el-menu-item>
                  <el-menu-item index="2" @click="$router.push('/FriendPage')">好友</el-menu-item>
                  <el-menu-item index="3" @click="$router.push('/GroupPage')">群聊</el-menu-item>
                  <el-menu-item index="4" @click="$router.push('/MinePage')">我的</el-menu-item>
              </el-menu>
          </el-header>
          <el-main>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-main>
      </el-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tar: true,
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  mounted () {
    this.timer = setTimeout(() => {
      this.tar = false
    }, 3000)
  }
}
</script>

<style>
.el-main{
  height: 100%;
  width: 100%;
}
.el-menu-item{
  height: 70px;
  width: 25%;
  font-size: 20px;
  text-align:center;
}
</style>
