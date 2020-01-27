/*linux*/
import linux from "../components/linux/index";
import SetUp from "../components/linux/SetUp";
import Tool from "../components/linux/Tool";
import Handle from "../components/linux/Handle";
import Catalog from "../components/linux/Catalog";
import Config from "../components/linux/Config";
import Viorder from "../components/linux/Viorder";
import Pack from "../components/linux/Pack";
import Power from "../components/linux/Power";
import Software from "../components/linux/Software";
import Setnode from "../components/linux/Setnode";
import Process from "../components/linux/Process";
import Service from "../components/linux/Service";
import Mongodb from "../components/linux/Mongodb";
import Mysql from "../components/linux/Mysql";
import Nginx from "../components/linux/Nginx";
import Redis from "../components/linux/Redis";


let Linux={
    path: "/linux",
    component: linux,
    routes:[
        {
          path: "/linux/",
          component: SetUp,
          exact:true    
        },
        {
          path: "/linux/Tool",
          component: Tool,
          exact:true    
        },
        {
          path: "/linux/handle",
          component: Handle,
          exact:true    
        },
        {
          path: "/linux/catalog",
          component: Catalog,
          exact:true    
        },
        {
          path: "/linux/config",
          component: Config,
          exact:true    
        },
        {
          path: "/linux/viorder",
          component: Viorder,
          exact:true    
        },
        {
          path: "/linux/pack",
          component: Pack,
          exact:true    
        },
        {
          path: "/linux/power",
          component: Power,
          exact:true    
        },
        {
          path: "/linux/software",
          component: Software,
          exact:true    
        },
        {
          path: "/linux/setnode",
          component: Setnode,
          exact:true    
        },
        {
          path: "/linux/process",
          component: Process,
          exact:true    
        },
        {
          path: "/linux/service",
          component: Service,
          exact:true    
        },
        {
          path: "/linux/mongodb",
          component: Mongodb,
          exact:true    
        },
        {
          path: "/linux/mysql",
          component: Mysql,
          exact:true    
        },
        {
          path: "/linux/nginx",
          component: Nginx,
          exact:true    
        },
        {
          path: "/linux/redis",
          component: Redis,
          exact:true    
        },
    ]
  }

export default Linux;  