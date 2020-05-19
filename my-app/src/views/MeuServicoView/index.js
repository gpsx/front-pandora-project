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
        width: "50%",
        height: "400px",
        marginLeft: "20%",
        marginTop:"-19.5%"
    },
    footer: {
        marginBottom:"-1"
    },
    titulo:{
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '17px',
        fontWeight: '200',
        marginTop:'5%',
        marginLeft:'20%',
    },
    div:{
        width:'100%'
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

            <div className={classes.div}>
            <h1 className={classes.titulo}>Meus Serviços</h1>
            <Paper className={classes.paper}>
                <Grid item>
                    <div className={classes.adicionar}>
                        <BotaoAdicionar />
                        <FormDialogAvaliar />
                    </div>
                </Grid>
            </Paper>
            </div>
            <br /><br />
            

            <Footer className={classes.footer} />
        </Grid>
    );
}

export default withStyles(styles)(MeuServico);