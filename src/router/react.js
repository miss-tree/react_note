/*react*/
import react from "../components/react/index";
import base from "../components/react/base";
import Structure from "../components/react/Structure";
import Bind from "../components/react/Bind";
import MapData from "../components/react/MapData";
import Events from "../components/react/Events";
import Restrain from "../components/react/Restrain";
import Passval from "../components/react/Passval";
import Lifecycle from "../components/react/Lifecycle";
import Config from "../components/react/Config";
import Trends from "../components/react/Trends";
import Nesting from "../components/react/Nesting";
import Module from "../components/react/Module";
import Redux from "../components/react/Redux";
import State from "../components/react/State";
import Action from "../components/react/views/Action";
import ActionTypes from "../components/react/views/ActionTypes";
import Error from "../components/react/views/Error";
import Middleware from "../components/react/views/Middleware";
import ReactRedux from "../components/react/views/ReactRedux";




let React={
    path: "/react",
      component: react,
      routes:[
          {
            path: "/react/",
            component: base,
            exact:true    
          },
          {
            path: "/react/structure",
            component: Structure,
            exact:true    
          },
          {
            path: "/react/Redux/ReactRedux",
            component: ReactRedux,
            exact:true    
          },
          {
            path: "/react/Redux/Middleware",
            component: Middleware,
            exact:true    
          },
          {
            path: "/react/Redux/Error",
            component: Error,
            exact:true    
          },
          {
            path: "/react/Redux/ActionTypes",
            component: ActionTypes,
            exact:true    
          },
          {
            path: "/react/Redux/Action",
            component: Action,
            exact:true    
          },
          {
            path: "/react/Redux",
            component: Redux,
            exact:true    
          },
          {
            path: "/react/State",
            component: State,
            exact:true    
          },
          {
            path: "/react/Module",
            component: Module,
            exact:true    
          },
          {
            path: "/react/bind",
            component: Bind,
            exact:true    
          },
          {
            path: "/react/mapdata",
            component: MapData,
            exact:true    
          },
          {
            path: "/react/events",
            component: Events,
            exact:true    
          },
          {
            path: "/react/restrain",
            component: Restrain,
            exact:true    
          },
          {
            path: "/react/passval",
            component: Passval,
            exact:true    
          },
          {
            path: "/react/lifecycle",
            component: Lifecycle,
            exact:true    
          },
          {
            path: "/react/config",
            component: Config,
            exact:true    
          },
          {
            path: "/react/trends",
            component: Trends,
            exact:true    
          },
          {
            path: "/react/nesting",
            component: Nesting,
            exact:true    
          },
      ]
}



export default React;