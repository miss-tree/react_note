import { lazy } from 'react';

/*react组件路由*/
import ReactRouter from "./react";

/*react组件路由*/
import ThreeRouter from "./three";

/*nodejs组件路由*/
import Nodejs from "./node";

/*linux组件路由*/
import Linux from "./linux";



let routes = [
    {
      path: "/",
      component:lazy(() => import("../components/react/home.js")),
      redirect:'/react/',
      exact:true
    },
    ReactRouter,
    ThreeRouter,
    Nodejs,
    Linux,
  ];
// routes.push(ReactRouter)
// routes.push(Nodejs)
// routes.push(Linux)

export default routes;