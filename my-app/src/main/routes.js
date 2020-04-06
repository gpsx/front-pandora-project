import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
import Login from '../views/LoginView'
import Cadastro from '../views/RegisterView'
/*import Cadastro from '../' */
import Home from './../views/home'

function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Cadastro}/>
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>

    )
}

export default Routes;