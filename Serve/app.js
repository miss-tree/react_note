const koa=require('koa'); 
const router =require('koa-router')()
const static = require('koa-static')
// const bodyParser = require('koa-bodyparser');
const app=new koa(); 


//配置 静态资源的中间件
app.use(static(__dirname + '/static'));


// 引入路由
const react = require('./routes/react')
const node = require('./routes/node')
const linux = require('./routes/linux')

//配置跨域中间件 （可以先当做路由） 
app.use( async (ctx,next)=>{ 
    ctx.set('Access-Control-Allow-Origin', '*');//设置跨域
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    const IP="http://47.92.116.232:5000";//配置全局变量
    ctx.state = Object.assign(ctx.state, { IP });
    console.log(__dirname)
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200; 
    } else {
        await next();
    }
})


// 匹配路由
router.use('/react',react);
router.use('/node',node);
router.use('/linux',linux);


//启动路由
app
.use(router.routes())   /*启动路由*/
.use(router.allowedMethods());   /*可以配置也可以不配置,建议配置，*/



//监听端口 
app.listen(5000,()=>{
    console.log('服务开启：5000端口')
});