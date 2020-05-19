import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import MenuPrestador from './../../components/MenuPrestador';
import Footer from './../../components/Footer';
import BotaoAdicionar from './../../components/AddButton'
import FormDialogAvaliar from '../DialogView/Servicos/avaliar'

const styles = (theme) => ({
    adicionar: {
        position: "relative",
        marginLeft: "90%",
        marginTop: "40%"
    },
    paper: {
        width: "60%",
        height: "400px",
        marginLeft: "20%",
        marginTop: "5%"
    },
    footer: {
        marginBottom:"-1"
    }


});

function MeuServico(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}
        >
            <Grid><MenuPrestador /></Grid>
            <br />
            <Grid item>

            </Grid>

            <Paper className={classes.paper}>
                <Grid item>
                    <div className={classes.adicionar}>
                        <BotaoAdicionar />
                        <FormDialogAvaliar />
                    </div>
                </Grid>
            </Paper>
            <br /><br />

            <Footer className={classes.footer} />
        </Grid>
    );
}

export default withStyles(styles)(MeuServico);