import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Login from '../views/LoginView'
import PrestadorCadastro from '../views/RegisterView/PrestadorRegister/index'
import SolicitanteCadastro from '../views/RegisterView/SolicitanteRegister/index'
import Home from './../views/HomeView/index.js'
import Materialize from './../views/MateriaView'
import Escolha from '../views/RegisterView/ChoiceRegister/ChoiceRegister.js'
import Testes from '../views/ViewDeTestes/testes.js'

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/materialize" component={Materialize} />
                <Route path="/login" component={Login} />
                <Route path="/test" component={Testes} />
                <Route path="/register-prestador" component={PrestadorCadastro} />
                <Route path="/register-solicitante" component={SolicitanteCadastro} />
                <Route path="/register" component={Escolha} />
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>

    )
}

export default Routes;