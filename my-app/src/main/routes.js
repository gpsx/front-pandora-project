import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
import Login from '../views/LoginView'
import Cadastro from '../views/RegisterView'
import Endereco from '../views/RegisterView/addressRegister'
import Home from './../views/HomeView'

function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Cadastro}/>
                <Route path="/address" component={Endereco}/>
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>

    )
}

export default Routes;