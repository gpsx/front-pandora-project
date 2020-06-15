import React from 'react';
import AuthService from '../service/authServicce';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

class ProvedorAutenticacao extends React.Component {
    state = {
        usuarioAutenticado: null,
        isAutenticado: false,
        isPrestador: false,
        isSolicitante: false,
    }

    iniciarSessao = (usuario) => {
        AuthService.logar(usuario);
        this.setState({ isAutenticado: true, usuarioAutenticado: usuario });
        this.setState({ isSolicitante: usuario.solicitante ? true : false });
        this.setState({ isPrestador: usuario.solicitante ? false : true });
    }

    encerrarSessao = () => {
        AuthService.removerUsuarioAutenticado();
        this.setState({
            isAutenticado: false, usuarioAutenticado: null,
            isPrestador: false, isSolicitante: false
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

    render() {
        const contexto = {
            isAutenticado: this.state.isAutenticado,
            isSolicitante: this.state.isSolicitante,
            isPrestador: this.state.isPrestador,
            iniciarSessao: this.iniciarSessao,
            encerrarSessao: this.encerrarSessao,
            obterResumo: this.obterResumo
        }

        return (
            <AuthProvider value={contexto} >
                {this.props.children}
            </AuthProvider>
        )
    }

}

export default ProvedorAutenticacao;