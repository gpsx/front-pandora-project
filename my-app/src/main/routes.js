import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
import Login from '../views/login'
import Home from '../views/home'

function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>

    )
}

export default Routes;