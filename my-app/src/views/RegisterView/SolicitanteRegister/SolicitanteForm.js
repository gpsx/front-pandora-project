import React from 'react';
import { withStyles, Grid} from '@material-ui/core';
import Input from '../../../components/Input';

const styles = (theme) => ({
    margin: {
        paddingRight: '30px',
    },
    h1: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '200',
        lineHeight: '28px',
        fontSize: '13px',
    },
    input: {
        width: '160%',
    },
    button: {
        fontSize: '24px',
        width: '250px',
        height: '50px',
        float:'left',
        
        '&:hover': {
            backgroundColor: '#696969',
        },
    },
    clearbutton: {
        fontSize: '24px',
        backgroundColor:'#328CC1',
        marginLeft:'280px',
        marginTop:'-75px',
        width: '250px',
        height: '50px',
        float:'left',
        '&:hover': {
            backgroundColor: '#696969',
        },
    }
});

function SolicitanteForm(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            className={classes.margin}
            spacing={3}>   

            <Grid item>
                <h1 className={classes.h1}>Nome Completo</h1>
                <Input className={classes.input} />
            </Grid>

            <Grid item>
                <h1 className={classes.h1}>E-mail</h1>
                <Input className={classes.input} />
            </Grid>

            <Grid item>
                <h1 className={classes.h1}>CNPJ</h1>
                <Input className={classes.input} />
            </Grid>

            <Grid item>
                <h1 className={classes.h1}>CPF</h1>
                <Input className={classes.input} />
            </Grid>

            <Grid item>
                <h1 className={classes.h1}>Telefone</h1>
                <Input className={classes.input} />
            </Grid>

            <Grid item>
                <h1 className={classes.h1}>Confirmar senha</h1>
                <Input className={classes.input} />
            </Grid>

            <Grid item>
                <h1 className={classes.h1}>Senha</h1>
                <Input className={classes.input} />
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(SolicitanteForm);