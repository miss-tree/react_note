import React from 'react'

export default function Pack () {
        return (
            <div>
                <div>
                    <h3 className="Title_h3">打包白屏</h3>
                    <pre>
                        <code>
                            {`
        {
            "name": "reactdemo",
            "version": "0.1.0",
            "private": true,
            "homepage": "./", //添加homepage
            "dependencies": {
                ……
            },
            "devDependencies": {
                ……
            },
            "scripts": {
              "start": "cross-env PORT=9527 react-app-rewired start",
              "build": "cross-env GENERATE_SOURCEMAP=false react-app-rewired build",
              "test": "react-app-rewired test --env=jsdom",
              "eject": "react-app-rewired eject"
            },
          }
                            `}
                        </code>
                    </pre>
                    <p>在 react-scripts 2.0版本以后，homepage 还可以有另外的骚操作，设置 GitHub Pages (就是在github上生成的链接)</p>
                    <pre>
                        <code>
                            {`
        npm install --save gh-pages

        {
                ……
            "homepage": "https://myusername.github.io/my-app",
            "dependencies": {
                ……
            },
            "devDependencies": {
                ……
            },
            "scripts": {
            + "predeploy": "npm run build",
            + "deploy": "gh-pages -d build",
            + "deploy": "gh-pages -b master -d build",  //若不是自己的项目需要推送的还要加这行代码
              "start": "cross-env PORT=9527 react-app-rewired start",
              "build": "cross-env GENERATE_SOURCEMAP=false react-app-rewired build",
              "test": "react-app-rewired test --env=jsdom",
              "eject": "react-app-rewired eject"
            },
          }
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        )
}
