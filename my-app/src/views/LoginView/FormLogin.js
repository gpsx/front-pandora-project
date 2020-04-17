import React from 'react';
import { withStyles, Grid, Link } from '@material-ui/core';
import Input from './../../components/Input';
import Button from './../../components/Button';

const styles = (theme) => ({
    margin: {
        paddingLeft: '30px',
        paddingRight: '30px',
    },
    h1: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '200',
        lineHeight: '28px',
        fontSize: '24px',
    },
    input: {
        width: '280px',
    },
    link: {
        fontFamily: 'Roboto',
        color: '#328CC1',
    },
    button: {
        fontSize: '24px',
        width: '300px',
        height: '50px',
    }
});

function FormLogin(props) {

    const { classes } = props;

    let state = {
        email: 'teste',
        senha: 'teste',
        mensagemErro: null
    }

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            className={classes.margin}
            spacing={3}>

            <Grid item>
                <h1 className={classes.h1}>Email:</h1>
                <Input className={classes.input} />
            </Grid>

            <Grid item>
                <h1 className={classes.h1}>Senha:</h1>
                <Input className={classes.input} />
                <Link underline='always' href="/#/esqueciasenha" className={classes.link} variant='caption text'>
                    Esqueci minha senha
                </Link>
            </Grid>

            <Grid item>
                <Button className={classes.button}>ENTRAR</Button>
                <Link underline='always' href="/#/register" className={classes.link} variant='body1'>
                    Não tem uma conta? Cadastre-se
                </Link>
            </Grid>



        </Grid>
    );
}

export default withStyles(styles)(FormLogin);