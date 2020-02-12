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
            path: "/node/KoaPro",
            component:lazy(() => import("../components/nodejs/KoaPro")),
            exact:true    
          },
          {
            path: "/node/KoaModule",
            component:lazy(() => import("../components/nodejs/KoaModule")),
            exact:true    
          },
          {
            path: "/node/Optimize",
            component:lazy(() => import("../components/nodejs/Optimize")),
            exact:true    
          },
          {
            path: "/node/Storage",
            component:lazy(() => import("../components/nodejs/Storage")),
            exact:true    
          },
          {
            path: "/node/Static",
            component:lazy(() => import("../components/nodejs/Static")),
            exact:true    
          },
          {
            path: "/node/Template",
            component:lazy(() => import("../components/nodejs/Template")),
            exact:true    
          },
          {
            path: "/node/Middleware",
            component:lazy(() => import("../components/nodejs/Middleware")),
            exact:true    
          },
          {
            path: "/node/KoaRouter",
            component:lazy(() => import("../components/nodejs/KoaRouter")),
            exact:true    
          },
          {
            path: "/node/Cognition",
            component:lazy(() => import("../components/nodejs/Cognition")),
            exact:true    
          },
          {
            path: "/node/ExpPro",
            component:lazy(() => import("../components/nodejs/ExpPro")),
            exact:true    
          },
          {
            path: "/node/ExpRoutes",
            component:lazy(() => import("../components/nodejs/ExpRoutes")),
            exact:true    
          },
          {
            path: "/node/UpLoad",
            component:lazy(() => import("../components/nodejs/UpLoad")),
            exact:true    
          },
          {
            path: "/node/ExpMongodb",
            component:lazy(() => import("../components/nodejs/ExpMongodb")),
            exact:true    
          },
          {
            path: "/node/Session",
            component:lazy(() => import("../components/nodejs/Session")),
            exact:true    
          },
          {
            path: "/node/Cookie",
            component:lazy(() => import("../components/nodejs/Cookie")),
            exact:true    
          },
          {
            path: "/node/Middle",
            component:lazy(() => import("../components/nodejs/Middle")),
            exact:true    
          },
          {
            path: "/node/Express",
            component:lazy(() => import("../components/nodejs/Express")),
            exact:true    
          },
          {
            path: "/node/LinkNode",
            component:lazy(() => import("../components/nodejs/LinkNode")),
            exact:true    
          },
          {
            path: "/node/Indexes",
            component:lazy(() => import("../components/nodejs/Indexes")),
            exact:true    
          },
          {
            path: "/node/mongodb",
            component:lazy(() => import("../components/nodejs/Mongodb")),
            exact:true    
          },
          {
            path: "/node/use_software",
            component:lazy(() => import("../components/nodejs/UseSoftware")),
            exact:true    
          },
          {
            path: "/node/http",
            component:lazy(() => import("../components/nodejs/Http")),
            exact:true    
          },
          {
            path: "/node/urlpath",
            component:lazy(() => import("../components/nodejs/Urlpath")),
            exact:true    
          },
          {
            path: "/node/fsmodule",
            component:lazy(() => import("../components/nodejs/Fsmodule")),
            exact:true    
          },
          {
            path: "/node/path",
            component:lazy(() => import("../components/nodejs/Path")),
            exact:true    
          },
          {
            path: "/node/querystring",
            component:lazy(() => import("../components/nodejs/Querystring")),
            exact:true    
          },
          {
            path: "/node/events",
            component:lazy(() => import("../components/nodejs/Events")),
            exact:true    
          },
          {
            path: "/node/node_router",
            component:lazy(() => import("../components/nodejs/NodeRouter")),
            exact:true    
          },
          {
            path: "/node/exp_router",
            component:lazy(() => import("../components/nodejs/ExpRouter")),
            exact:true    
          },
      ]
}



export default Nodejs;