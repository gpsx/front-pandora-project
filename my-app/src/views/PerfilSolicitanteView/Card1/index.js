import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import Avatar from './Avatar';
import Alteracoes from '../AlteracoesView/index';
import Informacoes from './Informacoes';

const styles = (theme) => ({
    card: {
        marginTop: '12%',
        marginLeft: '34%',
        width: '800px',
        height: '290px'
    },

    linhaVertical: {
        height: '250px',
        borderLeft: '2px solid',
        borderLeftColor: '#696969',
        float: 'left',
        marginLeft: '48%',
        marginTop: '-31.5%',
        opacity: '0.2',
    },
    alteracoes: {
        marginTop: '-30.5%',
        width: '100px',
        marginLeft: '56%'
    },

    avatar: {
        marginLeft: '16%',
        marginTop: '2%'
    },
    informacoes: {
        marginLeft: '5%',
        marginTop: '-4%'
    },
    titulo: {
        color: 'black',
        fontFamily: 'Roboto',
        width: '300px',
        fontStyle: 'normal',
        fontSize: '25px',
        fontWeight: '200',
        lineHeight: '50px',
        marginLeft: '5.5%',
        marginTop: '-260px',
    },

});

function Card1(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}>

            <Paper className={classes.card}>
                <Grid item>

                    <div className={classes.avatar}>
                        <Avatar />
                    </div>

                    <br />

                    <div className={classes.informacoes}>
                        <Informacoes />
                    </div>

                    <div className={classes.linhaVertical}></div>

                    <div className={classes.alteracoes}>

                        <div className={classes.titulo}>Alterar informações</div>

                        <Alteracoes />

                    </div>

                </Grid>
            </Paper>

        </Grid>
    );
}

export default withStyles(styles)(Card1);