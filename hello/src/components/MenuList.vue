<template>
    <!-- 子组件 -->
    <div>
        <h3>动态</h3>
        <h3>热门</h3>
        <h3>频道</h3>
        <ul>
            <li v-for="(v,i) in menudata" :key="i">
                {{v.name+":"+v.user+":"+v.val}}
            </li>
        </ul>

        <!-- 父组件向子组件传值：用自定义属性名 -->
        <h1>{{msg}}</h1>
        <!-- 子组件向父组件传值：自定义事件 -->
        <button @click="sendData">传数据给父组件</button>
    </div>
</template>
<style>
h3{
    background-color: orange;
    float: left;
    border-radius: 25%;
}
/* 
选择器:伪类{}
伪类：
鼠标移入 hover
鼠标按下 active
超链接未访问 link
超链接已访问 visited
获取焦点 focus
失去焦点 blur
禁用 disabled
选中 checked
*/
h3:active{
    background-color:pink;
}
</style>
<script>
export default{
    // 父组件向子组件传值：用自定义属性名
    props:["msg"],
  
    // 子组件向父组件传值：自定义事件
    methods:{
        sendData(){
            this.$emit("myfunc",this.childData);
        }
    },

    data(){
       
        return {
            menudata:[
                {name:"动态",user:"Q来了",val:"我今天入住b站了",get:0},
                {name:"热门",user:"搞笑版秃头怪",val:"卧槽，这都行",get:10000},
                {name:"频道",user:"it测评",val:"评测2022年手机",get:10000}
            ],
            childData:"我是子组件"
        }
    }
}
</script>