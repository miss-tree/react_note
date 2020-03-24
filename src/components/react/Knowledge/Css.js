import React from 'react'
// import '../css/Structure.css'

export default function Css () {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>原生</h3>
                    <pre>
                        <code>
                            {`
	在render函数内输入变量					
        const textStyles = {
          color: 'white',
          backgroundColor: this.state.bgColor
        };
        
        <p style={textStyles}>inline style</p>
		
		import '../css/Structure.css'	引入样式
		
		<div className='around'>
				<span className='red'>左</span>
				<span className='red'>右</span>
		</div>
                            `}
                        </code>
                    </pre>
                  <p>
                    在组件内引用的css样式只能在组件使用,不能在全局,全局的需要在index.js添加
                    这里是和vue不相同的地方,vue单独使用的样式只要在组件样式前加 scope 就可以了.
                      
                  </p>
                </div>
                <div>
                    <h4>styled-jsx</h4>
                    <p>npm add styled-jsx 安装后，不用import，而是一个babel插件，.babelrc配置：</p>
                    <pre>
                      <code>
                        {`
    {
      "plugins": [
        "styled-jsx/babel"
      ]
    }                    
                        `}
                      </code>
                    </pre>
                    <pre>
                      <code>
                        {`
    const App = () => (
      <div>
        <p>只有这个p会被上样式</p>
        <style jsx>{
          \`p { 
            color: red; 
          }\`
        }</style>
      </div>
    )
    转化
    import _JSXStyle from 'styled-jsx/style'

    const App = () => (
      <div className='jsx-123'>
        <p className='jsx-123'>只有这个p会被上样式</p>
        <_JSXStyle styleId='123' css={\`p.jsx-123 {color: red;}\`} />
      </div>
    )
                        `}
                      </code>
                    </pre>
                    <div>动态使用</div>
                    <pre>
                      <code>
                        {`
    export default (props) => (
      <div>
        <button>styled-jsx</button>
        <style jsx>{
          \`button { color: \${props.color}; }\`
        }</style>
      </div>
    )

    const Button = (props) => (
      <button>
         { props.children }
         <style jsx>{\`
            button {
              padding: \${ 'large' in props ? '50' : '20' }px;
              background: \${props.theme.background};
            }
         \`}</style>
      </button>
    )
                        `}
                      </code>
                    </pre>
                    <span>styled-jsx使用sass</span>
                    <div className='balance'>
                      <div className="hang">
                          <span>yarn add -D node-sass styled-jsx-plugin-sass</span>
                      </div>
                    </div>
                    <pre>
                      <code>
                        {`
    .babelrc配置                    
    {
      "plugins": [
        [
          "styled-jsx/babel",
          { "plugins": ["styled-jsx-plugin-sass"] }
        ]
      ]
    }
                        `}
                      </code>
                      </pre>
                      <span>全局css</span>
                      <pre>
                        <code>
                        {`
    export default () => (
      <div>
        <style jsx global>{\`
          body {
            background: red
          }
        \`}</style>
      </div>
    )

    div :global(.react-select) {
        color: red
    }
                          `}
                        </code>
                      </pre>
                </div>
                <div>
                  <h3>使用Sass</h3>
                  <div className='balance'>
                    <div className="hang">
                        <span>npm i -D node-sass sass-loader</span>
                    </div>
                  </div>
                  <pre>
                    <code>
                      {`
    config-overrides.js                  
    const { adjustStyleLoaders } = require("customize-cra");

    module.exports = override(
      adjustStyleLoaders(({ use: [ , css, postcss, resolve, processor ] }) => {
        css.options.sourceMap = true;         // css-loader
        postcss.options.sourceMap = true;     // postcss-loader
        // when enable pre-processor,
        // resolve-url-loader will be enabled too
        if (resolve) {
          resolve.options.sourceMap = true;   // resolve-url-loader
        }
        // pre-processor
        if (processor && processor.loader.includes('sass-loader')) {
          processor.options.sourceMap = true; // sass-loader
        }
      })
    );                  
                      `}
                    </code>
                  </pre>
                </div>
                <div>
                  <h3>使用less</h3>
                  <div className='balance'>
                    <div className="hang">
                        <span>npm i less   -D less-loader</span>
                    </div>
                  </div>
                  <pre>
                    <code>
                      {`
    config-overrides.js                  
    const { addLessLoader } = require("customize-cra");

    module.exports = override(
      addLessLoader({
        strictMath: true,
        noIeCompat: true,
        localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom \`localIdentName\`, default is '[local]--[hash:base64:5]'.
      })
    );                  
                      `}
                    </code>
                  </pre>
                  <p>
                    就可以使用.less文件引入组件了，若要使用 CSS Modules，就直接将后缀名改为.module.less
                  </p>
                </div>
            </div>
        )
}
