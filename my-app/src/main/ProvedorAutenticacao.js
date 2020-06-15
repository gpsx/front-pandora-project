import React from 'react';
import AuthService from '../service/authServicce';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

class ProvedorAutenticacao extends React.Component {
    state = {
        id: null,
        usuarioAutenticado: null,
        isAutenticado: this.getInformation(),
        isPrestador: false,
        isSolicitante: false,
    }

    getInformation() {
        let user = AuthService.obterUsuarioAutenticado();
        if (user === null) {
            return false
        } else {
            return true;
        }
    }

    iniciarSessao = (usuario) => {
        AuthService.logar(usuario);
        this.setState({
            isAutenticado: true,
            usuarioAutenticado: usuario,
            id: usuario.id
        });
        this.setState({ isSolicitante: usuario.solicitante ? true : false });
        this.setState({ isPrestador: usuario.solicitante ? false : true });
    }

    encerrarSessao = () => {
        AuthService.removerUsuarioAutenticado();
        this.setState({
            isAutenticado: false, usuarioAutenticado: null,
            isPrestador: false, isSolicitante: false, id: null,
        })
    }

    obterResumo = () => {
        let user = AuthService.obterUsuarioAutenticado();
        let resumo = {
            nome: user.nome,
            img: user.imagem,
            id: user.id,
        }
        return resumo;
    }

    tipoUsuario = () => {
        return AuthService.tipoUsuario();
    }

    render() {
        const contexto = {
            isAutenticado: this.state.isAutenticado,
            isSolicitante: this.state.isSolicitante,
            isPrestador: this.state.isPrestador,
            id: this.state.id,
            iniciarSessao: this.iniciarSessao,
            encerrarSessao: this.encerrarSessao,
            obterResumo: this.obterResumo,
            tipoUsuario: this.tipoUsuario,
        }

        return (
            <AuthProvider value={contexto} >
                {this.props.children}
            </AuthProvider>
        )
    }

}

export default ProvedorAutenticacao;