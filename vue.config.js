module.exports = {
  /* vue-cli3 项目配置文件 */

  // 基本路径
  // 默认情况下，我们假设您的应用程序将部署在域的根上
  // 例如：https://www.my-app.com/
  // 如果应用程序部署在子路径上，则需要指定
  // 这里的子路径，例如，如果应用程序部署在 https://www.foobar.com/my-app/
  // 然后把这个变成 '/my-app/'
  // 例如：https://www.example.com/project/v1.1/index.html
  // baseUrl 为 /project/v1.1/
  baseUrl: '/',

  // 输出文件目录
  outputDir: 'dist',

  // 静态资源目录/用AJAX请求的本地静态资源也要放在这里（JS/CSS/IMG/字体/...）
  assetsDir: 'assets',

  // eslint-loader eslint检查,是否在保存的时候检查
  lintOnSave: true,

  // 使用编译器生成全在浏览器
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: false,

  // babel-loader在默认情况下跳过`node_modules`模块
  // 显式地使用此选项来转换依赖项
  transpileDependencies: [ /* string or regex */ ],

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  
  // 调整内部webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },

  // 在生产中使用Babel＆TS thread-loader
  // 默认情况下，如果机器有超过1个内核
  parallel: require('os').cpus().length > 1,

  // PWA（渐进式WEB应用） 插件相关配置 https://segmentfault.com/a/1190000012353473
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // webpack-dev-server 相关配置
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
  devServer: {
    open: process.platform === 'darwin',
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,
    https: false,
    hotOnly: false,
    compress: true,
    // 设置代理
    proxy: null,
    before: app => {}
  },
  
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}