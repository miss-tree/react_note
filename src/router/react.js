import { lazy } from 'react';
/*react*/
let ReactRouter = {
  path: "/react",
  component: lazy(() => import("../components/react/index")),
  routes: [{
      path: "/react/",
      component: lazy(() => import("../components/react/home.js")),
      exact: true
    },
    {
      path: "/react/set",
      component: lazy(() => import("../components/react/base")),
      exact: true
    },
    {
      path: "/react/Loading",
      component: lazy(() => import("../components/index/Loading")),
      exact: true
    },
    {
      path: "/react/structure",
      component: lazy(() => import("../components/react/Structure")),
      exact: true
    },
    {
      path: "/react/Antd/Axios",
      component: lazy(() => import("../components/react/Antd/Axios")),
      exact: true
    },
    {
      path: "/react/ReactRouter/solder",
      component: lazy(() => import("../components/react/ReactRouter/guard")),
      exact: true
    },
    {
      path: "/react/Knowledge/Css",
      component: lazy(() => import("../components/react/Knowledge/Css")),
      exact: true
    },
    {
      path: "/react/Knowledge/Pack",
      component: lazy(() => import("../components/react/Knowledge/Pack")),
      exact: true
    },
    {
      path: "/react/Knowledge/CrossDomain",
      component: lazy(() => import("../components/react/Knowledge/CrossDomain")),
      exact: true
    },
    {
      path: "/react/Knowledge/Responsive",
      component: lazy(() => import("../components/react/Knowledge/Responsive")),
      exact: true
    },
    {
      path: "/react/Knowledge/PureComponent",
      component: lazy(() => import("../components/react/Knowledge/PureComponent")),
      exact: true
    },
    {
      path: "/react/Knowledge/useMemo",
      component: lazy(() => import("../components/react/Knowledge/useMemo")),
      exact: true
    },
    {
      path: "/react/Knowledge/useCallback",
      component: lazy(() => import("../components/react/Knowledge/useCallback")),
      exact: true
    },
    {
      path: "/react/Knowledge/useReducer",
      component: lazy(() => import("../components/react/Knowledge/useReducer")),
      exact: true
    },
    {
      path: "/react/Knowledge/useContext",
      component: lazy(() => import("../components/react/Knowledge/useContext")),
      exact: true
    },
    {
      path: "/react/plugins/history",
      component: lazy(() => import("../components/react/plugins/history")),
      exact: true
    },
    {
      path: "/react/plugins/crossEnv",
      component: lazy(() => import("../components/react/plugins/crossEnv")),
      exact: true
    },
    {
      path: "/react/Banner/Inherit",
      component: lazy(() => import("../components/react/Banner/Inherit")),
      exact: true
    },
    {
      path: "/react/Banner/slotComponent",
      component: lazy(() => import("../components/react/Banner/slotComponent")),
      exact: true
    },
    {
      path: "/react/Banner/HighComponent",
      component: lazy(() => import("../components/react/Banner/HighComponent")),
      exact: true
    },
    {
      path: "/react/Banner/Hook",
      component: lazy(() => import("../components/react/Banner/Hook")),
      exact: true
    },
    {
      path: "/react/Banner/Context",
      component: lazy(() => import("../components/react/Banner/Context")),
      exact: true
    },
    {
      path: "/react/optimize/Overrides",
      component: lazy(() => import("../components/react/optimize/Overrides")),
      exact: true
    },
    {
      path: "/react/optimize/CodeSplitting",
      component: lazy(() => import("../components/react/optimize/CodeSplitting")),
      exact: true
    },
    {
      path: "/react/optimize/webpack",
      component: lazy(() => import("../components/react/optimize/Webpack")),
      exact: true
    },
    {
      path: "/react/Redux/ReduxPersist",
      component: lazy(() => import("../components/react/views/ReduxPersist")),
      exact: true
    },
    {
      path: "/react/Redux/ReactRedux",
      component: lazy(() => import("../components/react/views/ReactRedux")),
      exact: true
    },
    {
      path: "/react/Redux/Middleware",
      component: lazy(() => import("../components/react/views/Middleware")),
      exact: true
    },
    {
      path: "/react/Redux/Error",
      component: lazy(() => import("../components/react/views/Error")),
      exact: true
    },
    {
      path: "/react/Redux/ActionTypes",
      component: lazy(() => import("../components/react/views/ActionTypes")),
      exact: true
    },
    {
      path: "/react/Redux/MountStore",
      component: lazy(() => import("../components/react/views/MountStore")),
      exact: true
    },
    {
      path: "/react/Redux/Action",
      component: lazy(() => import("../components/react/views/Action")),
      exact: true
    },
    {
      path: "/react/Redux",
      component: lazy(() => import("../components/react/views/Redux")),
      exact: true
    },
    {
      path: "/react/Banner/setStateVal",
      component: lazy(() => import("../components/react/Banner/setStateVal")),
      exact: true
    },
    {
      path: "/react/Banner/State",
      component: lazy(() => import("../components/react/Banner/State")),
      exact: true
    },
    {
      path: "/react/ReactRouter/Module",
      component: lazy(() => import("../components/react/ReactRouter/Module")),
      exact: true
    },
    {
      path: "/react/Banner/bind",
      component: lazy(() => import("../components/react/Banner/Bind")),
      exact: true
    },
    {
      path: "/react/Banner/style",
      component: lazy(() => import("../components/react/Banner/Style")),
      exact: true
    },
    {
      path: "/react/Banner/mapdata",
      component: lazy(() => import("../components/react/Banner/MapData")),
      exact: true
    },
    {
      path: "/react/Banner/events",
      component: lazy(() => import("../components/react/Banner/Events")),
      exact: true
    },
    {
      path: "/react/Banner/restrain",
      component: lazy(() => import("../components/react/Banner/Restrain")),
      exact: true
    },
    {
      path: "/react/Banner/passval",
      component: lazy(() => import("../components/react/Banner/Passval")),
      exact: true
    },
    {
      path: "/react/lifecycle",
      component: lazy(() => import("../components/react/Lifecycle")),
      exact: true
    },
    {
      path: "/react/ReactRouter/config",
      component: lazy(() => import("../components/react/ReactRouter/Config")),
      exact: true
    },
    {
      path: "/react/ReactRouter/trends",
      component: lazy(() => import("../components/react/ReactRouter/Trends")),
      exact: true
    },
    {
      path: "/react/ReactRouter/nesting",
      component: lazy(() => import("../components/react/ReactRouter/Nesting")),
      exact: true
    },
  ]
}

export default ReactRouter;