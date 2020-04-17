import React from 'react';
import { withStyles, Paper, Grid } from '@material-ui/core';
import Input from './../../components/Input';
import Button from './../../components/Button';
import Typography from './../../components/Typography'

const styles = (theme) => ({
    form: {

    },
    label: {
        fontFamily: 'Roboto',
        fontSize: 24,
        color: 'black',
    },
    inputSize: {
        height: '30px',
        width: '288px',
    },
    margin: {
        margin: '50px',
    },
    padding: {
        width: '385px',
        height: '406px',
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
        <>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                    <Typography variant="h6">
                        Email:
                        </Typography>
                    <Input type="email" />
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                    <Typography variant="h6">
                        Senha:
                        </Typography>
                    <Input type="password" />
                </Grid>
            </Grid>

            <Grid container justify="center" style={{ marginTop: '10px' }}>
                <Button>Login</Button>
            </Grid>
        </>
    );
}

export default withStyles(styles)(FormLogin);