import React from 'react';
import { Route,BrowserRouter } from 'react-router-dom';
import routes from './routes'
function RoutingList() {
    return<>  <BrowserRouter>{routes.map(item => {
            return (
                <Route
                    exact
                    path={item.path}
                    component={item.component}
                    key={item.key}
                />
            );
    })}
    </BrowserRouter>
    </>
}

export default RoutingList;