import React from 'react';
import { withStyles, Grid, Link } from '@material-ui/core';
import Input from '../../../../components/Input';
import LimitTags from './Panel.js';

const link = {
    fontFamily: 'Roboto',
    fontSize: '12px',
    color: '#328CC1',
}

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
    clearbutton: {
        fontSize: '24px',
        backgroundColor: '#328CC1',
        marginLeft: '280px',
        marginTop: '-75px',
        width: '250px',
        height: '50px',
        float: 'left',
        '&:hover': {
            backgroundColor: '#696969',
        },
    }
});

function FormService(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            className={classes.margin}
            spacing={3}>

            <Grid item>
                <h1 className={classes.h1}>Nome do serviço</h1>
                <Input className={classes.input} />
            </Grid>

            <Grid item>
                <h1 className={classes.h1}>Descrição do serviço</h1>
                <Input className={classes.input} />
            </Grid>

            <Grid item>
                <h1 className={classes.h1}>Categoria do serviço</h1>
                <LimitTags />
                <Link underline='always' href="/#/novacategoria" style={link} variant='caption text'>
                    Minha categoria não está aqui!
                </Link>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(FormService);