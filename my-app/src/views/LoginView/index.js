import React from 'react'
import Menu from '../../components/Menu'
import LogoImg from './../../assets/logo72.png'
import './../../custom.css'
import './style.css'
import UsuarioService from './../../../service/userService'
import  utils from './../../utils/index'
import LocalStorage from './../../app/service/localStorage'

class Login extends React.Component {

    state = {
        email: '',
        senha: '',
        mensagemErro: null
    }

    constructor() {
        super();
        this.service = new UsuarioService();
    }

    entrar = () => {
        this.service.Login({
            user: this.state.email,
            password: utils.encrypt(this.state.senha)
        }).then(response => {
            localStorage.addItem('_usuario_logado', response.data);
            //this.props.history.push(/homeUsuario);
        }).catch(erro => {
            this.setState({ mensagemErro: erro.response.data })
        })
    }

    render() {
        return (
            <>
                <Menu />

                <div id='login-container'>


                    <div className='content'>
                        <div className='content-wrapper-logo'>
                            <img src={LogoImg} />
                            <h1>Projeto Pandora</h1>
                        </div>
                    </div>

                    <form className='content'>
                        <p class='login-input'>
                            <label>Email:</label>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                            />
                        </p>
                        <br />
                        <p class='login-input'>
                            <label>Senha:</label>
                            <input
                                type="password"
                                value={this.state.senha}
                                onChange={e => this.setState({ senha: e.target.value })} />
                            <a href='' >Esqueci minha senha</a>
                        </p>
                        <br />
                        <div className='login-button'>
                            <button type='submit'>ENTRAR</button>
                            <a href='' >Não tem uma conta? Cadastre-se</a>
                        </div>

                    </form>
                </div>
            </>
        )
    }
}




export default Login;