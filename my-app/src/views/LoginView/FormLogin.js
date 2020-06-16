import React from 'react';
import { AuthContext } from '../../main/ProvedorAutenticacao';
import { withRouter } from 'react-router-dom';
import { Grid, Link } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Input from '../../components/Input';
import Button from '../../components/Button';
import H1 from './../../components/forms/h1-login'
import RecuperarSenha from '../DialogView/Servicos/RecuperarSenha'

import userService from './../../service/userService'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
        error: '',
        open: false,
        mensagem: '',
        severity: '',
    }

    entrar = () => {
        userService.login({
            email: this.state.email,
            senha: this.state.senha
        }).then(response => {
            console.log(response)
            this.context.iniciarSessao(response.data);
            if (response.data.solicitante) {
                this.props.history.push('/home-solicitante')
            } else {
                this.props.history.push('/home-prestador')
            }
        }).catch(erro => {
            try {
                console.log(erro);
                this.errorMessage(erro.response.data)
            } catch (erro2) {
                console.log(erro2);
                this.errorMessage('Erro no servidor')
            }

        })
    }

    sucessMessage() {
        this.setState({
            severity: 'success',
            mensagem: 'Usuário logado com sucesso!',
            open: true
        })
    }

    errorMessage(msg) {
        this.setState({
            severity: 'error',
            mensagem: msg,
            open: true
        })
    }

    render() {
        const fecharAlerta = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }

            this.setState({ open: false });
        };

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
                        type='password' />

                    <RecuperarSenha />
                </Grid>

                <Grid item>
                    <Button style={button} onClick={this.entrar}>ENTRAR</Button>
                    <br />
                    <Link underline='always' href="/#/register" style={link} variant='body1'>
                        Não tem uma conta? Cadastre-se
                    </Link>
                </Grid>

                <Snackbar open={this.state.open} autoHideDuration={6000} onClose={fecharAlerta}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <Alert onClose={fecharAlerta} severity={this.state.severity}>
                        {this.state.mensagem}
                    </Alert>
                </Snackbar>
            </Grid>
        )
    }

}

FormLogin.contextType = AuthContext
export default withRouter(FormLogin)