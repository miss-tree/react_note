const { override, fixBabelImports, disableEsLint, addWebpackPlugin, addWebpackAlias} = require('customize-cra');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css','png','jpg']
const chalk = require('chalk');
const path = require("path")


module.exports = override(
    // 默认路径设置
    addWebpackAlias({
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      // "@components": path.resolve(__dirname, "./src/components"),
    }),
    // 处理antd样式问题
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
     }),
     disableEsLint(),
     addWebpackPlugin(
         // 配置compression-webpack-plugin压缩
        new CompressionWebpackPlugin({
            //   filename: '[path].gz[query]', // 目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
              filename: '[path][base].gz', 
              algorithm: 'gzip',
              test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
              threshold: 1024*10,
              minRatio: 0.8
            }), 
        new BundleAnalyzerPlugin({
            analyzerMode: "server",
            analyzerHost: "127.0.0.1",
            analyzerPort: 8724, // 运行后的端口号
        }),
        new ProgressBarPlugin({
            complete: "green",
            format: `${chalk.green('Building')} [ ${chalk.green(':bar')} ] ':msg:' ${chalk.bold('(:percent)')}`,
            clear: true
        })

         
     )
)

