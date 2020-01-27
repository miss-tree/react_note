import React ,{Component} from "react";

class base extends Component{
    render(){
        return(
            <div>
                <div >
                    <h3 className='Title_h3'>React 简单安装</h3>
                    <div>安装cnpm用cnpm替代npm</div>
                    <div>npm install -g cnpm --registry=https://registry.npm.taobao.org</div>
                    <h3>用yarn替代npm</h3>
                    <div>参考官方文档https://yarn.bootcss.com/</div>
                    <div>cnpm install -g yarn  或者 npm install -g yarn</div>
                </div>
                <div >
                    <h3>安装脚手架工具</h3>
                    <div>npm install -g create-react-app   /  cnpm install -g create-react-app</div>
                    <div>创建项目：</div>
                    <div>create-react-app reactdemo</div>
                    <div>npm start             yarn start运行项目</div>
                    <div>npm run build         yarn build 生成项目</div>

                    <h3>方法二（新-未来推荐）</h3>
                    <div>安装脚手架工具后</div>
                    <div>create-react-app reactdemo</div>
                    <div>npx create-react-app reactdemo</div>
                    <p>npx create-react-app reactdemo这条命令会临时安装 create-react-app 包，命令完成后create-react-app 会删掉，不会出现在 global 中。下次再执行，还是会重新临时安装。
	npx 会帮你执行依赖包里的二进制文件。</p>
                </div>
            </div>
        );
    }
}

export default base;