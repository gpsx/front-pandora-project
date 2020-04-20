import React from 'react';
import { withStyles, Grid } from '@material-ui/core';

const styles = (theme) => ({
    hr:{
        position: 'absolute',
        display: 'block',
        width: '40%',
        opacity: '0.2',
        color: '#595959',
            },
    margin: {
        paddingLeft: '30px',
        paddingRight: '30px',
    },
    h1: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '200',
        lineHeight: '28px',
        fontSize: '30px',
    },
    texto:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '200',
        lineHeight: '28px',
        fontSize: '18px',
    }
});

function IntroductionRegister(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            className={classes.margin}
            spacing={3}>

            <Grid item>
                <h1 className={classes.h1}>Estamos quase lá!</h1>
                <hr className={classes.hr}/>
            </Grid>

            <Grid item>
                <div className={classes.texto}>Para começar, precisamos de algumas 
                        informações básicas sobre você, 
                        para nos conhecermos e para o seu acesso às 
                        funcionalidades do Pandora.</div>
            </Grid>

        </Grid>
    );
}

export default withStyles(styles)(IntroductionRegister);