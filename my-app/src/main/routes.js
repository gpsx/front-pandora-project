import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Login from '../views/LoginView'
import Cadastro from '../views/RegisterView'
import Endereco from '../views/RegisterView/addressRegister'
import HomePrestador from '../views/HomePrestadorView'
import Home from './../views/HomeView'
import QuemSomos from './../views/QuemSomosView'
import Materialize from './../views/MateriaView'

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/materialize" component={Materialize} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Cadastro} />
                <Route path="/address" component={Endereco} />
                <Route path="/prestador" component={HomePrestador} />
                <Route path="/quemsomos" component={QuemSomos} />
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>

    )
}

export default Routes;