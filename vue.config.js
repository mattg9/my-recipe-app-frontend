// vue.config.js
module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // vue-loader specific options can be added here
        return options;
      });

    // Add Vuetify loader to handle Vuetify's styles correctly
    config.module
      .rule('vuetify')
      .test(/\.s(c|a)ss$/)
      .use('style-loader')
      .loader('style-loader')
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('sass-loader')
      .loader('sass-loader')
      .options({
        implementation: require('sass'),
        additionalData: `@import "~vuetify/src/styles/settings/_variables.scss"`
      });
  }
}
