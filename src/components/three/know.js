import React from "react";

const know = ()=>{
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>WebGL</h3>
                    <p>
                        WebGL（全写Web Graphics Library）是一种3D绘图协议，
                        这种绘图技术标准允许把JavaScript和OpenGL ES 2.0结合在一起，
                        通过增加OpenGL ES 2.0的一个JavaScript绑定，WebGL可以为HTML5 Canvas提供硬件3D加速渲染，
                        这样Web开发人员就可以借助系统显卡来在浏览器里更流畅地展示3D场景和模型了，
                        还能创建复杂的导航和数据视觉化。
                    </p>
                </div>
                <div >
                    <h3>关于Three.js</h3>
                    <p>
                    Three.js 是一款运行在浏览器中的 3D 引擎，你可以用它创建各种三维场景，包括了摄影机、光影、材质等各种对象。
                    </p>
                </div>
                <div>
                    <h3>一款制作GIF软件</h3>
                    <p>
                        案例的效果只能通过GIF来展示，不增加现在的首屏加载内容负担。
                        <a href='https://zhuanlan.zhihu.com/p/90510766' target='_blank' rel='noreferrer'>
                        软件地址
                        </a>
                    </p>
                </div>
                <div>
                    <h3>示例GIT地址</h3>
                    <p>
                        THREE.JS做3d示例一般插件还是挺多的，所以将所有的demo放到GIT上，可以自行下载
                        <a href='https://github.com/miss-tree/ThreeJs' target='_blank' rel='noreferrer'>
                        demo地址
                        </a>
                    </p>
                </div>
            </div>
        );
    }

export default know;