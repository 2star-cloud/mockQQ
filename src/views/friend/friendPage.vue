<template>
  <div class="body">
    <el-header>
      <el-input v-model="ipt" placeholder="查找好友"></el-input>
      <i class="el-icon-plus"></i>
    </el-header>
    <el-main>
      <el-container style="height: 500px; border: 1px solid #eee">
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '1000']">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-user"></i>好友</template>
                <el-menu-item-group>
                  <el-menu-item v-for="(item,index) in friend" :key="index" :index="String(index+1)" @click.native="setItem(item)">{{ Object.keys(item)[0] }}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-s-custom"></i>群聊</template>
                <el-menu-item-group>
                  <el-menu-item v-for="(item,index) in group" :key="index" :index="String(-index-1)" @click.native="setItem(item)">{{ Object.keys(item)[0] }}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-container>
            <el-main>
              <FriendDetail :item="msg" v-if="msg!=''"></FriendDetail>
            </el-main>
          </el-container>
        </el-container>
    </el-main>
  </div>
</template>

<script>
export default {
  components: {
    FriendDetail: () => import('@/views/friend/FriendDetail/FriendDetail.vue')
  },
  data () {
    return {
      ipt: '',
      friend: [],
      group: [],
      msg: ''
    }
  },
  async created () {
    let obj = []
    obj = await this.$store.getters.getUser.friend
    obj.filter(item => Object.values(item)[0].type === 1 ? this.friend.push(item) : this.group.push(item))
  },
  methods: {
    setItem (value) {
      this.msg = value
    }
  }
}
</script>

<style lang="less" scoped>
.body{
  background-color: white;
}

//搜索好友与添加的样式
.el-header{
  .el-input{
    margin-top: 10px;
    margin-right: 10px;
    width: 30%;
  }
  .el-icon-plus{
    font-size: 20px;
  }
  .el-icon-plus:hover{
    color: #409eff;
    cursor: pointer;
  }

}
</style>
