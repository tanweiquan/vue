const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
      proxy: {
          '/api': {
              // 此处的写法，目的是为了 将 /api 的内容替换成 https://www.baidu.com/
              target: 'https://www.baidu.com/',
              // 允许跨域
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                '^/api': '' // 这里就相当于用上面的重写url，所有以/api 都重写成https://www.baidu.com，不加上则访问https://api路径
                // '^/api': '/api' 这里则访问https://www.baidu.com/api
              }
          }
      }
  }
}