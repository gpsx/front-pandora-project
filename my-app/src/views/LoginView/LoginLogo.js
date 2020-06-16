import React from 'react'
import { withStyles, Grid, } from '@material-ui/core';
import LogoImg from './../../assets/logo72.png'

const styles = (theme) => ({
    img: {
        width: '200px',
        height: '200px',
    },

    h1: {
        marginTop: '35px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '80',
        lineHeight: '42px',
        fontSize: '36px',
    },
});

function LoginLogo(props) {
    const { classes } = props;

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
        >
            <img className={classes.img} src={LogoImg} alt="Imagem logo pandora" />
            <h1 className={classes.h1}>Projeto Pandora</h1>
        </Grid>
    );
}

export default withStyles(styles)(LoginLogo);