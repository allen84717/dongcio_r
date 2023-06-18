const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dongcio_r/'
    : '/',

  configureWebpack: {

    performance: {
      hints: false,
      maxEntrypointSize: 500000000,
      maxAssetSize: 300000000,
    },
  }
})
