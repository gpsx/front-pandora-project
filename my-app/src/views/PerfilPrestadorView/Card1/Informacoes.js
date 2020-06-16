import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import LocalStorageService from '../../../service/localStorage';

const styles = (theme) => ({
    nome: {
        fontSize: '24px',
        width: '320px'

    },
    conteudo: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '15px',
        fontWeight: '200',
        lineHeight: '22px',
    },
});

function Informacoes(props) {

    const { classes } = props;
    const usuario = LocalStorageService.obterItem("_usuario_logado")

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}>

            <Grid item>

                <div className={classes.nome}>{usuario.nome}</div>

                <div className={classes.conteudo}>
                    <div className={classes.email}>E-mail: {usuario.email}</div>
                    <div className={classes.telefone}>Telefone: {usuario.telefone}</div>
                    <div className={classes.CPF}>CPF/CNPJ: {usuario.cpf}</div>
                </div>

            </Grid>

        </Grid>
    );
}

export default withStyles(styles)(Informacoes);