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