import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import Relatar from './Relatar';
import Reportar from './Reportar';

const styles = (theme) => ({
    card: {
        marginTop: '1%',
        marginLeft: '32.5%',
        width: '800px',
        height: '200px'
    },

    linhaVertical: {
        height: '120px',
        borderLeft: '2px solid',
        borderLeftColor: '#696969',
        float: 'left',
        marginLeft: '48%',
        marginTop: '-15.5%',
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
    relatar: {
        marginLeft: '5%',
    },
    reportar: {
        marginLeft: '56%',
        marginTop: '-23.5%'
    },

});

function Card2(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}>

            <Grid item>

                <Paper className={classes.card}>
                    <div className={classes.relatar}>
                        <Relatar />
                    </div>

                    <div className={classes.linhaVertical}></div>

                    <div className={classes.reportar}>
                        <Reportar />
                    </div>
                    
                </Paper>
            </Grid>

        </Grid>
    );
}

export default withStyles(styles)(Card2);