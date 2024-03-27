<!-- 初始页面 -->
<template>
  <div :class="{'bg':$store.getters.getLoginBefore,'bgimg':$store.getters.getbgImg}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
// 登录界面背景图
.bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  height: auto;
  background: linear-gradient(-45deg, #dae, #f66, #3c9, #09f, #66f);
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}
@keyframes gradient {
    0% {
        background-position: 0 12%;
    }

    50% {
        background-position: 100% 100%;
    }

    100% {
        background-position: 0 12%;
    }
}

// 登录后界面背景图
.bgimg{
  background-image: url('../src/Image/background.jpg');
  background-size: cover;
  background-color: rgba(255,255,255,0.5);
  position: absolute;
  top:0;
  left :0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

</style>
