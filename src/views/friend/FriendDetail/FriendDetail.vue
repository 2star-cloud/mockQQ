<template>
  <div>
    <div class="header">
      <img class="Img" :src="headerUrl">
      <div class="msg">
        <p class="username">{{ Object.keys(item)[0] }}</p>
        <p class="id">{{ "账号 :" + '  ' + Object.values(item)[0].id }}</p>
        <p class="type">类型 : {{ Object.values(item)[0].type === 1 ? '好友' : '群聊' }}</p>
      </div><hr><br>
      <div class="main">
        <div class="OwnMsg">
          <p class="remark">备注</p><p class="addremark">点击添加备注</p>
          <p class="span">标签</p><p class="addspan">点击添加备注</p>
          <p class="permissions">朋友权限</p><p class="addpermissions">点击添加朋友权限</p>
        </div><hr><br>
        <div class="OtherMsg">
          <p class="group">共同群聊</p><p class="number">1个</p>
          <p class="Signature">个性签名</p><p class="msg">暂无</p>
          <p class="source">来源</p><p class="SourceMsg">通过名片分享添加</p>
        </div><hr><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      headerUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  }
}
</script>

<style lang="less" scoped>
hr{
  float: left;
  color: #7b7979;
  width: 60%;
}

.header{
  margin-top: -20px;
  margin-left: 50px;
  .Img{
    float: left;
    width: 60px;
    height: 60px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .username{
    font-size: 15px;
    margin-bottom: 5px;
  }
  .id{
    color: #7b7979;
    font-size: 10px;
  }
  .type{
    color: #7b7979;
    font-size: 10px;
  }
}

.main{
  .OwnMsg{
    .remark{
      float: left;
      margin-right: 60px;
      color: #7b7979;
    }
    .addremark{
      float: left;
      color: #7b7979;
    }
    .span{
      clear: both;
      float: left;
      margin-right: 60px;
      margin-top: 5px;
      color: #7b7979;
    }
    .addspan,.addpermissions{
      float: left;
      margin-top: 5px;
      color: #7b7979;
    }
    .permissions{
      clear: both;
      float: left;
      margin-right: 28px;
      margin-top: 5px;
      color: #7b7979;
    }
    .addspan:hover{
      color: #409EFF;
      cursor: pointer;
    }
    .addremark:hover{
      color: #409EFF;
      cursor: pointer;
    }
    .addpermissions:hover{
      color: #409EFF;
      cursor: pointer;
    }
  }
  hr{
    clear: both;
  }
  .OtherMsg{
    .group{
      clear: both;
      float: left;
      margin-right: 28px;
      margin-top: 5px;
      color: #7b7979;
    }
    .number{
      float: left;
      margin-top: 5px;
    }
    .Signature{
      clear: both;
      float: left;
      margin-right: 28px;
      margin-top: 5px;
      color: #7b7979;
    }
    .msg{
      float: left;
      margin-top: 5px;
    }
    .source{
      clear: both;
      float: left;
      color: #7b7979;
      margin-right: 60px;
      margin-top: 5px;
    }
    .SourceMsg{
      float: left;
      margin-top: 5px;
    }
  }
}
</style>
