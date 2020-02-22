const { override, fixBabelImports , disableEsLint, addWebpackPlugin} = require('customize-cra');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');


module.exports = override(

    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
     }),
     disableEsLint(),
     addWebpackPlugin(
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

