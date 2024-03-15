<template>
  <div class="body">
    <el-container>
      <el-header>
        <el-page-header @back="$router.back()" content="收藏">
        </el-page-header>
      </el-header>
      <el-main>
        <el-empty description="空空如也"></el-empty>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
// 页面背景的样式
.body,.el-header{
  background-color: #fff;
  border-width: 0 0 1px 0; border-style: solid; border-color: #ccc;
}

// 返回上一页的样式
.el-page-header{
  margin-top: 20px;
}

.el-main{
  margin-bottom:160px;
}

</style>
