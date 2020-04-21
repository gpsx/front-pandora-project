import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Login from '../views/LoginView'
import PrestadorCadastro from '../views/RegisterView/PrestadorRegister/index'
import SolicitanteCadastro from '../views/RegisterView/SolicitanteRegister/index'
import Home from './../views/HomeView/index.js'
import HomeSolicitante from './../views/HomeSolicitanteView/index.js'
import Materialize from './../views/MateriaView'
import Escolha from '../views/RegisterView/ChoiceRegister/ChoiceRegister.js'
import Testes from '../views/ViewDeTestes/testes.js'
import PainelGeral from '../views/HomePrestadorView/PainelGeralView/PainelGeral'

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/home-prestador" component={PainelGeral} />
                <Route path="/login" component={Login} />
                <Route path="/test" component={Testes} />
                <Route path="/register-prestador" component={PrestadorCadastro} />
                <Route path="/register-solicitante" component={SolicitanteCadastro} />
                <Route path="/register" component={Escolha} />
                <Route path="/home-solicitante" component={HomeSolicitante} />
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>

    )
}

export default Routes;