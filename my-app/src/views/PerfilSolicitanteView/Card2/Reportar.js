import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import Button from '../../../components/Button';

const styles = (theme) => ({

    titulo: {
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '20px',
        fontWeight: '200',
        lineHeight: '50px',
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
        width: '70%'
    },
    reportar: {
        float: 'left',
        width: '100%',
    },

});

function Reportar(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}>

            <Grid item>
                <div className={classes.reportar}>
                    <div className={classes.titulo}>Reportar</div>
                    <div className={classes.texto}>
                        Algum dos usuários do Pandora te ofendeu ou derespeitou de alguma maneira?
                            </div>

                    <br />

                    <Button className={classes.botao}>REPORTAR USUÁRIO</Button>

                </div>

            </Grid>

        </Grid>
    );
}

export default withStyles(styles)(Reportar);