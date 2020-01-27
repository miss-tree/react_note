import React from "react"

class FsOther extends React.Component{
    render(){
        return(
        <div>
            <div>
            <b>fs.stat  检测是文件还是目录</b>
                <pre>
                    <code>
                    {`
        fs.stat('html',function(err,stats){
            if(err){
              return false;
            }
            console.log('文件：'+stats.isFile());//true
            console.log('目录：'+stats.isDirectory());//false
        })
                    `}
                    </code>
                </pre>
                <b>fs.mkdir  创建目录</b>
                <pre>
                    <code>
                    {`
        接收参数：
        path            将创建的目录路径
        mode          目录权限（读写权限），默认0777
        callback      回调，传递异常参数err

        fs.mkdir('css',function(err){
            if(err){
             return false;
            }
           console.log('创建目录成功');
        })
                    `}
                    </code>
                </pre>
                <b>fs.writeFile  创建写入文件</b>
                <pre>
                    <code>
                    {`
        filename      (String)            文件名称
        data        (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。
        options        (Object)           option数组对象，包含：
         · encoding   (string)            可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
         · mode         (Number)        文件读写权限，默认值 438
         · flag            (String)            默认值 ‘w'
        callback {Function}  回调，传递一个异常参数err。

        fs.writeFile('t.txt','你好nodejs 覆盖','utf8',function(err){
            if(err){
                return false;
            }
           console.log('写入成功');
        })
                    `}
                    </code>
                </pre>
                <b>fs.appendFile 追加文件</b>
                <pre>
                    <code>
                    {`
        fs.appendFile('t1.txt','这是写入的内容\n',function(err){
            if(err){
             return false;
            }
           console.log('写入成功');//没有文件就创建，有酒添加内容
        })
                    `}
                    </code>
                </pre>
                <b>fs.readdir读取目录</b>
                <pre>
                    <code>
                    {`
        fs.readdir('html',function(err,data){
            if(err){
             return false;
           }
           console.log(data);//把目录下面的文件和文件夹都获取到
         })
                    `}
                    </code>
                </pre>
                <b>fs.rename 重命名</b>
                <pre>
                    <code>
                    {`
        fs.rename('html/index.html','html/news.html',function(err){
            if(err){
             return false;
           }
           console.log('修改名字成功');//1.改名  2.剪切文件
         })
                    `}
                    </code>
                </pre>
                <b>fs.rmdir  删除目录</b>
                <pre>
                    <code>
                    {`
        fs.rmdir('index.txt',function(err){
            if(err){
             console.log(err);// ENOENT: no such file or directory      rmdir 这个方法只能删除目录
             return false;
           }
          console.log('删除目录成功');
       })
                    `}
                    </code>
                </pre>
                <b>fs.unlink删除文件</b>
                <pre>
                    <code>
                    {`
        fs.unlink('index.txt',function(err){
            if(err){
               return false;
            }
            console.log('删除文件成功');
        })
                    `}
                    </code>
                </pre>
            </div>
        </div>
        )
    }
}
export default FsOther;