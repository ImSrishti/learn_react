import React  from 'react';
import  {Route} from "react-router-dom";
export default function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path }
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} parent={route.parent} child={route.child} routes={route.routes}/>
        )}
      />
    );
  }
  