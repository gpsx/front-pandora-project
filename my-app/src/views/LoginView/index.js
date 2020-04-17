import React from 'react'
import { withStyles, Paper, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import service from './../../app/service/userService'
import LoginLogo from './LoginLogo';
import FormLogin from './FormLogin'

const useStyles = theme => ({
    container: {
        marginTop: '100px',
    },

    paper: {
        paddingTop: '18%',
        display: 'flex',
        flexWrap: 'wrap',
        width: '385px',
        height: '406px',
    },

    img: {
        width: '200px',
        height: '200px',
    },

    h1: {
        marginTop: '25px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '80',
        lineHeight: '42px',
        fontSize: '36px',
    },


});

class Login extends React.Component {

    state = {
        email: 'teste',
        senha: 'teste',
        mensagemErro: null
    }

    entrar = async () => {

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

        const { classes } = this.props;

        return (
            <Container className={classes.container}>

                <Grid container justify="center" direction="row" spacing={1}>

                    <Grid item>
                        <Paper elevation={3} className={classes.paper}>
                            <LoginLogo />
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper elevation={3} className={classes.paper}>
                            <FormLogin />
                        </Paper>
                    </Grid>

                </Grid>

            </Container>
        );
    }
}


export default withStyles(useStyles)(Login);