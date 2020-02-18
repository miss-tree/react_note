import React from 'react'

export default function Responsive () {
        return (
            <div>
                <h3 className='Title_h3'>响应式设置</h3>
                <div>我们经常会遇到响应式框架要求，兼容pc和移动端，会用到一些响应式布局，本项目demo只是提供PC端而已。
                    但是字体还是要根据页面的大小设置响应，下面是 React 设置的一个方法：</div>
                    <pre>
                        <code>
                            {`
          // JSX 渲染完成
          componentDidMount() {
            this.initRecalculation();
          }
        
          // 重新计算
          recalculation = () => {
            const clientWidth = window.innerWidth || document.documentElement.clientWidth;
            if (!clientWidth) return;
            const rootSize = 40 * (clientWidth / 750);
            document.documentElement.style.fontSize = (rootSize) + 'px';
          };
        
          // 动态改变根元素字体大小
          initRecalculation = () => {
            this.recalculation();
            const resizeEvt = 'osrientationchange' in window ? 'orientationchange' : 'resize';
            if (!document.addEventListener) return;
            window.addEventListener(resizeEvt, this.recalculation, false);
            document.addEventListener('DOMContentLoaded', this.recalculation, false);
          };                    
                            `}
                        </code>
                    </pre>
            </div>
        )
}
