<!-- 首页页面 -->
<template>
  <div>
    <div>
      <div class="headerWrapper">
        <el-row :gutter="24">
          <el-col :span="8"><div class="grid-content bg-purple">
            <i class="el-icon-sunrise-1"></i>
            <p class="title">MockQQ</p>
          </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">
            <el-statistic
              ref="statistic"
              @finish="hilarity"
              format="HH:mm:ss"
              :value="deadline"
              title="距离明日："
              time-indices
            >
            </el-statistic>
          </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">
            <div class="demo-input-suffix">
            <el-input
              placeholder="查找好友"
              prefix-icon="el-icon-search"
              v-model="ipt">
            </el-input>
          </div>
          </div></el-col>
        </el-row>
      </div>
      <div class="body">
        <el-container style="height: 500px; border: 1px solid #eee">
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '1000']">
              <el-submenu v-for="(obj, index) in ary" :key="index+1" :index="String(index+1)" @click.native="setItem(Object.keys(obj)[0],Object.values(obj)[0].id)">
                <template slot="title" v-if="Object.values(obj)[0].type === 1"><i class="el-icon-user"></i>{{ Object.keys(obj)[0] }}</template>
                <template slot="title" v-else><i class="el-icon-s-custom"></i>{{ Object.keys(obj)[0] }}</template>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-container>
            <el-main>
              <detailPage :otherId="iptId"  :item="item" v-if="item!=''"></detailPage>
            </el-main>
          </el-container>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script>
import { friend } from '@/api/index'
export default {
  components: {
    detailPage: () => import('@/views/detail/detailPage.vue')
  },
  data () {
    return {
      deadline: Date.now() + (new Date().setHours(23, 59, 59) - Date.now()),
      count: 10,
      ipt: '',
      ary: [],
      item: '',
      iptId: ''
    }
  },
  methods: {
    load () {
      this.count += 2
    },
    setItem (item, iptId) {
      this.item = item
      this.iptId = iptId
    },
    hilarity () {
      this.$notify({
        title: '提示',
        message: '时间已到',
        duration: 0
      })
    }
  },
  async created () {
    if (this.$store.getters.getUser.id !== '') {
      const h = this.$createElement

      this.$notify({
        title: 'code',
        message: h('i', { style: 'color: teal' }, '登录成功'),
        showClose: true
      })
      while (this.$store.getters.getUser.friend) {
        const { data } = await friend(this.$store.getters.getUser.id)
        if (data !== '') {
          this.ary = data
          this.$store.commit('friend', data)
          break
        }
      }
    } else {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.body{
  height: 100%;
  .el-container{
    height: 100%;
  }
}
.headerWrapper{
  width: 100%;
  height: 80px;
  .el-icon-sunrise-1{
    float: left;
    color: gold;
  }
  .title{
    float: left;
    font-size: 20px;
    color: #409eff;
  }
  .demo-input-suffix{
    float: right;
    margin-top: 10px;
    border-radius: 4px;
  }
}
.el-header {
    line-height: 60px;
}
.name{
  font-size: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.el-main{
  background-image: url('../../Image/tag.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}
</style>
