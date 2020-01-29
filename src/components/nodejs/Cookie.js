import React from "react"

class Cookie extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>Cookie</h3>
                <p>
                Cookie 是一个简单到爆的想法：当访问一个页面的时候，服务器在下行 HTTP 报文中，
                命令浏览器存储一个字符串; 浏览器再访问同一个域的时候，将把这个字符串携带到上行
                HTTP 请求中。第一次访问一个服务器，不可能携带 cookie。 必须是服务器得到这次请求，
                在下行响应报头中，携带 cookie 信息，此后每一次浏览器往这个服务器发出的请求，都会
                携带这个 cookie
                </p>
                <ul>
                    <li>cookie 保存在浏览器本地</li>
                    <li>正常设置的 cookie 是不加密的，用户可以自由看到</li>
                    <li>用户可以删除 cookie，或者禁用它</li>
                    <li>cookie 可以被篡改</li>
                    <li>cookie 可以用于攻击</li>
                    <li>cookie 存储量很小。未来实际上要被 localStorage 替代，但是后者 IE9 兼容。</li>
                </ul>
                <h3>属性说明</h3>
                <ul>
                    <li>domain: 域名</li>
                    <li>name=value：键值对，可以设置要保存的 Key/Value，注意这里的 name 不能和其他属性项的名字一样</li>
                    <li>Expires： 过期时间（秒），在设置的某个时间点后该 Cookie 就会失效，如 expires=Wednesday,09-Nov-99 23:12:40 GMT</li>
                    <li>maxAge： 最大失效时间（毫秒），设置在多少后失效</li>
                    <li>secure： 当 secure 值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效</li>
                    <li>Path： 表示 cookie 影响到的路，如 path=/。如果路径不能匹配时，浏览器则不发送这个 Cookie</li>
                    <li>httpOnly：是微软对 COOKIE 做的扩展。如果在 COOKIE 中设置了“httpOnly”属性，则通过程序（JS
                脚本、applet 等）将无法读取到 COOKIE 信息，只能在nodejs服务端操作,防止 XSS 攻击产生</li>
                    <li>singed：表示是否签名 cookie, 设为 true 会对这个 cookie 签名，这样就需要用
                    res.signedCookies 而不是 res.cookies 访问它。被篡改的签名 cookie 会被服务器拒绝，并且 cookie 
                    值会重置为它的原始值</li>
                </ul>
                <pre>
                    <code>
                        {`
        设置 cookie
        res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
        res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });//
        res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });

        获取 cookie
        req.cookies.name

        删除 cookie
        res.cookie('rememberme', '', { expires: new Date(0)});
        res.cookie('username','zhangsan',{domain:'.ccc.com',maxAge:0,httpOnly:true});
                        `}
                    </code>
                </pre>
            </div>
            <div>
                <h3>加密 Cookie</h3>
                <pre>
                    <code>
                        {`
        配置中间件的时候需要传参
        var cookieParser = require('cookie-parser');
        app.use(cookieParser('123456'));

        设置 cookie 的时候配置 signed 属性
        res.cookie('userinfo','hahaha',{domain:'.ccc.com',maxAge:900000,httpOnly:true,signed:true});

        signedCookies 调用设置的 cookie
        console.log(req.signedCookies);
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default Cookie;