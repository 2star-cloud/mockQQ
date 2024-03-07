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
.body{
  background-color: #fff;
}
.el-header{
  border-width: 0 0 1px 0; border-style: solid; border-color: #ccc;
}

.el-page-header{
  margin-top: 20px;
}

</style>
