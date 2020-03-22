import { lazy } from 'react';

/*react组件路由*/
import ReactRouter from "./react";

/*nodejs组件路由*/
import Nodejs from "./node";

/*linux组件路由*/
import Linux from "./linux";



let routes = [
    {
      path: "/",
      component:lazy(() => import("../components/index/index.js")),
      exact:true
    },
  ];
routes.push(ReactRouter)
routes.push(Nodejs)
routes.push(Linux)

export default routes;