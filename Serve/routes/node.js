var router=require('koa-router')();

router.get("/", async (ctx)=>{
    
     ctx.body = [{titel:'你进入的是node笔记页面',
            img:ctx.state.IP+'/images/node/NodeJs.png'
    }]
})
router.get("/tool", async (ctx)=>{
    console.log(ctx.state.IP)
     ctx.body = [
         {'name':"安装supervisor",explain:'npm -g install supervisor'},
         {'name':"安装supervisor",explain:'npm -g install supervisor',link:ctx.state.IP+'/images/app.jpg'},
        ]
})

module.exports=router.routes();