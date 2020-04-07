import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
import Login from '../views/LoginView'
import Cadastro from '../views/RegisterView'
import Home from './../views/HomeView'
import Materialize from './../views/MateriaView'

function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/materialize" component={Materialize} />
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Cadastro}/>
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>

    )
}

export default Routes;