import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 安装：npm i axios -S 和npm i vue-axios -S
// 引入axios，使用axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 安装：npm i element-plus -S
// 引入ElementUI
import ElementUI from 'element-plus'
import 'element-plus/theme-chalk/index.css';

createApp(App)
.use(VueAxios,axios) // 同一个包放一起
.use(ElementUI)
.use(router)
.mount('#app')
