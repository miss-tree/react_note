import React from 'react'

export default function crossEnv () {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>cross-env</h3>
                    <div>一个修改环境配置的插件，搭配 customize-cra 、react-app-rewired使用还是挺方便的。
                        使用的方法NPM官网上查询 cross-env 就有，下面讲几种常用的方法</div>
                    <div>在package.json中修改配置默认3000端口</div>
                    <div className="hang">
                        <pre>
                            <code>
                                {`
        "start": "cross-env PORT=9000 react-app-rewired start",                        
                                `}
                            </code>
                        </pre>
                    </div>
                    <div>要实现https</div>
                    <div className="hang">
                        <pre>
                            <code>
                                {`
        "start": "cross-env PORT=9000 HTTPS=true react-app-rewired start",                        
                                `}
                            </code>
                        </pre>
                    </div>
                    <div>在打包环境去掉在js文件中dev-tool工具的.map文件</div>
                    <div className="hang">
                        <pre>
                            <code>
                                {`
        "build": "cross-env GENERATE_SOURCEMAP=false react-app-rewired build",                       
                                `}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        )
}
