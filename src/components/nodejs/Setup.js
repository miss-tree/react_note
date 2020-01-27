import React from "react"


class Setup extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>nodejs安装</h3>
                <div>官网：https://nodejs.org/en/</div>
                <div>下载后直接按步骤安装即可</div>
                <p>Node.js 是一个 Javascript 运行环境(runtime)。它让 JavaScript 可以开发后端程序，实现几乎其他后端
                语言实现的所有功能，可以与 PHP、JSP、Python、Ruby 等后端语言平起平坐。
                Nodejs 是基于 V8 引擎，V8 是 Google 发布的开源 JavaScript 引擎，本身就是用于 Chrome 浏览器
                的 JS 解释部分，但是 Ryan Dahl 这哥们，鬼才般的，把这个 V8 搬到了服务器上，用于做服务器的软件。</p>
            </div>
            <div>
                <h3>NodeJs使用nvm安装</h3>
                <span className="red">安装nvm前，记得先把本地的nodejs卸载了，和删除相关环境变量，还有坑爹的.npmrc</span>
                <p>在https://github.com/coreybutler/nvm-windows/releases
                    下载nvm-setup.zip文件，解压点击安装,安装地址尽量选择磁盘下的目录（c/nvm）,
                    自定义安装的nodejs也是同级(c/nodejs)
                    <span className="spanCode">安装nvm主要是为了管理使用node版本</span></p>
                <div>以c盘为例,打开在c/nvm/下的settings.txt文件夹，复制下面的文字</div>
                <pre>
                    <code>
                        {`
        root: C:\ nvm
        path: C:\ nodejs
        node_mirror: http://npm.taobao.org/mirrors/node/ 
        npm_mirror: https://npm.taobao.org/mirrors/npm/
                        `}
                    </code>
                </pre>
                <div>修改好后，在开始菜单栏下运行（win+r）以下操作</div>
                <div className="hang">
                    <div> nvm install 8.9.0 <span>安装8.9.0版本的node</span> </div>
                    <div> nvm use 8.9.0 <span>使用8.9.0版本的node</span> </div>
                    <div> npm -v <span>查看npm版本</span> </div>
                    <div> node -v <span>查看node版本</span> </div>
                </div>
                <span className="red">注意，若不成功，重新卸载nvm，然后再重新安装</span>
            </div>
            <div>
                <h3>NodeJs 的优势</h3>
                <ul>
                    <li>1.NodeJs 语法完全是 js 语法，只要你懂 JS 基础就可以学会 Nodejs 后端开发。</li>
                    <li>
                        2.NodeJs 超强的高并发能力。
                        <p>Node.js 的首要目标是提供一种简单的、用于创建高性能服务器及可在该服务器中运行的各种应用程
                        序的开发工具。在 Java、PHP 或者.net 等服务器端语言
                        中，会为每一个客户端连接创建一个新的线程。而每个线程需要耗费大约 2MB 内存。也就是说
                        一个 8GB 内存的服务器可以同时连接的最大用户数为 4000 个左右。
                        Node.js 不为每个客户连接创建一个新的线程，而仅仅使用一个线程。当有用户连接了，就触发一个
                        内部事件，通过非阻塞 I/O、事件驱动机制，让 Node.js 程序宏观上也是并行的。使用 Node.js，一个 8GB
                        内存的服务器，可以同时处理超过 4 万用户的连接。</p>
                    </li>
                    <li>
                        3.实现高性能服务器
                        <p>Node.js 是一个用于开发各种 Web 服务器的开发工具。在 Node.js 服务器中，运行的是高性能 V8 
                        JavaScript 脚本语言，该语言是一种可以运行在服务器端的 JavaScript 脚本语言。
                         V8 JavaScript 引擎所解析并执行的脚本语言。V8 
                        JavaScript 引擎是由 Google 公司使用 C++语言开发的一种高性能 JavaScript 引擎，该引擎并不局限于在浏览
                        器中运行。Node.js 将其转用在了服务器中，并且为其提供了许多附加的具有各种不同用途的 API。例如，
                        在一个服务器中，经常需要处理各种二进制数据。在 JavaScript 脚本语言中，只具有非常有限的对二进制数
                        据的处理能力，而 Node.js 所提供的 Buffer 类则提供了丰富的对二进制数据的处理能力。
                        另外，在 V8 JavaScript 引擎内部使用一种全新的编译技术。这意味着开发者编写的高端的 JavaScript 脚本代
                        码与开发者编写的低端的 C语言具有非常相近的执行效率，这也是 Node.js 服务器可以提供的一个重要特性。</p>
                    </li>
                    <li>
                        4.开发周期短、开发成本低、学习成本低。
                    </li>
                </ul>
            </div>
            <div>
                <h3>NodeJs 适合做什么？</h3>
                <ul>
                    <li>前后端编程语言环境统一。</li>
                    <li>Node 带来的高性能 I/0 用于实时应用。</li>
                    <li>
                        并行 I/0 使得使用者可以更高效地利用分布式环境。
                    </li>
                    <li>并行 I/O •有效利用稳定接口提升 Web 渲染能力。</li>
                    <li>云计算平台提供 Node 支持。 </li>
                    <li>游戏开发领域。</li>
                    <li>工具类应用。</li>
                </ul>
                <div className="linuxImg">
                    <img src={require('../../assets/images/node/NodeJs.png')} alt=''/>
                </div>
            </div>

        </div>
        )
    }
}
export default Setup