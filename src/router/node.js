/*react*/
import node from "../components/nodejs/index";
import Setup from "../components/nodejs/Setup";
import Http from "../components/nodejs/Http";
import Urlpath from "../components/nodejs/Urlpath";
import Fsmodule from "../components/nodejs/Fsmodule";
import Tool from "../components/nodejs/Tool";
import Path from "../components/nodejs/Path";
import Querystring from "../components/nodejs/Querystring";
import Events from "../components/nodejs/Events";
import NodeRouter from "../components/nodejs/NodeRouter";
import ExpRouter from "../components/nodejs/ExpRouter";
import Mongodb from "../components/nodejs/Mongodb";
import UseSoftware from "../components/nodejs/UseSoftware";
import Indexes from "../components/nodejs/Indexes";
import LinkNode from "../components/nodejs/LinkNode";
import Express from "../components/nodejs/Express";
import Middle from "../components/nodejs/Middle";
import Cookie from "../components/nodejs/Cookie";
import Session from "../components/nodejs/Session";
import ExpMongodb from "../components/nodejs/ExpMongodb";
import UpLoad from "../components/nodejs/UpLoad";
import ExpRoutes from "../components/nodejs/ExpRoutes";
import ExpPro from "../components/nodejs/ExpPro";
import Cognition from "../components/nodejs/Cognition";
import KoaRouter from "../components/nodejs/KoaRouter";
import Middleware from "../components/nodejs/Middleware";
import Template from "../components/nodejs/Template";
import Static from "../components/nodejs/Static";
import Storage from "../components/nodejs/Storage";
import Optimize from "../components/nodejs/Optimize";
import KoaModule from "../components/nodejs/KoaModule";
import KoaPro from "../components/nodejs/KoaPro";



let Nodejs={
    path: "/node",
      component: node,
      routes:[
          {
            path: "/node/",
            component: Setup,
            exact:true    
          },
          {
            path: "/node/Tool",
            component: Tool,
            exact:true    
          },
          {
            path: "/node/KoaPro",
            component: KoaPro,
            exact:true    
          },
          {
            path: "/node/KoaModule",
            component: KoaModule,
            exact:true    
          },
          {
            path: "/node/Optimize",
            component: Optimize,
            exact:true    
          },
          {
            path: "/node/Storage",
            component: Storage,
            exact:true    
          },
          {
            path: "/node/Static",
            component: Static,
            exact:true    
          },
          {
            path: "/node/Template",
            component: Template,
            exact:true    
          },
          {
            path: "/node/Middleware",
            component: Middleware,
            exact:true    
          },
          {
            path: "/node/KoaRouter",
            component: KoaRouter,
            exact:true    
          },
          {
            path: "/node/Cognition",
            component: Cognition,
            exact:true    
          },
          {
            path: "/node/ExpPro",
            component: ExpPro,
            exact:true    
          },
          {
            path: "/node/ExpRoutes",
            component: ExpRoutes,
            exact:true    
          },
          {
            path: "/node/UpLoad",
            component: UpLoad,
            exact:true    
          },
          {
            path: "/node/ExpMongodb",
            component: ExpMongodb,
            exact:true    
          },
          {
            path: "/node/Session",
            component: Session,
            exact:true    
          },
          {
            path: "/node/Cookie",
            component: Cookie,
            exact:true    
          },
          {
            path: "/node/Middle",
            component: Middle,
            exact:true    
          },
          {
            path: "/node/Express",
            component: Express,
            exact:true    
          },
          {
            path: "/node/LinkNode",
            component: LinkNode,
            exact:true    
          },
          {
            path: "/node/Indexes",
            component: Indexes,
            exact:true    
          },
          {
            path: "/node/mongodb",
            component: Mongodb,
            exact:true    
          },
          {
            path: "/node/use_software",
            component: UseSoftware,
            exact:true    
          },
          {
            path: "/node/http",
            component: Http,
            exact:true    
          },
          {
            path: "/node/urlpath",
            component: Urlpath,
            exact:true    
          },
          {
            path: "/node/fsmodule",
            component: Fsmodule,
            exact:true    
          },
          {
            path: "/node/path",
            component: Path,
            exact:true    
          },
          {
            path: "/node/querystring",
            component: Querystring,
            exact:true    
          },
          {
            path: "/node/events",
            component: Events,
            exact:true    
          },
          {
            path: "/node/node_router",
            component: NodeRouter,
            exact:true    
          },
          {
            path: "/node/exp_router",
            component: ExpRouter,
            exact:true    
          },
      ]
}



export default Nodejs;