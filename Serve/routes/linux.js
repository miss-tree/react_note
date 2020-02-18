const router =require('koa-router')();

router.get('/',(ctx)=>{
        ctx.body='你现在进入的是linux笔记页面'
})



module.exports=router.routes()