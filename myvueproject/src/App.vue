<template>
  <nav>
    <!-- 先是link到router这个文件夹下的index.js文件，然后再通过router跳转到组件xxx.vue文件中渲染 -->

    <!-- a标签 href -->
    <router-link to="/">首页</router-link> ||
    <router-link to="/blog">博客</router-link>||
    <router-link to="/video">视频</router-link>||
    <span v-if="showuser">欢迎用户:{{username}} <button @click="logout">退出登陆</button></span>
  </nav>
  <!-- <router-view/>显示网页内容的位置 -->
  <router-view/> 

</template>
<script>

export default{
  data(){
    return {
      username:localStorage.getItem("username"),
      showuser:localStorage.getItem("username") // 有值就true,没有值就false
    }
  },
  // 使用监听器实现不刷新页面提取本地存储,监听路由改变
  watch:{
    '$route.path':function(){
      this.username=localStorage.getItem("username")
      this.showuser=localStorage.getItem("username")// 有值就true,没有值就false
    }
  },
  methods:{
    // 推出登陆
    logout(){
      localStorage.clear();
      this.$router.push("/login")
    }
  }
}
</script>