import React from 'react'
import Menu from '../../components/Menu'
import LogoImg from './../../assets/logo72.png'
import './../../custom.css'
import './style.css'

class Login extends React.Component {


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
                            <input type="text" />
                        </p>
                        <br />
                        <p class='login-input'>
                            <label>Senha:</label>
                            <input type="password" />
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