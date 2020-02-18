import React from "react"


class Path extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>Path模块</h3>
                <p>
                主要是对文件地址的操作，方便查找文件
                </p>
                <pre>
                    <code>
                        {`
        /*
        path.dirname  				//显示文件路径
        path.basename				//返回路径的最后一个部分
        path.extname				//返回路径扩展名
        path.sep					//返回对应平台下的文件分隔符
        path.delimiter				//返回对应平台下的路径分隔符
        path.normalize				//规范化路径，处理冗余的"..",".","/" 字符
        path.join					//将多个路径结合在一起，并转化为规范路径
        path.resolve				//从源地址from到目的地址to的绝对路径
        path.isAbsolute			//检查(判读参数)是否绝对路劲
        path.relative				//获取从from到to的相对路径
                                    方法接受两个绝对路径的参数，该方法返回第二个路径相对于第一个路径的相对路径，
                                    如果path.relative方法的两个参数相同，则返回一个空字符串
        */                
        console.log(path.dirname('F:/nodejs/path.js'))//=>'F:/nodejs'
        console.log(path.basename('F:/2018-07~11project/path.js'))//=>'path.js'
        console.log(path.extname('F:/2018-07~11project/path.js'))//=>'.js'
        console.log(path.sep)//=>'/'
        console.log(path.delimiter)//=>':'
        console.log(path.normalize('F:////nodejs///path.js'))//=>'F:/nodejs/path.js'
        console.log(path.join('F:','2018-07~11project','path.js'))//=>'F:/nodejs/path.js'
        console.log(path.resolve('project','pathWell.js'))//=>'F:/2018-07~11project/node/project/pathWell.js'
        console.log(path.isAbsolute('F:/nodejs/path.js'))//=>'true'
        console.log(path.isAbsolute('../nodejs/path.js'))//=>'false'
        console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'))//=>'../../impl/bbb'
        console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/test/bbb'))//=>'../impl/bbb'
        console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/test/aaa/ss.js'))//=>'ss.js'
        console.log(path.relative('/data/orandea/test/aaa', 'bbb/ss.js'))//=>'../../../../2018-07~11project/node/bbb/ss.js'
    
                        `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default Path;