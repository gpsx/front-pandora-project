import React from 'react'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
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
import Relatorio from '../views/RelatorioView/index'
import Avaliacoes from '../views/AvaliacoesView/index'
import ChangeRegister from '../views/ServicosView/index'
import Chat from '../views/ChatView/index'
import { AuthConsumer } from './ProvedorAutenticacao'

function RotaPrestador({ component: Component, isPrestador, isAutenticado, ...props }) {
    return (
        <Route {...props} render={(componentProps) => {
            if (isAutenticado) {
                if (true) {
                    return (
                        <Component {...componentProps} />
                    )
                }
                else {
                    return (
                        <Redirect to={{ pathname: '/home-solicitante' }} />
                    )
                }
            } else {
                return (
                    <Redirect to={{ pathname: '/login' }} />
                )
            }
        }} />
    )
}

function RotaSolicitante({ component: Component, isSolicitante, isAutenticado, ...props }) {
    return (
        <Route {...props} render={(componentProps) => {
            if (isAutenticado) {
                if (true) {
                    return (
                        <Component {...componentProps} />
                    )
                }
                else {
                    return (
                        <Redirect to={{ pathname: '/home-prestador', state: { from: componentProps.location } }} />
                    )
                }
            } else {
                return (
                    <Redirect to={{ pathname: '/login', state: { from: componentProps.location } }} />
                )
            }
        }} />
    )
}

function Routes(props) {

    return (
        <HashRouter>
            <Switch>
                {/* Rotas deslogadas */}
                <Route exact={true} path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Escolha} />
                <Route path="/register-prestador" component={PrestadorCadastro} />
                <Route path="/register-solicitante" component={SolicitanteCadastro} />
                <Route path="/test" component={Testes} />

                {/* Rotas solicitante */}
                <RotaSolicitante isSolicitante={props.isSolicitante} isAutenticado={props.isAutenticado} path="/profile-solicitante" component={PerfilSolicitante} />
                <RotaSolicitante isSolicitante={props.isSolicitante} isAutenticado={props.isAutenticado} path="/home-solicitante" component={HomeSolicitante} />
                <RotaSolicitante isSolicitante={props.isSolicitante} isAutenticado={props.isAutenticado} path="/meus-servicos" component={PainelSolicitante} />
                <RotaSolicitante isSolicitante={props.isSolicitante} isAutenticado={props.isAutenticado} path="/chat-solicitante" component={Chat} />

                {/* Rotas Prestador */}
                <RotaPrestador isPrestador={props.isPrestador} isAutenticado={props.isAutenticado} path="/profile-prestador" component={PerfilPrestador} />
                <RotaPrestador isPrestador={props.isPrestador} isAutenticado={props.isAutenticado} path="/home-prestador" component={PainelPrestador} />
                <RotaPrestador isPrestador={props.isPrestador} isAutenticado={props.isAutenticado} path="/my-service" component={MeuServico} />
                <RotaPrestador isPrestador={props.isPrestador} isAutenticado={props.isAutenticado} path="/my-rating" component={Avaliacoes} />
                <RotaPrestador isPrestador={props.isPrestador} isAutenticado={props.isAutenticado} path="/chat-prestador" component={Chat} />
                <RotaPrestador isPrestador={props.isPrestador} isAutenticado={props.isAutenticado} path="/service-report" component={Relatorio} />
                {/* O parâmetro ID é opicional */}
                <RotaPrestador isPrestador={props.isPrestador} isAutenticado={props.isAutenticado} path="/service/:id?" component={ChangeRegister} />


            </Switch>
        </HashRouter>

    )
}

export default () => (
    <AuthConsumer>
        {(context) => (<Routes isAutenticado={context.isAutenticado}
            isPrestador={context.isPrestador} isSolicitante={context.isSolicitante} />)}
    </AuthConsumer>
)