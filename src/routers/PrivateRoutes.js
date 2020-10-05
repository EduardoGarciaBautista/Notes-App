import React from "react";
import {Route, Redirect} from "react-router-dom";

export const PrivateRoutes = ({
                                  isLoggedIn,
                                  component: Component,
                                  ...rest
                              }) => {
    return(
        <Route {...rest}
        component={(props) =>(
            (isLoggedIn) ? <Component {...props}/> :
                <Redirect to="/auth/login" />)}
        />
    )
}