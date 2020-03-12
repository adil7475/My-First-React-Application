import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import fakeAuth from '../services/fakeAuthentication';

const ProtectedRoute = ({ path, component: Component, ...rest}) => {
    return(
        <Route 
            path={path} 
            {...rest}
            render={ props => {
                    return fakeAuth.isAuthenticated ?
                        <Component {...props} /> :
                        <Redirect to="/movies"/>
                }     
            }
        />
    )
}

export default ProtectedRoute;