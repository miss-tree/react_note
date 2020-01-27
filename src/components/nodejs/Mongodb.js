import React from "react"


class Mongodb extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>NoSql 介绍</h3>
                <p>
                    NoSQL 就是为了解决大规模数据与多样数据种类等问
                题，尤其是其中大数据的相关问题。
                NoSql 和传统数据库简单对比,非结构型数据库。没有行、列的概念。用 JSON 来存储数据。
                </p>
                <b>NoSQL 数据库适用情况</b>
                <ul>
                    <li>1、数据模型比较简单；</li>
                    <li>2、需要灵活性更强的 IT 系统；</li>
                    <li>3、对数据库性能要求较高；</li>
                    <li>4、不需要高度的数据一致性；</li>
                    <li>5、对于给定 key，比较容易映射复杂值的环境。</li>
                </ul>
                <b>建议使用 NoSql情况</b>
                <ul>
                    <li>1、对数据库高并发读写的需求</li>
                    <li>2、对海量数据的高效率存储和访问的需求</li>
                    <li>3、对数据库的高可扩展性和高可用性的需求</li>
                </ul>
            </div>
            <div>
                <h3>MongoDb 介绍</h3>
                <p>MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像
                关系数据库的。他支持的数据结构非常松散，是类似 json 的 bson 格式，因此可以存储比较复杂的数据类
                型。Mongo 最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以
                实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。它的特点是高性能、易部署、
                易使用，存储数据非常方便。
                </p>
                <h3>MongoDB安装</h3>
                <div>官网：https://www.mongodb.com/</div>
                <div>手册：https://docs.mongodb.org/manual/</div>
                <p>
                    默认安装完成后配置环境变量 C:\Program Files\MongoDB\Server\3.0\bin 加入到系统的
                path 环境变量中。win+R 打开 cmd 输入 ：mongo命令看看是否成功
                </p>
                <h3>使用 MongoDb</h3>
                <p>新建一个存放数据库的文件夹，注意：不能有中文和空格，建议不要放在 C 盘</p>
                <div className="hang">
                    <div>mongod --dbpath E:\mongodb <span>在E盘mongodb文件夹开启数据库服务</span></div>
                </div>
                <p>
                    E:\mongodb文件，对应一个个数据库。U 盘可以拷走。
                注意：一定要保持，开机这个 CMD 不能动了，不能关，不能 ctrl+c。 一旦这个 cmd 有问题了，数据
                库就自动关闭了。
                </p>
                <h3>客户端连接服务</h3>
                <div className="hang">
                    <div> mongo <span>本地连接数据库</span></div>
                    <div> mongo  47.248.36.45：27017 <span>客户端连接数据库(ip 地址:端口号)</span></div>
                </div>
            </div>
        </div>
        )
    }
}
export default Mongodb;