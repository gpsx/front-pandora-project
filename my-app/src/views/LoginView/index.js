import React from 'react'

import Container from '@material-ui/core/Container';
import LogoImg from './../../assets/logo72.png'
import './../../custom.css'
import './style.css'
import service from './../../app/service/userService'
import FormLogin from './FormLogin'



class Login extends React.Component {

    styles = (theme) => ({
        container: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(14),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
    })

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

                <Container>

                </Container>
                <div id='login-container'>

                    <div className='content'>
                        <div className='content-wrapper-logo'>
                            <img src={LogoImg} alt="Imagem logo pandora" />
                            <h1>Projeto Pandora</h1>
                        </div>
                    </div>
                        <FormLogin />



                </div>


            </>
        )
    }
}




export default Login;