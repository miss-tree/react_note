import { lazy } from 'react';
/*react*/
let ReactRouter={
    path: "/react",
    component:lazy(() => import("../components/react/index")),
      routes:[
          {
            path: "/react/",
            component:lazy(() => import("../components/react/base")),
            exact:true    
          },
          {
            path: "/react/structure",
            component:lazy(() => import("../components/react/Structure")),
            exact:true    
          },
          {
            path: "/react/optimize/webpack",
            component:lazy(() => import("../components/react/Webpack")),
            exact:true    
          },
          {
            path: "/react/Redux/ReactRedux",
            component:lazy(() => import("../components/react/views/ReactRedux")),
            exact:true    
          },
          {
            path: "/react/Redux/Middleware",
            component:lazy(() => import("../components/react/views/Middleware")),
            exact:true    
          },
          {
            path: "/react/Redux/Error",
            component:lazy(() => import("../components/react/views/Error")),
            exact:true    
          },
          {
            path: "/react/Redux/ActionTypes",
            component:lazy(() => import("../components/react/views/ActionTypes")),
            exact:true    
          },
          {
            path: "/react/Redux/Action",
            component:lazy(() => import("../components/react/views/Action")),
            exact:true    
          },
          {
            path: "/react/Redux",
            component:lazy(() => import("../components/react/Redux")),
            exact:true    
          },
          {
            path: "/react/State",
            component:lazy(() => import("../components/react/State")),
            exact:true    
          },
          {
            path: "/react/Module",
            component:lazy(() => import("../components/react/Module")),
            exact:true    
          },
          {
            path: "/react/bind",
            component:lazy(() => import("../components/react/Bind")),
            exact:true    
          },
          {
            path: "/react/mapdata",
            component:lazy(() => import("../components/react/MapData")),
            exact:true    
          },
          {
            path: "/react/events",
            component:lazy(() => import("../components/react/Events")),
            exact:true    
          },
          {
            path: "/react/restrain",
            component:lazy(() => import("../components/react/Restrain")),
            exact:true    
          },
          {
            path: "/react/passval",
            component:lazy(() => import("../components/react/Passval")),
            exact:true    
          },
          {
            path: "/react/lifecycle",
            component:lazy(() => import("../components/react/Lifecycle")),
            exact:true    
          },
          {
            path: "/react/config",
            component:lazy(() => import("../components/react/Config")),
            exact:true    
          },
          {
            path: "/react/trends",
            component:lazy(() => import("../components/react/Trends")),
            exact:true    
          },
          {
            path: "/react/nesting",
            component:lazy(() => import("../components/react/Nesting")),
            exact:true    
          },
      ]
}



export default ReactRouter;