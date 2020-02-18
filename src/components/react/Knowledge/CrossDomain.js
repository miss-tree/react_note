import React from 'react'

export default function CrossDomain () {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>配置跨域</h3>
                    <div>配置一个可以像Vue一样的跨域，但不需要类似Vue创建 vue.config.js一样，以下是创建的方法</div>
                    <div className="hang">
                        <span className="code">npm install http-proxy-middleware --save</span>
                    </div>
                    <pre>
                        <code>
                            {`
        src/setupProxy.js                    
        const proxy = require('http-proxy-middleware');
        module.exports = function(app) {
          app.use(
            '/api',
            proxy({
              target: 'http://localhost:5000',
              changeOrigin: true,
            })
          );
        };                    
                            `}
                        </code>
                    </pre>
                    <div>
                        <span className="red">注意</span>
                        一定要在src/setupProxy.js下创建， 您不需要在任何地方导入此文件。启动开发服务器时，它会自动注册。
                        此文件仅支持Node的JavaScript语法。确保仅使用支持的语言功能（即不支持Flow，ES Modules等）。
                        将路径传递给代理功能可让您在路径上使用通配符和/或模式匹配，这比快速路由匹配更灵活。
                    </div>
                </div>
            </div>
        )
}
