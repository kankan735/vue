<template>
  <div style="padding: 20px;">
    <h2>所有机型</h2>
    <el-button @click="getPhonesFromBackend" type="warning" style="margin-bottom: 20px;">
      刷新列表 (从后端获取)
    </el-button>

    <el-row :gutter="20">
      <el-col :span="6" v-for="phone in phoneList" :key="phone.id" style="margin-bottom: 20px;">
        <el-card shadow="hover">
          <img src="https://via.placeholder.com/150" class="image" style="width: 100%"/>
          <div style="padding: 14px">
            <h4>{{ phone.name }}</h4>
            <p style="color: red; font-weight: bold;">¥ {{ phone.price }}</p>
            <el-button type="text" @click="goToDetail(phone.id)">查看详情</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios' // 记得导入 axios

const router = useRouter()
const phoneList = ref([
  // 默认假数据，防止后端没开时页面是空的
  { id: 1, name: 'iPhone 15 (假数据)', price: 5999 },
  { id: 2, name: '小米 14 (假数据)', price: 3999 }
])

// 跳转详情
const goToDetail = (id) => {
  router.push(`/detail/${id}`)
}

// 【加分项】从 Java 后端获取数据
const getPhonesFromBackend = async () => {
  try {
    // 假设你的 Tomcat 端口是 8080，项目名叫 my-shop
    const res = await axios.get('http://localhost:8080/my-shop/api/phones')
    if(res.data.code === 200){
      phoneList.value = res.data.data // 用真数据覆盖假数据
      console.log('获取成功', res.data)
    }
  } catch (err) {
    alert('连接后端失败，请检查 IDEA 是否运行')
  }
}

// 页面加载时自动尝试获取一次
onMounted(() => {
  getPhonesFromBackend()
})
</script>