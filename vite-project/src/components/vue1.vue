<template>
  <div class="login-box">
    <el-card style="width: 400px; margin: 100px auto;">
      <h2>手机商城登录</h2>
      <el-form>
        <el-form-item label="账号">
          <el-input v-model="username" placeholder="随便输"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password" placeholder="随便输"></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleLogin" style="width: 100%">进入商城</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  // 这里可以加一个假的判断
  if(username.value && password.value){
      router.push('/home') // 跳转到首页
  } else {
      alert('请输入账号密码')
  }
}
</script>