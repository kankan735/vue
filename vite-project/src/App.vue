<template>
  <div class="main-container">
    <h1>我的手机商城</h1>
    <router-view></router-view> 
  </div>
  <div class="common-layout">
    <el-menu mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/list">手机列表 </el-menu-item>
      <el-menu-item index="/cart">购物车</el-menu-item>
      <el-menu-item index="/login" style="margin-left: auto;">登录</el-menu-item>
    </el-menu>

    <div style="padding: 20px;">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
/* 去掉默认的边距，让菜单顶满屏幕 */
body { margin: 0; }
</style>
<script setup>
// 这里啥都不用写，留空就行
</script>