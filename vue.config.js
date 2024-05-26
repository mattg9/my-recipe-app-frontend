module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.loaders = {
          'template': 'vue-template-loader',
          'script': 'babel-loader',
          'style': 'vue-style-loader'
        }
        return options
      })
  }
}
