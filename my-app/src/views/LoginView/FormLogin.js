import React from 'react';
import { Grid, Link } from '@material-ui/core';
import Input from '../../components/Input';
import Button from '../../components/Button';
import H1 from './../../components/forms/h1-login'
import service from './../../service/userService'
import LocalStorageService from './../../service/localStorage'

const link = {
    fontFamily: 'Roboto',
    color: '#328CC1',
}

const button = {
    fontSize: '16px',
    width: '280px',
    height: '50px',
}

class FormLogin extends React.Component {

    state = {
        email: '',
        senha: '',
        error: ''
    }

    entrar = () => {
        service.login({
            email: this.state.email,
            senha: this.state.senha
        }).then(response => {
            LocalStorageService.addItem('_usuario_logado', response.data)

            this.props.history.push('/#/userhome');
        }).catch(erro => {
            console.log(erro.response.data);
        })
    }

    render() {
        return (
            <Grid container
                direction="column"
                alignItems="flex-start"
                style={{
                    paddingLeft: '30px',
                    paddingRight: '30px',
                }}
                spacing={3} >

                <Grid item>
                    <H1>Email:</H1>
                    <Input
                        style={{ width: '280px' }}
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                </Grid>

                <Grid item>
                    <H1>Senha:</H1>
                    <Input
                        style={{ width: '280px' }}
                        onChange={e => this.setState({ senha: e.target.value })}
                        type='password'
                    />
                    <Link underline='always' href="/#/esqueciasenha" style={link} variant='caption text'>
                        Esqueci minha senha
                    </Link>
                </Grid>

                <Grid item>
                    <Button style={button} onClick={this.entrar}>ENTRAR</Button>
                    <br />
                    <Link underline='always' href="/#/register" style={link} variant='body1'>
                        Não tem uma conta? Cadastre-se
                    </Link>
                </Grid>

            </Grid>
        )
    }

}

export default (FormLogin);