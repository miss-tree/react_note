import React from 'react'

const State=(props)=>{
    return (
        <div>
            <div>
                <h3 className='Title_h3'>通过js压缩</h3>
                <p>去掉注释，减少空格可以减少无用字符占用的文件体积。
                    webpack 插件 UglifyjsWebpackPlugin 官方对插件的介绍是用来缩小你 javascript 文件.</p>
                <div>webpack.config.js配置增加</div>
                <pre>
                    <code>
                        {`
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
    
    plugins: [
        new UglifyJsPlugin({
          uglifyOptions: {
            ie8: false,
            mangle: true,
            output: { comments: false },
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: true,
              unused: false,
             },
          },
          sourceMap: true,
          cache: true,
        }),
      ],
                        `}
                    </code>
                </pre>
            </div>  
            <div>
                <h3>gzip 压缩</h3>
                <p>有一种打包压缩方式，将文件压缩为 zip 包，这种压缩效果显著，
                通常可以将文件成倍压缩。CompressionWebpackPlugin 插件就提供了这种功能，</p>
                <div>webpack.config.js配置增加</div>
                <pre>
                    <code>
                        {`
    const CompressionPlugin = require("compression-webpack-plugin");
    
    plugins: [
        new CompressionPlugin(),
      ],
                        `}
                    </code>
                </pre>
                <p>但是gzip压缩需要nginx配置的支持，需要修改Nginx配置</p>
                <pre>
                    <code>
                        {`
    ...
    server {
        gzip on;
        gzip_static on;
        gzip_min_length 1000;
        gzip_buffers 4 8k;
        gzip_types text/plain application/xml text/css text/js text/xml application/x-javascript text/javascript application/json application/xml+rss image/jpeg image/png image/g
        gzip_vary on;
        listen 80;
        location / {
            ...
        }
      }
    ...
                        `}
                    </code>
                </pre>
            </div> 
            <div>
                <h3>公共 JavaScript 模块抽离</h3>
                <p>将公共的 JavaScript 模块抽离，避免重复的引入，可以有效的减少 js 文件体积。
                    webpack 4 可以使用 SplitChunksPlugin 插件来提取共同的 js，
                    在 webpack 4 以下版本可以使用 CommonsChunkPlugin 插件。</p>
                <div>webpack.config.js配置增加</div>
                <pre>
                    <code>
                        {`
    plugins: [ ...],                    
    ...                    
    optimization: {
        splitChunks: {
          chunks: 'initial',
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 2,
          maxInitialRequests: 2,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            vendors: {
              test: /\/node_modules\//,
              priority: -10,
            },
            'react-vendor': {
              test: (module, chunks) => /react/.test(module.context),
              priority: 1,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            }
          }
        }
      },
      devServer: {
    ...      
                        `}
                    </code>
                </pre>
            </div>  
        </div>
    )
}       
export default State; 