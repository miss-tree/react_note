import { lazy } from 'react';

let Nodejs={
    path: "/node",
    component:lazy(() => import("../components/nodejs/index")),
      routes:[
          {
            path: "/node/",
            component:lazy(() => import("../components/nodejs/Setup")),
            exact:true    
          },
          {
            path: "/node/Tool",
            component:lazy(() => import("../components/nodejs/Tool")),
            exact:true    
          },
          {
            path: "/node/Koa/KoaPro",
            component:lazy(() => import("../components/nodejs/Koa/KoaPro")),
            exact:true    
          },
          {
            path: "/node/Koa/KoaModule",
            component:lazy(() => import("../components/nodejs/Koa/KoaModule")),
            exact:true    
          },
          {
            path: "/node/Koa/Optimize",
            component:lazy(() => import("../components/nodejs/Koa/Optimize")),
            exact:true    
          },
          {
            path: "/node/Koa/Storage",
            component:lazy(() => import("../components/nodejs/Koa/Storage")),
            exact:true    
          },
          {
            path: "/node/Koa/Static",
            component:lazy(() => import("../components/nodejs/Koa/Static")),
            exact:true    
          },
          {
            path: "/node/Koa/Template",
            component:lazy(() => import("../components/nodejs/Koa/Template")),
            exact:true    
          },
          {
            path: "/node/Koa/Middleware",
            component:lazy(() => import("../components/nodejs/Koa/Middleware")),
            exact:true    
          },
          {
            path: "/node/Koa/KoaRouter",
            component:lazy(() => import("../components/nodejs/Koa/KoaRouter")),
            exact:true    
          },
          {
            path: "/node/Koa/Cognition",
            component:lazy(() => import("../components/nodejs/Koa/Cognition")),
            exact:true    
          },
          {
            path: "/node/Express/Manual",
            component:lazy(() => import("../components/nodejs/Express/Manual")),
            exact:true    
          },
          {
            path: "/node/Express/ExpPro",
            component:lazy(() => import("../components/nodejs/Express/ExpPro")),
            exact:true    
          },
          {
            path: "/node/Express/ExpRoutes",
            component:lazy(() => import("../components/nodejs/Express/ExpRoutes")),
            exact:true    
          },
          {
            path: "/node/Express/UpLoad",
            component:lazy(() => import("../components/nodejs/Express/UpLoad")),
            exact:true    
          },
          {
            path: "/node/Express/ExpMongodb",
            component:lazy(() => import("../components/nodejs/Express/ExpMongodb")),
            exact:true    
          },
          {
            path: "/node/Express/Session",
            component:lazy(() => import("../components/nodejs/Express/Session")),
            exact:true    
          },
          {
            path: "/node/Express/Cookie",
            component:lazy(() => import("../components/nodejs/Express/Cookie")),
            exact:true    
          },
          {
            path: "/node/Express/Middle",
            component:lazy(() => import("../components/nodejs/Express/Middle")),
            exact:true    
          },
          {
            path: "/node/Express",
            component:lazy(() => import("../components/nodejs/Express/Express")),
            exact:true    
          },
          {
            path: "/node/mongodb/LinkNode",
            component:lazy(() => import("../components/nodejs/mongodb/LinkNode")),
            exact:true    
          },
          {
            path: "/node/mongodb/Indexes",
            component:lazy(() => import("../components/nodejs/mongodb/Indexes")),
            exact:true    
          },
          {
            path: "/node/mongodb",
            component:lazy(() => import("../components/nodejs/mongodb/Mongodb")),
            exact:true    
          },
          {
            path: "/node/mongodb/use_software",
            component:lazy(() => import("../components/nodejs/mongodb/UseSoftware")),
            exact:true    
          },
          {
            path: "/node/Banner/http",
            component:lazy(() => import("../components/nodejs/Banner/Http")),
            exact:true    
          },
          {
            path: "/node/Banner/urlpath",
            component:lazy(() => import("../components/nodejs/Banner/Urlpath")),
            exact:true    
          },
          {
            path: "/node/Banner/fsmodule",
            component:lazy(() => import("../components/nodejs/Banner/Fsmodule")),
            exact:true    
          },
          {
            path: "/node/Banner/EventLoop",
            component:lazy(() => import("../components/nodejs/Banner/EventLoop")),
            exact:true    
          },
          {
            path: "/node/Banner/path",
            component:lazy(() => import("../components/nodejs/Banner/Path")),
            exact:true    
          },
          {
            path: "/node/Banner/querystring",
            component:lazy(() => import("../components/nodejs/Banner/Querystring")),
            exact:true    
          },
          {
            path: "/node/Banner/events",
            component:lazy(() => import("../components/nodejs/Banner/Events")),
            exact:true    
          },
          {
            path: "/node/Banner/node_router",
            component:lazy(() => import("../components/nodejs/Banner/NodeRouter")),
            exact:true    
          },
          {
            path: "/node/Banner/exp_router",
            component:lazy(() => import("../components/nodejs/Banner/ExpRouter")),
            exact:true    
          },
      ]
}



export default Nodejs;