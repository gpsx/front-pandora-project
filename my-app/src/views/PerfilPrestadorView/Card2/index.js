import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import Relatar from './Relatar';
import Reportar from './Reportar';

const styles = (theme) => ({
    card: {
        width: '800px',
        minWidth: '400px',
        maxWidth: '800px',
        height: '200px'
    },

    linhaVertical: {
        height: '150px',
        borderLeft: '2px solid',
        borderLeftColor: '#696969',
        marginTop: '-33.5%',
        marginLeft: '20px',
        opacity: '0.2',
    },
    botao: {
        marginTop: '-30.5%',
        width: '100px',
        marginLeft: '54%'
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

    reportar: {
        marginLeft: '56%',
        marginTop: '-23.5%'
    },

});

function Card2(props) {

    const { classes } = props;

    return (

        <Paper className={classes.card}>
            <Grid container direction="row"
                justify="space-evenly"
                alignItems="center"
                className={classes.card}
            >

                <Grid item>
                    <Relatar />
                </Grid>
                <Grid item>
                    <div className={classes.linhaVertical}></div>
                </Grid>
                <Grid item>
                    <Reportar />
                </Grid>


            </Grid>
        </Paper>
    );
}

export default withStyles(styles)(Card2);