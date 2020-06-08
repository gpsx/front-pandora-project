import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Login from '../views/LoginView'
import PrestadorCadastro from './../views/RegistersView/Prestador'
import SolicitanteCadastro from './../views/RegistersView/Solicitante'
import Home from './../views/HomeView/index.js'
import HomeSolicitante from './../views/HomeSolicitanteView/index.js'
import PainelSolicitante from './../views/HomeSolicitanteView/PainelGeralView/index.js'
import Escolha from '../views/ChoiceRegister/ChoiceRegister.js'
import Testes from '../views/ViewDeTestes/testes.js'
import PainelPrestador from '../views/HomePrestadorView/PainelGeralView'
import PerfilSolicitante from '../views/PerfilSolicitanteView/index'
import PerfilPrestador from '../views/PerfilPrestadorView/index'
import MeuServico from '../views/MeuServicoView/index'
import Avaliacoes from '../views/AvaliacoesView/index'
import ChangeRegister from '../views/ServicosView/index'
import Chat from '../views/ChatView/index'

function Routes() {
    return (
        <HashRouter>
            <Switch>
                {/* Rotas deslogadas */}
                <Route path="/login" component={Login} />
                <Route path="/register" component={Escolha} />
                <Route path="/register-prestador" component={PrestadorCadastro} />
                <Route path="/register-solicitante" component={SolicitanteCadastro} />
                <Route path="/test" component={Testes} />

                {/* Rotas solicitante */}
                <Route path="/profile-solicitante" component={PerfilSolicitante} />
                <Route path="/home-solicitante" component={HomeSolicitante} />
                <Route path="/meus-servicos" component={PainelSolicitante} />
                
                {/* Rotas Prestador */}
                <Route path="/profile-prestador" component={PerfilPrestador} />
                <Route path="/home-prestador" component={PainelPrestador} />
                <Route path="/my-service" component={MeuServico} />
                <Route path="/my-rating" component={Avaliacoes} />
                <Route path="/chat" component={Chat} />
                {/* O parâmetro ID é opicional */}
                <Route path="/service/:id?" component={ChangeRegister} />

                <Route path="/" component={Home} />
                
            </Switch>
        </HashRouter>

    )
}

export default Routes;