import { lazy } from 'react';
/*linux*/

let Linux={
    path: "/linux",
    component:lazy(() => import("../components/linux/index")),
    routes:[
        {
          path: "/linux/",
          component:lazy(() => import("../components/linux/SetUp")),
          exact:true    
        },
        {
          path: "/linux/Https",
          component:lazy(() => import("../components/linux/Https")),
          exact:true    
        },
        {
          path: "/linux/Tool",
          component:lazy(() => import("../components/linux/Tool")),
          exact:true    
        },
        {
          path: "/linux/handle",
          component:lazy(() => import("../components/linux/Handle")),
          exact:true    
        },
        {
          path: "/linux/catalog",
          component:lazy(() => import("../components/linux/Catalog")),
          exact:true    
        },
        {
          path: "/linux/config",
          component:lazy(() => import("../components/linux/Config")),
          exact:true    
        },
        {
          path: "/linux/viorder",
          component:lazy(() => import("../components/linux/Viorder")),
          exact:true    
        },
        {
          path: "/linux/pack",
          component:lazy(() => import("../components/linux/Pack")),
          exact:true    
        },
        {
          path: "/linux/power",
          component:lazy(() => import("../components/linux/Power")),
          exact:true    
        },
        {
          path: "/linux/software",
          component:lazy(() => import("../components/linux/Software")),
          exact:true    
        },
        {
          path: "/linux/setnode",
          component:lazy(() => import("../components/linux/Setnode")),
          exact:true    
        },
        {
          path: "/linux/process",
          component:lazy(() => import("../components/linux/Process")),
          exact:true    
        },
        {
          path: "/linux/service",
          component:lazy(() => import("../components/linux/Service")),
          exact:true    
        },
        {
          path: "/linux/mongodb",
          component:lazy(() => import("../components/linux/Mongodb")),
          exact:true    
        },
        {
          path: "/linux/mysql",
          component:lazy(() => import("../components/linux/Mysql")),
          exact:true    
        },
        {
          path: "/linux/nginx",
          component:lazy(() => import("../components/linux/Nginx")),
          exact:true    
        },
        {
          path: "/linux/redis",
          component:lazy(() => import("../components/linux/Redis")),
          exact:true    
        },
    ]
  }

export default Linux;  