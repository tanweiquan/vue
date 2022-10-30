<template>
  <div>
    <h1>这是about页面</h1>
    <el-button type="primary" @click="reqfunc">主要按钮</el-button>
    <p>{{reqdata}}</p>
  </div>
</template>{
<script>
import axios from 'axios';

    export default{
      data(){
        return {
          reqdata:""
        }
      },
      methods:{
        reqfunc(){
          axios.get("/api").then(res=>{
            this.reqdata=res.data
          })
        }
      }
    }
</script>
