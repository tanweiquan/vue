import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Blog from '../views/BlogView.vue'
import Video from '../views/VideoView.vue'
// App.vue中要router-link to的值，即跳转到哪里
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:"/blog",
    name:"blog",
    component:Blog
  },
  {
    path:"/video",
    name:"video",
    component:Video
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 导航守卫,拦截定位路由,在这里相当于在未登陆的情况下锁定在登陆页
router.beforeEach(((to,from,next)=>{
  if(to.path!=="/login"){ // 如果访问的路由不是/login，则判断
    if(localStorage.getItem("username")){ // 本地localStorage是否取得username
      next();                             // 是就继续
    }else{
      next("/login");                     // 否则重定位到/login
    }
  }else{
    next();
  }
}))

export default router
