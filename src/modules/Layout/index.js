import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import api from '../../api';
import routes from '../../routes';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
          api.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
        />
);
/*
const About = () => <h3>About</h3>;
const Recipes = () => <h3>Recipes</h3>;

 <Switch>
 <Route path="/login" component={Login} />
 <Route path="/about" component={About} />
 <PrivateRoute path="/recipes" component={Recipes} />
 <Route component={NoMatch} />
 </Switch>
*/

const NoMatch = ({ location }) => (
    <div>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
);


export default function Layout(){

    return <Router>
        <div>
            <Switch>

                {routes.map(
                    ({ isPrivate, component, ...route }) =>
                    (isPrivate && (
                        <PrivateRoute
                            key={route.path}
                            component={component}
                            {...route}
                            />
                    )) ||
                    (api.isAuthenticated && route.guestOnly ? (
                        <Redirect key={route.path} to="/app/dashboard" />
                    ) : (
                        <Route
                            key={route.path}
                            component={component}
                            {...route}
                            />
                    ))
                )}
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>;
}
