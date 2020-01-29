import React from "react"

class Indexes extends React.Component{

    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>Mongodb索引</h3>
                <p>
                    在数据表中创建索引是为了在搜索过程中，通过索引(即序列号这样)快速在大量数据中找到目标
                    减少数据库查询数据的时间
                </p>
                <div className="hang">
                    <div> <code>{`db.user.ensureIndex({"username":1})`}</code><span>创建索引</span></div>
                    <div> <code>{`db.collection.createIndex({ name: -1 })`}</code><span>04版本创建索引</span></div>
                    <div> <code>{`db.user.getIndexes()`}</code><span>获取当前集合的索引</span></div>
                    <div> <code>{`db.user.dropIndex({"username":1})`}</code><span>删除索引</span></div>
                </div>
                <div><span className="red">注意</span>数字 1 表示 username 键的索引按升序存储，-1 表示 age 键的索引按照降序方式存储</div>
                <div className="lineCode">
                    <code>{`db.user.ensureIndex({"username":1, "age":-1})`}</code>
                </div>
                <p>该索引被创建后，基于 username 和 age 的查询将会用到该索引，或者是基于 username
的查询也会用到该索引，但是只是基于 age 的查询将不会用到该复合索引。因此可以说，
如果想用到复合索引，必须在查询条件中包含复合索引中的前 N 个索引列。然而如果查询
条件中的键值顺序和复合索引中的创建顺序不一致的话，MongoDB 可以智能的帮助我们调
整该顺序，以便使复合索引可以为查询所用</p>
                <div className="lineCode">
                    <code>{`db.user.find({"age": 30, "username": "stephen"})`}</code>
                </div>
                <p>创建唯一索引后，在添加userid时不能与之前的key值相同，否则会报错，这就用到很多地方，比如创建用户名不能相同</p>
                <div className="lineCode">
                    <code>{`db.user.ensureIndex({"userid":1},{"unique":true})`}  <span>创建唯一索引</span></code>
                </div>
            </div>
            <div>
                <h3>Mongodb参数</h3>
                <div className="linuxImg">
                    <img src={require('../../assets/images/node/mongodb01.png')} alt=''/>
                </div>
            </div>
            <div>
                <h3>explain executionStats 查询具体的执行时间</h3>
                <div className="lineCode">
                    <code>{`db.tablename.find().explain( "executionStats" )`}</code>
                </div>
                <div>关注输出的如下数值：explain.executionStats.executionTimeMillis</div>
                <div className="linuxImg">
                    <img src={require('../../assets/images/node/mongodb02.png')} alt=''/>
                </div>
            </div>
        </div>
        )
    }
}
export default Indexes;