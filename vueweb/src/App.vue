<template>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  <router-view/>
</template>

<style>
</style>
<script>

</script>
<!-- 
axios的使用
vue.axios.get(api).then((response) => {
console.log(response.data)
})
this.axios.get(api).then((response) => {
console.log (response.data)
})
this.$http.get(api).then((response) =>{
console.log( response.data)
}) 
-->