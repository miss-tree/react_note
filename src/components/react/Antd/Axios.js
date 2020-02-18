import React from 'react'

export default function Axios () {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>Axios</h3>
                    <pre>
                        <code>
                            {`
        import Axios from 'axios';
        import { USER_INFO } from '../constants/index';
        import { userInfo } from '../redux/action/userInfo';
        import { store } from '../redux/index';
        import { history } from '../index';
        import { notification } from 'antd';
        //路由跳转
        const toPath = (msg, path, clean) => {
          notification.open({
            message: '通知',
            description: msg
          });
          clean && store.dispatch(userInfo(USER_INFO, '', {}));
          history.push({pathname: path, state: {prevPathName: '/'}});
        };
        
        // 请求前缀URL
        Axios.defaults.baseURL = BASE_URL;
        
        //添加一个请求拦截器
        Axios.interceptors.request.use(config => {
          const { token } = store.getState().userInfo;
          config.headers['token'] = token || '';
          return config;
        }, error => {
          return Promise.reject(error);
        });
        
        // 添加响应拦截器
        Axios.interceptors.response.use(response => {
          switch (response.data.code) {
            case '1005':
              toPath(response.data.msg,'/login', true);
              break;
            case '3013':
              // toPath(response.data.msg,'/register/activeOwnAccount', false);
              break;
            default: return response
          }
        }, err => {
          return Promise.resolve(err.response)
        });
        
        export default Axios;
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        )
}
