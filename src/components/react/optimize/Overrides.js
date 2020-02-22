import React from 'react'

export default function Overrides () {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>config-overrides常用设置</h3>
                    <div>
                        官网手册：
                        <a href='https://github.com/arackaf/customize-cra/blob/master/api.md#addwebpackpluginplugin' target="_blank" rel='nofollow me noopener noreferrer'>
                            https://github.com/arackaf/customize-cra/blob/master/api.md#addwebpackpluginplugin
                        </a>
                    </div>
                    <pre>
                        <code>
                            {`
        const { override, fixBabelImports , disableEsLint, addWebpackPlugin} = require('customize-cra');
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
        
        process.env.GENERATE_SOURCEMAP = "false";  //关闭sourcemap    
        const rewiredMap = () => config => {//关闭sourcemap  方法二
            config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
            return config;
        };    

        module.exports = override(
        
            fixBabelImports('import', {//antd按需加载
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css',
             }),
             disableEsLint(),//去除EsLint
             addWebpackPlugin(
                new BundleAnalyzerPlugin({//打包分析  
                    analyzerMode: "server",
                    analyzerHost: "127.0.0.1",
                    analyzerPort: 8888, // 运行后的端口号
                    reportFilename: "report.html",
                    defaultSizes: "parsed",
                    openAnalyzer: true,
                    generateStatsFile: false,
                    statsFilename: "stats.json",
                    statsOptions: null,
                    logLevel: "info"
                })  
             ),
             rewiredMap(),//关闭sourcemap  方法二
             addDecoratorsLegacy(),//支持装饰器
             addLessLoader({//less
               javascriptEnabled: true,
               modifyVars: { '@primary-color': '#1DA57A' },
             })
        )
        
                            
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        )
}
