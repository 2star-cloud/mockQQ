<template>
  <center>
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
