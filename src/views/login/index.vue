<template>
  <div>
    <el-card class="login-form-layout">
      <el-form>
        <div style="text-align: center;">
        </div>
        <h2 class="login-title color-main">mall-admin-web</h2>
        <el-form-item prop="username">
          <el-input name="username"
                    type="text"
                    v-model="loginForm.username"
                    autoComplete="on"
                    placeholder="请输入用户名">
           <span slot="prefix">
            <svg-icon icon-class="user" class="color-main"></svg-icon>
          </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password"
                    :type="pwdType"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.password"
                    autoComplete="on"
                    placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button style="width: 100%" type="primary" :loading="loading" @click.native.prevent="handleLogin">登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <img :src="login_center_bg" class="login-center-layout">
  </div>
</template>

<script>

  import login_center_bg from '@/assets/images/login_center_bg.png'

  export default {
    name: "index",
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: '123456'
        },
        pwdType: "password",
        loading: false,
        login_center_bg
      }
    },
    methods: {
      handleLogin() {
        //TODO 未完成逻辑
      }
    }
  }
</script>

<style scoped>
  .login-form-layout{
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409EFF;
  }
  .login-title {
    text-align: center;
  }

  .login-center-layout {
    background: #409EFF;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
  }
</style>
