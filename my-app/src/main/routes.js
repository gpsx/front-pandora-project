import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Login from '../views/LoginView'
import Cadastro from '../views/RegisterView/Register/index'
import Endereco from '../views/RegisterView/AddressRegister/addressRegister'
import Servico from '../views/RegisterView/ServiceRegister/serviceRegister'
import Home from './../views/HomeView/index.js'
import Materialize from './../views/MateriaView'

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/materialize" component={Materialize} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Cadastro} />
                <Route path="/address" component={Endereco} />
                <Route path="/first-service" component={Servico}/>
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>

    )
}

export default Routes;