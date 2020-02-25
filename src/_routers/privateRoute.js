import React from "react";
import { Route,Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component,isRead=true,isEdit,isAdd, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          isRead ? isEdit ? isAdd? <Component {...props} />
          : <Redirect to={{ pathname: "/read", state: { from: props.location } }} />
          : <Redirect to={{ pathname: "/edit", state: { from: props.location } }} />
          : <Redirect to={{ pathname: "/add", state: { from: props.location } }} />
        }
      />
    );
  }