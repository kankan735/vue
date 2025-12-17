<template>
  <div style="text-align: center; margin-top: 50px;">
    <el-avatar :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    <h2>管理员用户</h2>
    <p>当前积分: 1000</p>
    <el-button type="danger" @click="$router.push('/login')">退出登录</el-button>
  </div>
</template>