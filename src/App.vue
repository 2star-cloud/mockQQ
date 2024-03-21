<template>
  <div :class="{'bg':$store.getters.getLoginBefore}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
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
</style>
