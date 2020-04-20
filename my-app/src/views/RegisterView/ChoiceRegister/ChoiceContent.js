import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import Button from '../../../components/Button';
import ChoiceLogo from './ChoiceLogo.js';

const styles = (theme) => ({
    margin: {
        paddingRight: '30px',
    },
    h1: {
        marginLeft: theme.spacing(29),
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '200',
        lineHeight: '28px',
        fontSize: '30px',
    },
    texto: {
        marginLeft: theme.spacing(16),
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '200',
        lineHeight: '28px',
        fontSize: '25px',
    },
    input: {
        width: '160%',
    },
    sbutton: {
        marginTop: theme.spacing(),
        marginBottom: theme.spacing(3),
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(15),
        width: theme.spacing(29.5),
        backgroundColor: '#0B3C5D',
        float: 'left',
        color: 'white',
        '&:hover': {
            backgroundColor: '#328CC1',
        },
        prestadorbutton: {
            marginBottom: theme.spacing(3),
            marginLeft: theme.spacing(100),
            width: theme.spacing(30),
            backgroundColor: '#0B3C5D',
            float: 'left',
            color: 'white',
            '&:hover': {
                backgroundColor: '#328CC1',
            },
        },
    },
});

function FormRegister(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            className={classes.margin}
            spacing={3}>

            <Grid>
                <ChoiceLogo />
            </Grid>

            <Grid item>
                <h1 className={classes.h1}>Seja bem-vindo(a)</h1>
            </Grid>

            <Grid item>
                <div className={classes.texto}>Nos diga como você vai usar o Pandora.</div>
            </Grid>
            <Grid item >
                <Button
                    variant="contained"
                    size="small"
                    component="a"
                    href="/#/register-solicitante"
                    className={classes.sbutton}
                >
                    Sou solicitante
                </Button>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    size="small"
                    component="a"
                    href="/#/register-prestador"
                    className={classes.prestadorbutton}
                >
                    Sou prestador
                </Button>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(FormRegister);