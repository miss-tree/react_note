import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class index extends Component {
    render() {
      return (
        <div style={{marginTop:10}}>
        <div className="indexPages">
          <div className="title">
            首页信息
          </div>
          <div className="content">
            <h3 className='Title_h3'>网站终旨是前端学习笔记</h3>
            <p>本网站以为react技术栈的学习笔记demo，主要有react、nodejs、linux的笔记，不定期添加笔记内容,打通前后端。</p>
            <h3 className='Title_h3'>react是学习react的笔记</h3>
            <p>主要的笔记：</p>
              <ul> 
                <li>react基础</li>
                <li>react-router4.x路由使用</li>
                <li>redux</li>
                <li>react使用antdUI</li>
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
        </div>
        </div>
      );
    }
  }

export default index;  