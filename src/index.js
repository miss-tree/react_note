import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/index.css';

//加快react运行速度的一个js文件
import * as serviceWorker from './serviceWorker';
// import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
serviceWorker.unregister()