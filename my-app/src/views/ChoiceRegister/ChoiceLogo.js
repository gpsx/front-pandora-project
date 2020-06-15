import React from 'react'
import { withStyles, Grid, } from '@material-ui/core';
import LogoImg from './../../assets/logo72.png'

const styles = (theme) => ({
    img: {
        width: '150px',
        height: '150px',
        marginTop: theme.spacing(5),
    },

    h1: {
        paddingTop: '20px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '200',
        lineHeight: '28px',
        fontSize: '30px',
    },
});

function ChoiceLogo(props) {
    const { classes } = props;

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
        >
            <img className={classes.img} src={LogoImg} alt="Imagem logo pandora" />
            <h1 className={classes.h1}>Seja bem-vindo(a)</h1>
        </Grid>
    );
}

export default withStyles(styles)(ChoiceLogo);