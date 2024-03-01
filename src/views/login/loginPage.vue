<template>
  <center>
    <div>
      <div class="main">
        <div class="head">
          登录/<el-link target="_blank" @click="$router.push('/EnrollPage')">注册</el-link>
        </div>
        <div class="body">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="id" >
              <el-input type="text" v-model="ruleForm.id" id="id" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" >
              <el-input type="password" v-model="ruleForm.password" id="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="captcha" >
              <el-input type="text" v-model="ruleForm.captcha" id="captcha" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </center>
</template>

<script>
import { login } from '@/api/index'
import { mapMutations } from 'vuex'
export default {
  data () {
    const checkCaptcha = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
      }
    }
    const validateId = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        id: '',
        password: '',
        captcha: '',
        loading: false
      },
      rules: {
        id: [
          { validator: validateId, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ],
        captcha: [
          { validator: checkCaptcha, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['login']),
    resetForm (formName) {
      this.$nextTick(() => {
        this.$refs[formName].resetFields()
      })
    },
    async login (form) {
      const loading = this.$loading({
        lock: true,
        text: '加载中',
        background: 'rgba(255, 255, 255, 0.9)'
      })
      while (1) {
        const { code, title } = await login(form)
        if (code === 200) {
          console.log(title)
          this.$store.commit('login', {
            id: this.ruleForm.id,
            password: this.ruleForm.password
          })
          break
        }
      }
      loading.close()
      this.$router.push('/HomePage')
    }
  }
}
</script>

<style lang="less" scoped>
.main{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.main{
  margin-top: 10%;
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

</style>
