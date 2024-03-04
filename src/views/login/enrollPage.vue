<template>
  <center>
    <div>
      <p>小小的世界，大大的梦想</p>
      <div class="dance">
        <span class="word">l</span>
        <span class="word">o</span>
        <span class="word">c</span>
        <span class="word">a</span>
        <span class="word">l</span>
        <span class="word">h</span>
        <span class="word">o</span>
        <span class="word">s</span>
        <span class="word">t</span>
        <span class="word">:</span>
        <span class="word">8</span>
        <span class="word">0</span>
        <span class="word">8</span>
        <span class="word">0</span>
      </div>
    </div>
    <div>
      <div class="main">
        <div class="head">
          注册/<el-link target="_blank" @click="$router.push('/')">登录</el-link>
        </div>
        <div class="body">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" if="pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" id="checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model.number="ruleForm.age" id="age"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="enroll('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </center>
</template>

<script>
import { enroll } from '@/api/index'
import { mapMutations } from 'vuex'
export default {
  data () {
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        id: '',
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.ruleForm.id = Date.parse(new Date())
  },
  methods: {
    ...mapMutations(['enroll']),
    async enroll (form) {
      const { code, title } = await enroll(form)
      if (code === 200) {
        console.log(title)
        this.$store.commit('enroll', {
          id: this.ruleForm.id,
          password: this.ruleForm.pass,
          age: this.ruleForm.age
        })
        this.$router.push('/HomePage')
      }
    }
  },
  resetForm (formName) {
    this.$refs[formName].resetFields()
  }
}
</script>

<style lang="less" scoped>
.main{
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.main{
  margin-top: 5%;
  width: 50%;
  height: 350px;
  .head{
    font-size: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10%;
  }
  .body{
    width: 70%;
  }
}
p {
  font-size: xx-large;
  background: -webkit-linear-gradient(135deg,
        #0eaf6d,
        #ff6ac6 25%,
        #147b96 50%,
        #e6d205 55%,
        #2cc4e0 60%,
        #8b2ce0 80%,
        #ff6384 95%,
        #08dfb4);
  /* 文字颜色填充设置为透明 */
  -webkit-text-fill-color: transparent;
  /* 背景裁剪，即让文字使用背景色 */
  background-clip: text;
  /* 背景图放大一下，看着柔和一些 */
  background-size: 200% 100%;
  /* 应用动画flowCss 12秒速度 无限循环 线性匀速动画*/
  animation: flowCss 12s infinite linear;
}

@keyframes flowCss {
0% {
  /* 移动背景位置 */
  background-position: 0 0;
}

100% {
  background-position: -400% 0;
}
}

p:hover {
  animation: flowCss 4s infinite linear;
}
.dance {
    align-items: center;
    justify-content: center;
    font-size: xx-large;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
    margin-left: 20px;
  }

  .word {
    /* alternate 轮流反向播放 A--B--A--B... 必须要加 */
    animation: dance 0.72s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
    display: inline-block;
    transform: translate3d(0, 0, 0);
    font-size: xx-large;
    text-decoration: underline;
    color: #75b9ff;
    margin-right: 1px;
  }

  .word:nth-child(1) {
    animation-delay: 0s;
  }

  .word:nth-child(2) {
    animation-delay: 0.0333333333s;
  }

  .word:nth-child(3) {
    animation-delay: 0.1333333333s;
  }

  .word:nth-child(4) {
    animation-delay: 0.2333333333s;
  }

  .word:nth-child(5) {
    animation-delay: 0.3333333333s;
  }

  .word:nth-child(6) {
    animation-delay: 0.4333333333s;
  }

  .word:nth-child(7) {
    animation-delay: 0.5333333333s;
  }

  .word:nth-child(8) {
    animation-delay: 0.6333333333s;
  }

  .word:nth-child(9) {
    animation-delay: 0.7333333333s;
  }

  .word:nth-child(10) {
    animation-delay: 0.8333333333s;
  }

  .word:nth-child(11) {
    animation-delay: 0.9333333333s;
  }
  .word:nth-child(12) {
    animation-delay: 1.0333333333s;
  }
  .word:nth-child(13) {
    animation-delay: 1.1333333333s;
  }
  .word:nth-child(14) {
    animation-delay: 1.2333333333s;
  }

  @keyframes dance {
    0% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: translate3d(0, -0.54em, 0);
    }
  }

</style>
