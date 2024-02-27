<template>
  <div>
    <el-container>
      <el-header>
        <p class="name" v-if="item!=''" :value="item">{{ item }}</p>
      </el-header>
      <el-main>
        <ul class="infinite-list" style="overflow:auto">
          <li class="infinite-list-item" v-for="(obj,index) in data" :key="index">
            <div class="chat_left clearfix" v-if="obj.launchID===otherId">
              <div class="chat_left_item_1 ">{{ otherId }}</div>
                <div class="chat_left_item_2">
                    <div class="chat_time">{{ setTime(obj.time) }}</div>
                    <div class="chat_left_content">
                        {{ obj.content }}
                    </div>
                </div>
            </div>
            <!--右边 -->
            <div class="chat_right" v-else>
                <div class="chat_right_item_1 ">{{ $store.getters.getUser.id }}</div>
                <div class="chat_right_item_2 ">
                    <div class="chat_right_time">{{ setTime(obj.time) }}</div>
                    <div class="chat_right_content">
                      {{ obj.content }}
                    </div>
                </div>
            </div>
          </li>
        </ul>
      </el-main>
      <el-footer>
        <div class="chat_foot">
            <!-- context -->
            <textarea class="chat_context" id="chat_context_item" cols="30" rows="10" placeholder="请输入" @keyup.enter="launchMsg()" v-model="text"></textarea>
            <div class="chat_commit" id="button" @click="launchMsg()">发送</div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { ZSchat } from '@/api/index'
export default {
  props: ['otherId', 'item'],
  data () {
    return {
      data: [],
      text: ''
    }
  },
  async created () {
    const { data } = await ZSchat(this.$store.getters.getUser.id, this.otherId)
    this.data = data
  },
  methods: {
    setTime (timer) {
      const date = new Date(timer)
      const Y = date.getFullYear()
      const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
      const D = date.getDate()
      const h = date.getHours()
      const m = date.getMinutes()
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m
    },
    launchMsg () {
      this.data.push({
        content: this.text,
        type: 'message',
        time: Number(Date.now()),
        launchID: Number(this.$store.getters.getUser.id),
        receptionID: this.otherId
      })
      this.text = ''
    }
  }
}
</script>

<style lang="less" scoped>
.el-header{
  background-color: #fff;
  position:fixed;
  border:1px solid rgba(0,0,0,0.2);
}
ul{
  list-style:none;
}
/* middle */
.chat_middle{
    width: 450px;
    height: 455px;
    position: relative;
    box-sizing: border-box;
    overflow: auto;
    border-width: 0px;
}
/* left */
.chat_left{
    width: 100%;
    height: 120px;
    margin-top: 20px;
}
.chat_left_item_1{
    width: 50px;
    height: 50px;
    background-color: #4459AB;
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    line-height: 50px;
    color: white;
    border-radius: 25px;
}
.chat_left_item_2{
    width: 55%;
    height: 100px;
    float: left;
    margin-top: 10px;
}
.chat_left_item_2 .chat_left_chat{
    float: left;
}
.chat_left_item_2 .chat_left_content{
    padding: 15px;
    margin-top: 10px;
    background-color: #f4f5f7;
    display: inline-block;
    border-radius: 10px;
    border-top-left-radius: 0px;
}
/* right */
.chat_right{
    width: 100%;
    height: 120px;
    margin-top: 20px;
}
.chat_right_item_1{
    width: 50px;
    height: 50px;
    background-color: #4459AB;
    float: right;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    line-height: 50px;
    color: white;
    border-radius: 25px;
}
.chat_right_item_2{
    width: 55%;
    height: 100px;
    float: right;
    margin-top: 10px;
}
.chat_right_time{
    width: 100%;
    text-align: right;
}
.chat_right_content{
    float: right;
    padding: 15px;
    border-radius: 10px;
    margin-top: 10px;
    border-top-right-radius: 0px;
    background-color: #4F7cff;
    color: white;
}
/* foot */
.chat_foot{
    width: 100%;
    height: 100px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
}
.chat_context{
    width: 100%;
    height: 100%;
    font-size: 17px;
    box-sizing: border-box;
    outline: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-width: 0px;
    padding: 16px;
}
.chat_commit{
    width: 80px;
    height: 30px;
    color: white;
    background-color: #4F7cff;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    position: absolute;
    right: 10px;
    bottom: 20px;
    margin-right: 10px;
}
.chat_context{
    resize: none;
}
.chat_context::placeholder{
    color: black;
    font-weight: 500k;
}
.line{
    width: 100%;
    border-top: 1px;
    border-color: #f4f5f7;
    border-style: solid;
}
</style>
