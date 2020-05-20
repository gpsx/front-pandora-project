import React from 'react';
import { withStyles, Grid, Paper} from '@material-ui/core';
import MenuPrestador from '../../components/MenuPrestador';
import Footer from '../../components/Footer';

const styles = (theme) => ({
    paper:{
        marginTop: '-1.8%',
        marginLeft: '23%',
        width: '800px',
        height: '810px'
    },
    titulo:{
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '17px',
        fontWeight: '200',
        marginTop:'12%',
        marginLeft:'23%'
    }
        

});

function Avaliacoes(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}
            >
            <Grid><MenuPrestador /></Grid>
            
            <div>
            <h1 className={classes.titulo}>Avaliações</h1>
            <br/>
            <Paper className={classes.paper}>
                
            </Paper>
            </div>
                <br/>
            <Footer/>
        </Grid>
    );
}

export default withStyles(styles)(Avaliacoes);