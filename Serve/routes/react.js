var router=require('koa-router')();

router.get("/", async (ctx)=>{
    console.log('hi2343')
     ctx.body = {
        "name":"晓明",
        "age":'27',
        "data":[
            {"cash":"222,736.55","date":"2019-10-31"},
            {"cash":"200,736.55","date":"2019-11-30"},
            {"cash":"255,736.55","date":"2019-09-31"},
            {"cash":"270,736.55","date":"2019-12-31"},
            {"cash":"700,736.55","date":"2020-01-31"},
            {"cash":"1180,736.55","date":"2020-02-29"},
        ]
    }
})

module.exports=router.routes();