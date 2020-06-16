import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';

import MenuPrestador from '../../components/MenuPrestador';
import Container from '../../components/Container';
import BotaoBaixar from './../../components/DownloadButton'

import { AuthContext } from '../../main/ProvedorAutenticacao';

const styles = (theme) => ({
    h1: {
        marginLeft: '2px',
        fontSize: '14px',
    },
    baixar: {
        position: "relative",
        marginLeft: "60%",
        marginBottom: '10px',
    },
    relatorio: {
        width: '75%',
        height: 'auto',
    },
    paper: {
        width: '100%',
        height:'500px',
        maxWidth: '500px',
        marginTop:'-3%'
    }
});

class Relatorio extends React.Component {
    id = this.context.getId();

    state = {
        data: []
    }

    render() {
        const { classes } = this.props;

        return (
            <Container>
                <MenuPrestador />
                <Grid container justify="center" direction="row" spacing={6}>

                    <Grid item className={classes.relatorio}>
                        <div className={classes.h1}>Relatório de Serviços</div>
                    </Grid>

                    <Grid item className={classes.relatorio}>
                        <Paper elevation={3} className={classes.paper}>
    
                        </Paper>
                        <div className={classes.baixar}>
                            <BotaoBaixar />
                        </div>
                    </Grid>

                    <Grid item className={classes.relatorio}>
                        
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

Relatorio.contextType = AuthContext;
export default withStyles(styles)(Relatorio);