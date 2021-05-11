const router=require('koa-router')();


const tokens = {
    admin: { token: 'admin-token'}, editor: { token: 'editor-token' }
  }
  
const users = {
    'admin-token': {
      roles: ['admin'],  name: 'Super Admin',
      introduction: 'I am a super administrator',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    },
    'editor-token': {
      roles: ['editor'],  introduction: 'I am an editor', name: 'Normal Editor',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    }
}
  
router.post('/login',async (ctx)=>{
    const  name  = ctx.request.body.username
    const token = tokens[name]
    if (!token) {
        return ctx.body=({
            code: 60204,  message: 'Account and password are incorrect.'
        }) 
    }
    return ctx.body=({  code: 20000, data: token })
})

router.get('/info',async (ctx)=>{
    console.log(ctx.query)
    const { token } = ctx.query
    const info = users[token]
    if (!info) {
        return ctx.body=({
            code: 50008,  message: 'Login failed, unable to get user details.'
        })
    }
    return ctx.body=({  code: 20000,  data: info  })
})
router.get('/msg',async (ctx)=>{
    ctx.body=('hell')
})

router.post('/logout',async (ctx)=>{
    ctx.body=({
        code: 20000,
        data: 'success'
      })
})


module.exports =router.routes();