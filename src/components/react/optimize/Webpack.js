import React from 'react'

const State=(props)=>{
    return (
        <div>
            <div>
                <h3 className='Title_h3'>修改常用设置</h3>
                <p>create-react-app 直接创建了脚手架，但是要修改配置要细看package.json文件的
                    <span className="spanCode">scripts</span> 里的文件读取的
                    <span className="spanCode">react-scripts</span> 是在node_modules里面找 react-scripts文件。
                </p>
                <div><span className="spanCode">修改端口</span> 在react-scripts/scripts/start.js文件。</div>
                <div><span className="spanCode">修改webpack</span> 在react-scripts/config/webpack.config.dev.js文件。</div>
                <div><span className='red'>注意</span>create-react-app 创建后会自动安装配置，很多东西都是开箱即用，所以上面的修改webpack方法是错误的
                ，修改有两种方法，第一种就是将配置暴露出来，使用命令 <span className="spanCode">npm eject</span>,但是此方法不可以逆，暴露出配置后就会
                多了几个配置文件，这时候和Vue是差不多的方法，修改配置即可。第二种方法是比较推荐的，安装模块
                <span className="spanCode">npm i -D react-app-rewired customize-cra babel-plugin-import</span>, react-app-rewired 插件提供react额外的webpack的配置，
                需要配合 customize-cra 使用，且 react-app-rewired 版本要求在2.0以上，最好是2.0.2以上。在根目录创建 config-overrides.js ，以antd按需加载为例，babel-plugin-import
                是为了按需加载需要的插件。具体的使用方法可以去 npm 官网查看 customize-cra 使用方法</div>
                <pre>
                    <code>
                        {`
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
        }),
)
                        `}
                    </code>
                </pre>
                <div>使用了 react-app-rewired 后，package.json文件的 scripts 配置 需要改下,否则 react-app-rewired 配置不起效</div>
                <pre>
                    <code>
                        {`
修改前配置                        
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
}
修改后配置
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
}
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>一些常用配置</h3>
                <pre>
                    <code>
                        {`
const { override, fixBabelImports ,addWebpackExternals ,addWebpackAlias ,addLessLoader } = require('customize-cra');
const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const myPlugin = [
    new UglifyJsPlugin(
    {
        uglifyOptions: {
        warnings: false,
        compress: {
            drop_debugger: true,
            drop_console: true
        }
        }
    }
    )
]
    
module.exports = override(
    fixBabelImports('import', { //配置按需加载
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
    }),
    addWebpackExternals({ //不做打包处理配置，如直接以cdn引入的
    echarts: "window.echarts",
    // highcharts:"window.highcharts"
    }),
    addWebpackAlias({ //路径别名
    '@': path.resolve(__dirname, 'src'),
    }),
    addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
        '@primary-color': '#1DA57A'
    }
    }),
    (config)=>{ //暴露webpack的配置 config ,evn
    // 去掉打包生产map 文件
    // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    if(process.env.NODE_ENV==="production") config.devtool=false;
    if(process.env.NODE_ENV!=="development") config.plugins = [...config.plugins,...myPlugin]
    //1.修改、添加loader 配置 :
    // 所有的loaders规则是在config.module.rules(数组)的第二项
    // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
    // 修改 sass 配置 ，规则 loader 在第五项(具体看配置)
    const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
    loaders[5].use.push({
        loader: 'sass-resources-loader',
        options: {
        resources: path.resolve(__dirname, 'src/asset/base.scss')//全局引入公共的scss 文件
        }
    })
    return config
    }
);                        
                        `}
                    </code>
                </pre>
            </div>
            <div className='red'>
                注意：下面的方法 create-react-app 已经内置，开箱即用
            </div>
            <div>
                <h3 className=''>通过js压缩</h3>
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