
/*首页*/
import index from "../components/index/index.js";

/*react组件路由*/
import React from "./react";

/*nodejs组件路由*/
import Nodejs from "./node";

/*linux组件路由*/
import Linux from "./linux";



let routes = [
    {
      path: "/",
      component: index,
      exact:true
    },
  ];
routes.push(React)
routes.push(Nodejs)
routes.push(Linux)

export default routes;