import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
import Login from '../views/LoginView'
/*import Cadastro from '../' */
import Home from './../views/Home'

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