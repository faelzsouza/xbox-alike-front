import React from "react";
import { Redirect, Route } from "react-router";

const GuardedRoute = ({ component: Component, ...rest }) => {
    const auth = Boolean(localStorage.getItem("JWT"));
    return (
        <Route
            {...rest}
            render={(props) =>
                auth === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default GuardedRoute;
