import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Login from '../views/LoginView'
import PrestadorCadastro from './../views/RegistersView/Prestador'
import SolicitanteCadastro from './../views/RegistersView/Solicitante'
import Home from './../views/HomeView/index.js'
import HomeSolicitante from './../views/HomeSolicitanteView/index.js'
import Escolha from '../views/ChoiceRegister/ChoiceRegister.js'
import Testes from '../views/ViewDeTestes/testes.js'
import PainelPrestador from '../views/HomePrestadorView/PainelGeralView'
import PainelSolicitante from '../views/HomeSolicitanteView/PainelGeralView'
import PerfilSolicitante from '../views/PerfilSolicitanteView/index'

function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/home-prestador" component={PainelPrestador} />
                <Route path="/login" component={Login} />
                <Route path="/test" component={Testes} />
                <Route path="/register-prestador" component={PrestadorCadastro} />
                <Route path="/register-solicitante" component={SolicitanteCadastro} />
                <Route path="/painel-solicitante" component={PainelSolicitante} />
                <Route path="/perfil-solicitante" component={PerfilSolicitante} />
                <Route path="/register" component={Escolha} />
                <Route path="/home-solicitante" component={HomeSolicitante} />
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>

    )
}

export default Routes;