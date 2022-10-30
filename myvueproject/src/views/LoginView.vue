<template>
    <div>
        <form @submit.prevent="doLogin">
            <label for="">用户名：</label>
            <input type="text" v-model="loginData.username">
            <label for="">密码：</label>
            <input type="password" v-model="loginData.password">
            <button>登陆</button>
            <el-button type="primary">登陆</el-button>
        </form>
    </div>
</template>
<script>
export default{
    data(){
        return{
            loginData:{
            username:"",//v-model绑定数据
            password:""
            }
        }
    },
    methods:{
        doLogin(){
            console.log(this.loginData)
            // 保存到浏览器本地localStorage,其他页面就可以用了
            localStorage.setItem("username",this.loginData.username);

            // 上诉行为完成后，实行页面跳转
            // 页面跳转
            this.$router.push("/");
        }
    }
}
</script>