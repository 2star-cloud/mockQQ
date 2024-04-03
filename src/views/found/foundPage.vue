<!-- 发现页面 -->
<template>
  <div class="body">
    <el-container>
      <el-main>
        <el-tabs type="border-card" v-model="tabName">
          <el-tab-pane label="推荐" name="first">
            <vue-lazy-component :timeout="2000" tagName="div" v-for="(item,index) in RecommendData" :key="index">
              <FoundRecommendSkeleton slot="skeleton"></FoundRecommendSkeleton>
              <FoundRecommendDetail :data="item"></FoundRecommendDetail>
            </vue-lazy-component>
          </el-tab-pane>
          <el-tab-pane label="热点" name="second" @click="SetHotspotData()">
            <vue-lazy-component :timeout="2000" tagName="div" v-for="(item,index) in HotspotData" :key="index">
              <FoundHotspotSkeleton slot="skeleton"></FoundHotspotSkeleton>
              <FoundHotspotDetail :data="item"></FoundHotspotDetail>
            </vue-lazy-component>
          </el-tab-pane>
          <el-tab-pane label="娱乐" name="third" @click="SetAmusementData()">
            <vue-lazy-component :timeout="2000" tagName="div" v-for="(item,index) in AmusementData" :key="index">
              <FoundAmusementSkeleton slot="skeleton"></FoundAmusementSkeleton>
              <FoundAmusementDetail :data="item"></FoundAmusementDetail>
            </vue-lazy-component>
          </el-tab-pane>
          <el-tab-pane label="军事" name="fourth" @click="SetMilitaryData()">
            <vue-lazy-component :timeout="2000" tagName="div" v-for="(item,index) in MilitaryData" :key="index">
              <FoundMilitarySkeleton slot="skeleton"></FoundMilitarySkeleton>
              <FoundMilitaryDetail :data="item"></FoundMilitaryDetail>
            </vue-lazy-component>
          </el-tab-pane>
        </el-tabs>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import { FoundRecommend, FoundHotspot, FoundAmusement, FoundMilitary } from '@/api/index'
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
  },
  data () {
    return {
      id: this.$store.getters.getUser.id,
      tabName: 'first',
      RecommendData: [],
      HotspotData: [],
      AmusementData: [],
      MilitaryData: []
    }
  },
  async created () {
    if (this.RecommendData) {
      const { data } = await FoundRecommend(this.id)
      this.RecommendData = data
    }
  },
  methods: {
    async SetHotspotData () {
      if (this.HotspotData) {
        const { data } = await FoundHotspot(this.id)
        this.HotspotData = data
      }
    },
    async SetAmusementData () {
      if (this.AmusementData) {
        const { data } = await FoundAmusement(this.id)
        this.AmusementData = data
      }
    },
    async SetMilitaryData () {
      if (this.MilitaryData) {
        const { data } = await FoundMilitary(this.id)
        this.MilitaryData = data
      }
    }
  }
}
</script>

<style lang="less" scoped>
.body{
  background-color: rgba(255,255,255,0.5);
}
</style>
