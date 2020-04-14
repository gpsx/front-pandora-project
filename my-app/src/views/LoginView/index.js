import React from 'react'
import Menu from '../../components/Menu'
import LogoImg from './../../assets/logo72.png'
import './../../custom.css'
import './style.css'
import service from './../../app/service/userService'

class Login extends React.Component {

    state = {
        email: 'teste',
        senha: 'teste',
        mensagemErro: null
    }

    entrar = async () => {

        // service.login({
        //     email: this.state.email,
        //     senha: this.state.senha
        // }).then(response => {
        //     localStorage.addItem('_usuario_logado', response.data);
        //     console.log(response)
        //     //this.props.history.push(/homeUsuario);
        // }).catch(erro => {
        //     console.log(erro)
        //     //this.setState({ mensagemErro: erro.response.Message })
        // })

        let response = await service.login(this.state.email, this.state.senha)
        if (response.status === 200) {
            localStorage.setItem('_usuario_logado', response.data);
            console.log("Usuario Autenticado");

        } else {
            this.setState({ mensagemErro: response.Message })
            console.log(response.Message);
        }

    }


    render() {
        return (
            <>
                <Menu />

                <div id='login-container'>

                    <div className='content'>
                        <div className='content-wrapper-logo'>
                            <img src={LogoImg} alt="Imagem logo pandora" />
                            <h1>Projeto Pandora</h1>
                        </div>
                    </div>

                    <form className='content' onSubmit={this.entrar}>
                        <p className='login-input'>
                            <label>Email:</label>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                            />
                        </p>
                        <br />
                        <p className='login-input'>
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