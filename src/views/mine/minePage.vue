<template>
  <div>
    <el-container>
      <el-header>
        <el-row class="demo-avatar demo-basic">
          <div class="grid-content bg-purple-light">
            <div class="demo-basic--circle">
              <el-avatar :size="50" :src="circleUrl"></el-avatar>
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
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
