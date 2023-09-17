import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, restricted, ...rest}) => {
    const isLogin = JSON.parse(localStorage.getItem('profile'))

    return (
        <Route {...rest} render={props => (
            isLogin ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;