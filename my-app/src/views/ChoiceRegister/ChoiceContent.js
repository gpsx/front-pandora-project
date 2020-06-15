import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '../../components/Button';
import ChoiceLogo from './ChoiceLogo.js';

const styles = (theme) => ({
    texto: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '200',
        lineHeight: '28px',
        fontSize: '25px',
        marginLeft: theme.spacing(3),
        padding: '1px',
    },
    button: {
        width: theme.spacing(30.5),
        backgroundColor: '#0B3C5D',
        marginLeft: '12px',
        marginTop: '15px',
        float: 'left',
        color: 'white',
        '&:hover': {
            backgroundColor: '#328CC1',
        },
    },
});

function FormRegister(props) {

    const { classes } = props;

    return (
        <Container>

            <Grid Grid container justify="center" direction="row" spacing={1}>

                <Grid item>
                    <ChoiceLogo />
                </Grid>

                <Grid item>
                    <div className={classes.texto}>Nos diga como você vai usar o Pandora.</div>
                </Grid>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}>
                    <Grid item >
                        <Button
                            variant="contained"
                            size="small"
                            component="a"
                            href="/#/register-solicitante"
                            className={classes.button}
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
                            className={classes.button}
                        >
                            Sou prestador
                </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>

    );
}

export default withStyles(styles)(FormRegister);