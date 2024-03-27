<!-- 发现页面 -->
<template>
  <div class="body">
    <el-container>
      <el-main>
        <el-tabs type="border-card">
          <el-tab-pane label="推荐">
            <vue-lazy-component :timeout="2000" tagName="div">
              <FoundRecommendSkeleton slot="skeleton"></FoundRecommendSkeleton>
              <FoundRecommendDetail></FoundRecommendDetail>
            </vue-lazy-component>
          </el-tab-pane>
          <el-tab-pane label="热点">
            <vue-lazy-component :timeout="2000" tagName="div">
              <FoundHotspotSkeleton slot="skeleton"></FoundHotspotSkeleton>
              <FoundHotspotDetail></FoundHotspotDetail>
            </vue-lazy-component>
          </el-tab-pane>
          <el-tab-pane label="娱乐">
            <vue-lazy-component :timeout="2000" tagName="div">
              <FoundAmusementSkeleton slot="skeleton"></FoundAmusementSkeleton>
              <FoundAmusementDetail></FoundAmusementDetail>
            </vue-lazy-component>
          </el-tab-pane>
          <el-tab-pane label="军事">
            <vue-lazy-component :timeout="2000" tagName="div">
              <FoundMilitarySkeleton slot="skeleton"></FoundMilitarySkeleton>
              <FoundMilitaryDetail></FoundMilitaryDetail>
            </vue-lazy-component>
          </el-tab-pane>
        </el-tabs>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  // 动态导入组件
  components: {
    // 推荐
    FoundRecommendDetail: () => import('@/components/FoundRecommend/foundDetail.vue'),
    FoundRecommendSkeleton: () => import('@/components/FoundRecommend/foundDetailSkeleton.vue'),
    // 热点
    FoundHotspotDetail: () => import('@/components/FoundHotspot/foundDetail.vue'),
    FoundHotspotSkeleton: () => import('@/components/FoundHotspot/foundDetail.vue'),
    // 娱乐
    FoundAmusementDetail: () => import('@/components/FoundAmusement/foundDetail.vue'),
    FoundAmusementSkeleton: () => import('@/components/FoundAmusement/foundDetailSkeleton.vue'),
    // 军事
    FoundMilitaryDetail: () => import('@/components/FoundMilitary/foundDetail.vue'),
    FoundMilitarySkeleton: () => import('@/components/FoundMilitary/foundDetailSkeleton.vue')
  }
}
</script>

<style lang="less" scoped>
.body{
  background-color: rgba(255,255,255,0.5);
}
</style>
