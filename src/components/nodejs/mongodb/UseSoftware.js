import React from "react"


class UseSoftware extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:[
                {name:"show dbs",explain:"查看所有数据库列表"},
                {name:"use student",explain:"使用数据库、创建数据库"},
                {name:`db.student.insert({"name":"xiaoming"});`,explain:"插入数据就会创建集合"},
                {name:`db.表名.insert({"name":"zhangsan"});`,explain:"student 集合名称（表）"},
                {name:"show collections",explain:"显示当前的数据集合（mysql 中叫表）"},
                {name:"db.dropDatabase()",explain:"删除当前所在的数据库"},
                {name:"db.user.drop()",explain:"删除指定的集合 删除表"},
                {name:"db.userInfo.find()",explain:"查询所有记录"},
                {name:`db.userInfo.find({"age": 22})`,explain:"查询 age = 22 的记录"},
                {name:"db.userInfo.find({age: {$gt: 22}})",explain:"相当于：select * from userInfo where age >22"},
                {name:"db.userInfo.find({age: {$lt: 22}})",explain:"相当于：select * from userInfo where age <22"},
                {name:"db.userInfo.find({age: {$gte: 25}})",explain:"相当于：select * from userInfo where age >= 25"},
                {name:"db.userInfo.find({age: {$lte: 25}})",explain:"相当于：select * from userInfo where age <= 25"},
                {name:"db.userInfo.find({age: {$gte: 23, $lte: 26}})",explain:"查询 age >= 23 并且 age <= 26"},
                {name:"db.userInfo.find({name: /mongo/})",explain:"查询name中包含 mongo 的数据(模糊查询用于搜索)select * from userInfo where name like ‘%mongo%’"},
                {name:"db.userInfo.find({name: /^mongo/})",explain:"name 中以 mongo 开头的 select * from userInfo where name like ‘mongo%’"},
                {name:`db.userInfo.distinct("name");`,explain:"过滤掉 name 中的相同数据"},
                {name:"db.userInfo.find().sort({age: 1})",explain:"升序"},
                {name:"db.userInfo.find().sort({age: -1})",explain:"降序"},
                {name:"db.userInfo.find().limit(5)",explain:"相当于：selecttop 5 * from userInfo"},
                {name:"db.userInfo.find().skip(10)",explain:"相当于：select * from userInfo where id not in (selecttop 10 * from userInfo"},
                {name:"db.userInfo.find().limit(10).skip(5)",explain:"查询在 5-10 之间的数据"},
                {name:"db.userInfo.find({$or: [{age: 22}, {age: 25}]})",explain:"or 与 查询,相当于：select * from userInfo where age = 22 or age = 25"},
                {name:"db.userInfo.findOne()",explain:"相当于：selecttop 1 * from userInfo;db.userInfo.find().limit(1);"},
                {name:"db.userInfo.find({age: {$gte: 25}}).count()",explain:"查看所有数据库列表"},
                {name:"db.userInfo.find({age: {$gte: 25}}).count()",explain:"相当于：select count(*) from userInfo where age >= 20"},
            ],
            firemsg:[
                {name:`db.student.update({"name":"小明"},{$set:{"age":16}})`,explain:"查找名字叫做小明的，把年龄更改为 16 岁"},
                {name:`db.student.update({"score.shuxue":70},{$set:{"age":33}})`,explain:"查找数学成绩是 70，把年龄更改为 33 岁"},
                {name:`db.student.update({"sex":"男"},{$set:{"age":33}},{multi: true})`,explain:""},
                {name:`db.student.update({"name":"小明"},{"name":"大明","age":16})`,explain:"完整替换，不出现$set 关键字了"},
                {name:`db.users.update({name: 'Lisi'}, {$inc: {age: 50}}, false, true)`,explain:"相当于：update users set age = age + 50 where name = ‘Lisi’"},
                {name:`db.users.update({name: 'Lisi'}, {$inc: {age: 50}, $set: {name: 'hoho'}}, false, true)`,explain:"相当于：update users set age = age + 50, name = ‘hoho’ where name = ‘Lisi’"},
                {name:`db.collectionsNames.remove( { "borough": "Manhattan" })`,explain:"删除集合"},
                {name:`db.users.remove({age: 132}))`,explain:"删除表"},
                {name:`db.restaurants.remove( { "borough": "Queens" }, { justOne: true } )`,explain:"只删除一条"},
            ]
        }
    }
    render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>Mongodb使用命令</h3>
                <b>查询数据库</b>
                <div className='code'>
                    {
                        this.state.msg.map((el,key)=>{
                            return (
                                <div className="hang" key={key}>
                                    <b>{el.name}</b>
                                    <span>{el.explain} </span>
                                </div>
                            )
                        })
                    }
                </div>
                <b>其他用法</b>
                <div className="hang">
                    <div><code>{`db.userInfo.find({}, {name: 1, age: 1})`}</code>  <span>相当于：select name, age from userInfo</span></div>
                    <p>当然 name 也可以用 true 或 false,当用 ture 的情况下河 name:1 效果一样，如果用 false 就
                是排除 name，显示 name 以外的列信息。</p>
                </div>
                <b>修改数据库</b>
                <div className='code'>
                    {
                        this.state.firemsg.map((el,key)=>{
                            return (
                                <div className="hang" key={key}>
                                    <b>{el.name}</b>
                                    <span>{el.explain} </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>    
        </div>
        )
    }
}
export default UseSoftware;