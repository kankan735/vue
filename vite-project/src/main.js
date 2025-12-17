// 文件路径：src/main.js

import { createApp } from 'vue'
import './style.css'

// 1. 改回标准的 App.vue
import App from './App.vue' 

// 2. 引入路由 (你需要先创建 router/index.js 文件，步骤在下面)
import router from './router/index.js'

// 3. 引入 Element Plus (作业要求)
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 4. 挂载插件
app.use(router)
app.use(ElementPlus)

app.mount('#app')
