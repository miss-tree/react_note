import { lazy } from 'react';
/*react*/
let ThreeRouter = {
  path: "/three",
  component: lazy(() => import("../components/three/index")),
  routes: [{
      path: "/three/",
      component: lazy(() => import("../components/three/know")),
      exact: true
    },
    {
      path: "/three/start/base",
      component: lazy(() => import("../components/three/start/base")),
      exact: true
    },
    {
      path: "/three/start/light",
      component: lazy(() => import("../components/three/start/light")),
      exact: true
    },
    {
      path: "/three/start/Geometry",
      component: lazy(() => import("../components/three/start/Geometry")),
      exact: true
    },
    {
      path: "/three/start/Camera",
      component: lazy(() => import("../components/three/start/Camera")),
      exact: true
    },
    {
      path: "/three/advance/module",
      component: lazy(() => import("../components/three/advance/module")),
      exact: true
    },
  ]
}

export default ThreeRouter;