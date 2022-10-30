import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 再用npm安装完ElementUI(npm install element-plus --save)，然后
// 引入ElementUI
import ElementUI from 'element-plus';
// 引入ElementUI的样式
import 'element-plus/theme-chalk/index.css';
// 加载ElementUI进来


createApp(App).use(ElementUI).use(router).mount('#app')
