import React from 'react'
import Menu from './../../components/Menu'
import LogoImg from './../../assets/logo72.png'
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
                        <p class='input-content'>
                            <label>Email:</label>
                            <br />
                            <input type="text" />
                        </p>
                        <br />
                        <p class='input-content'>
                            <label>Senha:</label>
                            <br />
                            <input type="password" />
                        </p>
                    </form>
                </div>
            </>
        )
    }
}




export default Login;