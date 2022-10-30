<template>
  <!-- 父级组件 -->
  <!-- 网页模板，编写html文件，只能写单个标签，即要用div包裹多个标签才行 -->
  <div>
    <h1>{{mymsg}}</h1>
    <!-- 1、使用外部组件：模板 -->
    <!-- <MenuList></MenuList> -->

    <!-- 父组件向子组件传值：自定义属性传值 (:自定义属性名="变量")-->
    <MenuList :msg="message"></MenuList>

    <!-- 子组件向父组件传值：自定义事件 -->
    <h1>{{abc}}</h1>
    <MenuList @myfunc="sayhello"></MenuList>

    <!-- 监听器例子 -->
    <h1>{{num}}</h1>
    <button @click="incr">+</button>

    <!-- 插槽 -->
    <LayOutList>
      <template v-slot:header>
        <h1>header</h1>
      </template>
      <template v-slot:content>
        <h1>content</h1>
      </template>
      <template v-slot:footer>
        <h1>footer</h1> 
      </template>
    </LayOutList>
  </div>
</template>

<script>
// 2、使用外部组件：引入其他组件
import MenuList from "./components/MenuList.vue"
import LayOutList from "./components/LayOutList.vue"
// js代码,要提供暴露接口给main.js
export default{

  // 当vue实例被创建时，会自动执行这两个函数，且有顺序的
  beforeCreate(){
    console.log("1")
  },
  created(){
    console.log("2")
  },
  beforeMount(){
    console.log("3")
  },
  mounted(){
    console.log("4")
  },
//........................

  // 3、使用外部组件：注册组件
  components:{MenuList,LayOutList},
  data(){
    return{
      message:"我是父组件",
      abc:"",
      name:"张",
      sex:"男",
      num:0
    }
  },
  // 跟data用法类似的
  computed:{
    mymsg(){
      return this.name+this.sex;
    }
  },
  
methods:{
  // 子组件向父组件传值：自定义事件
  sayhello(childData){
    this.abc=childData;
  },
  
  // 监听器例子
  incr(){
    this.num++
  }
},

// 监听器
watch:{
  num(val){//这里监听num的变化
    alert(val)
  }
}
}

</script>

<style>
/* css代码 */

</style>
<!-- 
DOM操作
DOM：文档对象模型
DOM节点：元素节点、属性节点、文本节点
通过操作DOM实现页面效果：jQuery
$("h1").text("hello_world")  --通过操作h1标签的文本节点改变文本内容

html中
<div id="box">hello</div>
css
<style>
div{
  height:100px,
}
</style>
js中 
let box = document.querySelector("#box");
let style = windows.getComputedStyle(box);
console.log(style.height);
上面相当于vue中
<div ref="box">hello<div>
let box = this.$refs.box;
let style = windows.getComputedStyle(box);
console.log(style.height);
-->


<!-- 
表单
数据的双向绑定 v-model
<div id ="app">
  <h1>{{message}}</h1>
  <input type="text" v-model="message">
</div>
js代码
data(){
  return{
    message:"",
  }
}

vue中提交表单
<form @submit.prevent="postData">
  <label for="">用户名：</label>
  <input type="text" v-model="formData.username">
  <label for="">密码：</label>
  <input type="password" v-model="formData.password">
  <label for="">爱好：</label>
  <select v-model="formData.hobby">
    <option value="basketball">篮球</option>
    <option value="football">足球</option>
  </select>
  <label for="">性别：</label>
  <label for="">男</label>
  <input type="radio" value="男" v-model="formData.sex">
  <label for="">女</label>
  <input type="radio" value="女" v-model="formData.sex">
  <label for="">技能：</label>
  <label for="">前端</label>
  <input type="checkbox" value="前端" v-model="formData.skill">
  <label for="">GO</label>
  <input type="checkbox" value="GO" v-model="formData.skill">
  <button>提交表单</button>
</form>
js代码
data(){
  return{
    formData:{
    username:"",
    password:"",
    hobby:"",
    sex:"",
    skill:[]
    }
  }
}
methods:{
  postData(){
    console.log(this.formData)
  }
}
-->


<!--
  数据交互，此方法适用于vue2.0
  先用npm安装axios，然后写代码
  html中
  <button @click="myfunc()">发送请求</button>
  js中
  import axios from "axios"
  methods:{
    myfunc(){
      axios.get("http://www.baidu.com/searchxxx").then(
        res=>{
          console.log(res.data)
        }
      )
      axios.post("http://www.baidu.com/useyyy/${index}").then(
        res=>{
          console.log(res.data)
        }
      )
    }
  }

 -->
