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
          path: "/linux/Banner/handle",
          component:lazy(() => import("../components/linux/Banner/Handle")),
          exact:true    
        },
        {
          path: "/linux/Banner/catalog",
          component:lazy(() => import("../components/linux/Banner/Catalog")),
          exact:true    
        },
        {
          path: "/linux/Banner/config",
          component:lazy(() => import("../components/linux/Banner/Config")),
          exact:true    
        },
        {
          path: "/linux/Banner/viorder",
          component:lazy(() => import("../components/linux/Banner/Viorder")),
          exact:true    
        },
        {
          path: "/linux/Banner/pack",
          component:lazy(() => import("../components/linux/Banner/Pack")),
          exact:true    
        },
        {
          path: "/linux/power",
          component:lazy(() => import("../components/linux/Power")),
          exact:true    
        },
        {
          path: "/linux/Banner/software",
          component:lazy(() => import("../components/linux/Banner/Software")),
          exact:true    
        },
        {
          path: "/linux/setnode",
          component:lazy(() => import("../components/linux/Setnode")),
          exact:true    
        },
        {
          path: "/linux/Banner/process",
          component:lazy(() => import("../components/linux/Banner/Process")),
          exact:true    
        },
        {
          path: "/linux/Banner/service",
          component:lazy(() => import("../components/linux/Banner/Service")),
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