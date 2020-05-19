import React from 'react';
import { withStyles, Grid, Link} from '@material-ui/core';

const styles = (theme) => ({

    nome: {
        fontSize: '24px',
        width:'320px'

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

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}>

            <Grid item>

                <div className={classes.nome}>Nicolle Cruz dos Santos</div>

                <div className={classes.conteudo}>
                    <div className={classes.endereco}>Endereço:</div>
                    <div className={classes.email}>E-mail:</div>
                    <div className={classes.telefone}>Telefone:</div>
                    <div className={classes.CPF}>CPF/CNPJ:</div>
                </div>

            </Grid>

        </Grid>
    );
}

export default withStyles(styles)(Informacoes);