import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import FormDialogReportar from '../../DialogView/Botoes/reportar';

const styles = (theme) => ({

    titulo: {
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '20px',
        fontWeight: '200',
        lineHeight: '50px',
        width: '300px',
    },
    botao: {
        fontSize: '11px',
        width: '48%',
        height: '20%',
        '&:hover': {
            backgroundColor: '#328CC1',
        },
    },
    texto: {
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '14px',
        fontWeight: '200',
        lineHeight: '20px',
        paddingBottom: '5px',
    },

});

function Reportar(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            justify="center">

            <Grid item>
                <div className={classes.titulo}>Reportar</div>
                <div className={classes.texto}>
                    Algum dos usuários do Pandora te <br />ofendeu ou derespeitou
                    <br />
                    de alguma maneira?
                </div>
                <FormDialogReportar />
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(Reportar);