import React from 'react'
import { withStyles, Grid, } from '@material-ui/core';
import LogoImg from './../../../assets/logo72.png'


const styles = (theme) => ({
    img: {
        width: '150px',
        height: '150px',
        marginLeft:theme.spacing(40),
        marginTop:theme.spacing(5),
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

function ChoiceLogo(props) {
    const { classes } = props;

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
        >
            <img className={classes.img} src={LogoImg} alt="Imagem logo pandora" />
        </Grid>
    );
}

export default withStyles(styles)(ChoiceLogo);