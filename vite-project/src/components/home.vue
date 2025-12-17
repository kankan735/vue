<template>
  <div>
    <h1>欢迎来到极客手机商城</h1>
    <el-carousel height="300px" style="margin-bottom: 20px;">
      <el-carousel-item v-for="item in 3" :key="item" style="background-color: #99a9bf;">
        <h3 style="text-align: center; line-height: 300px;">热门手机展示图 {{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <div style="text-align: center;">
      <el-button type="success" size="large" @click="$router.push('/list')">去选购手机</el-button>
      <el-button type="info" size="large" @click="$router.push('/profile')">个人中心</el-button>
    </div>
  </div>
</template>