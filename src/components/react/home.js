import React from 'react';
// import { Skeleton } from 'antd';
import { Icon } from 'antd';

const home =()=> {
      return (
        <div style={{marginTop:10}}>
        <div className="indexPages">
          <div className="title">
            首页信息
          </div>
          <div className="content">
            <h3 className='Title_h3'>网站终旨是前端学习笔记</h3>
            <p>本网站以为react技术栈的学习笔记demo，主要有react、nodejs、linux的笔记，不定期添加笔记内容,打通前后端。
              <a href='https://github.com/miss-tree/react_note' target='_blank' rel='nofollow me noopener noreferrer'>
              <Icon type="github" />github地址</a>
            </p>
            <h3>https://gitee.com/miss-tree/vue-vite-jsx</h3>
            <p>
              一个使用 vue3.x 基于 vite 开发的个人博客，内容主要有学习的 VUE3 和 vite 技术，
              还有在网上学习的一些算法知识
            </p>
            <div>
              项目地址：<a href='http://47.113.195.11/vitejs' target='_blank' rel='nofollow me noopener noreferrer'>
              http://47.113.195.11/vitejs</a>
              <br/>
              gitee地址:<a href='https://gitee.com/miss-tree/vue-vite-jsx' target='_blank' rel='nofollow me noopener noreferrer'>
              https://gitee.com/miss-tree/vue-vite-jsx
              </a>
              <br/>
              github地址:<a href='https://github.com/miss-tree/vue-vite-jsx' target='_blank' rel='nofollow me noopener noreferrer'>
              https://github.com/miss-tree/vue-vite-jsx
              </a>
            </div>  
            <hr/>
            <h3>webpack-react-ts</h3>
            <p>
              一个基于 webpack 5.x 搭建的 react 可以使用 TS ，可以用 webpack 开发，也可以使用 vite 开发，两个模式供个人选择
              webpack.config.js 和 vite.config.js 内都有详细的内容注释供个人理解
            </p>
            <div>
              gitee地址:<a href='https://gitee.com/miss-tree/webpack-react-ts' target='_blank' rel='nofollow me noopener noreferrer'>
              https://gitee.com/miss-tree/webpack-react-ts
              </a>
              <br/>
              github地址:<a href='https://github.com/miss-tree/webpack-react-ts' target='_blank' rel='nofollow me noopener noreferrer'>
              https://github.com/miss-tree/webpack-react-ts  
              </a>
            </div>  
            <hr/>
            <h3>VUEv后台管理系统</h3>
            <p>
              主要是基于 vue-element-admin 框架搭建改善而来，主要的一些技术是 vue2.x 的技术，其中还包括 ES6 的一些学习笔记、
              小程序笔记、在知乎和掘金等技术博客学习笔记和自己学习 D3.js 技术的笔记。最后的一个是关于离线地图搭建的 OpenLayers 
              技术
            </p>
            <div>
              项目地址：<a href='http://47.113.195.11/vue' target='_blank' rel='nofollow me noopener noreferrer'>
              http://47.113.195.11/vue/</a>
              <br></br>
              gitee地址:<a href='https://gitee.com/miss-tree/vue_element_admin' target='_blank' rel='nofollow me noopener noreferrer'>
              https://gitee.com/miss-tree/vue_element_admin
              </a>
              <br/>
              github地址:<a href='https://github.com/miss-tree/Vue_element_admin' target='_blank' rel='nofollow me noopener noreferrer'>
              https://github.com/miss-tree/Vue_element_admin
              </a>
            </div>
            <hr/>
            <h3>前端拾遗</h3>
            <p>
              一个基于layerui的前端框架搭建的一个类似后台系统页面，主要是前端的基础部分，其中包含html、css、svg
              和js。是为了便于查找旧知识做的
            </p>
            <div>
              项目地址：<a href='http://47.113.195.11/demo' target='_blank' rel='nofollow me noopener noreferrer'>
              http://47.113.195.11/demo/</a>
              <br></br>
              github地址:<a href='https://github.com/miss-tree/Pick_Pearl' target='_blank' rel='nofollow me noopener noreferrer'>
              https://github.com/miss-tree/Pick_Pearl
              </a>
            </div>
            <hr/><br/>
            <div className="hang"> npm i 即可，node服务也是同一个package.json，开启serve下的App.js服务即可开启后端服务</div>
            <h3 className='Title_h3'>react是学习react的笔记</h3>
            <p>主要的笔记：</p>
              <ul> 
                <li>react基础</li>
                <li>react-router4.x路由使用</li>
                <li>redux</li>
                <li>react使用antdUI</li>
              </ul>
            <h3 className='Title_h3'>Three.js</h3>
            <p>主要的笔记：</p>
            <ul>
              <li>关于WebGL</li>
              <li>Three的使用</li>
            </ul>  
            <h3 className='Title_h3'>nodejs是express和koa的笔记</h3>
            <p>主要的笔记：</p>
            <ul>
              <li>nodejs基本知识</li>
              <li>express的使用</li>
              <li>koa的使用</li>
            </ul>
            <h3 className='Title_h3'>linux系统笔记</h3>
            <p>主要的笔记：</p>
            <ul>
              <li>linux的使用和安装</li>
              <li>安装虚拟机</li>
              <li>linux的操作</li>
            </ul>
          </div>
          <div className="linuxImg">
            <img src={require('../../assets/images/webpack.png')} alt=''/>
          </div>
        </div>
        </div>
      );
  }

export default home;  