import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Login from '../views/LoginView'
import Cadastro from '../views/RegisterView/Register/index'
import Servico from '../views/RegisterView/ServiceRegister/serviceRegister'
import Home from './../views/HomeView/index.js'
import Materialize from './../views/MateriaView'
import LimitTags from '../views/RegisterView/ServiceRegister/Panel.js'

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/materialize" component={Materialize} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Cadastro} />
                <Route path="/prestador" component={LimitTags} />
                <Route path="/first-service" component={Servico}/>
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>

    )
}

export default Routes;