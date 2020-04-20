import React from 'react';
import { withStyles, Grid, Stepper} from '@material-ui/core';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import ChoiceLogo from './ChoiceLogo.js';

const styles = (theme) => ({
    margin: {
        paddingRight: '30px',
    },
    h1: {
        marginLeft:theme.spacing(33),
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '200',
        lineHeight: '28px',
        fontSize: '30px',
    },
    texto: {
        marginLeft:theme.spacing(20),
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
        marginTop:theme.spacing(),
        marginBottom:theme.spacing(3),
        marginLeft:theme.spacing(10),
        marginRight:theme.spacing(15),
        width:theme.spacing(29.5),
        backgroundColor:'#0B3C5D',
        float:'left',
        color:'white',
        '&:hover': {
        backgroundColor: '#328CC1',
    },
pbutton: {
        marginTop:theme.spacing(-5),
        marginBottom:theme.spacing(3),
        marginLeft:theme.spacing(100),
        width:theme.spacing(29.5),
        backgroundColor:'#0B3C5D',
        float:'left',
        color:'white',
        '&:hover': {
        backgroundColor: '#328CC1',
    },
},},
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
               <ChoiceLogo/> 
            </Grid>  

            <Grid item>
                <h1 className={classes.h1}>Seja bem-vindo(a)</h1>
            </Grid>

            <Grid item>
                <div className={classes.texto}>Nos diga como você vai usar o Pandora.</div>
            </Grid>
            <Grid item >
                <Button className={classes.sbutton}>Sou solicitante</Button>
                <Button className={classes.pbutton}>Sou prestador</Button>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(FormRegister);