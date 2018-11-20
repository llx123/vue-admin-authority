<template>
  <div class="container">
    <el-form ref="loginForm" :loading="loading" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">{{ title }}</h3>
      </div>

      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="username"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          :type="passwordType"
          v-model="loginForm.password"
          placeholder="password"
          name="password"
          auto-complete="on"
          @keyup.enter.native="doLogin" />
        <span class="show-pwd" @click="showPwd">
          <i class="el-icon-view"></i>
        </span>
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" 
        @click.native.prevent="doLogin">login</el-button>
      
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',  
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('用户名不能为空！'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('密码不能为空！'))
      } else {
        callback()
      }
    }
    return {
      title: 'Login',
      loginForm: {},
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      redirect: '/',
      loading: false,
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    
  },
  mounted() {
    setTimeout(()=>{
      
    })
  },
  destroyed() {
    
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    doLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('doLogin', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
:root {
  --bgColor: #f8f8f8;
  --gray: #889aa4;
}
.container {
  & .login-form {
    width: 320px;
    height: 290px;
    position: absolute;
    top: 45%;
    left: 50%;
    margin: -160px 0 0 -160px;
    padding: 36px;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
  }
}
.show-pwd {
  position: absolute;
  right: 10px;
  top: 2px;
  font-size: 16px;
  color: var(--gray);
  cursor: pointer;
  user-select: none;
}
</style>
