<template>
  <div style="padding: 40px;">
    <el-button @click="$router.back()">返回列表</el-button>
    <h1>商品详情页</h1>
    <p>您正在查看 ID 为 {{ route.params.id }} 的手机</p>
    <el-empty description="这里可以放手机的详细参数图片"></el-empty>
    <el-button type="danger" size="large">立即购买</el-button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>