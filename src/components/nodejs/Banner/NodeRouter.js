import React from "react"


class NodeRouter extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>nodejs路由封装</h3>
                <p>
                    因为路由到处使用，所以要封装起来，方便调用。以下就是封装的路由，直接调用即可，简单了解下，后面会多用到
                    express和koa
                </p>
                <pre>
                    <code>
                        {`
        var url = require('url');
        /**
         * 对resquest进行封装
         *
         * @param {*} res
         */
        var packingRes = function (res) {
            var end = res.end;
            res.end = function (data, encoding, callback) {
                if (data && !(data instanceof Buffer) && (typeof data !== 'function')) {
                    if (typeof data === 'object') {
                        data = JSON.stringify(data);
                    } else if (typeof data === 'number') {
                        data = data.toString();
                    }
                }
                end.call(res, data, encoding, callback);
            };
        
            res.send = function (data, type) {
                res.writeHead(200,
                    {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'text/' + (type || 'plain') + '; charset=UTF-8'
                    }
                );
                res.end(data);
            };
        
            res.sendImg = function (data, type, timeout) {
                res.writeHead(200,
                    {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'image/' + (type || 'png'),
                        'Content-Length': Buffer.byteLength(data),
                        'Cache-Control': 'max-age=' + (timeout || 5184000)
                    }
                );
                res.end(data);
            };
            return res;
        };
        
        /**
         * 路由规则
         */
        var route = function () {
            var self = this;
            this._get = {};
            this._post = {};
            /**
             * 处理请求
             *
             * @param {*} req
             * @param {*} res
             */
            var handle = function (req, res) {
                packingRes(res);
                var Url = url.parse(req.url, true);
                var pathname = Url.pathname;
                if (!pathname.endsWith('/')) {
                    pathname = pathname + '/';
                }
                var query = Url.query;
                var method = req.method.toLowerCase();
                if (self['_' + method][pathname]) {
                    if (method == 'post') {
                        // 设置接收数据编码格式为 UTF-8
                        // req.setEncoding('utf-8');
                        var postData = '';
                        // 数据块接收中
                        req.on('data', function (postDataChunk) {
                            postData += postDataChunk;
                        });
                        // 数据接收完毕，执行回调函数
                        req.on('end', function () {
                            try {
                                postData = JSON.parse(postData);
                            } catch (e) { }
                            req.query = postData;
                            self['_' + method][pathname](req, res);
                        });
                    } else {
                        req.query = query;
                        self['_' + method][pathname](req, res);
                    }
                } else {
                    res.send(method + '请求路由地址不存在:' + pathname);
                }
            };
        
            /**
             * 注册get请求
             */
            handle.get = function (string, callback) {
                if (!string.startsWith('/')) {
                    string = '/' + string;
                }
                if (!string.endsWith('/')) {
                    string = string + '/';
                }
                self._get[string] = callback;
            };
        
            /**
             * 注册post请求
             */
            handle.post = function (string, callback) {
                if (!string.startsWith('/')) {
                    string = '/' + string;
                }
                if (!string.endsWith('/')) {
                    string = string + '/';
                }
                self._post[string] = callback;
            };
            return handle;
        };
        module.exports = new route();
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <b>在APP.js调用</b>
                <pre>
                    <code>
                        {`
        var route = require('./model/http-route.js');
        var app = route();
        var http = require('http');
        var server = http.createServer(app);
        
        app.get('/', function (req, res) {
            res.send('首页');
        });
        app.get('/login', function (req, res) {
            res.send('login');
        });
        
        app.get('/register', function (req, res) {
            res.send('register');
        });
        server.listen(8080, function () {
            console.log('listen ' + server.address().port);
        });                
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default NodeRouter;