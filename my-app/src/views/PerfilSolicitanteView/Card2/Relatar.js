import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import FormDialogRelatar from '../../DialogView/Botoes/relatar';

const styles = (theme) => ({

    titulo: {
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '20px',
        fontWeight: '200',
        lineHeight: '50px',
        width: '300px',
    },
    botao: {
        fontSize: '11px',
        width: '42%',
        height: '20%',
        '&:hover': {
            backgroundColor: '#328CC1',
        },
    },
    texto: {
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '14px',
        fontWeight: '200',
        lineHeight: '20px',
        paddingBottom: '5px',
    },
    relatar: {
        float: 'left',
    },

});

function Relatar(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            justify="center">

            <Grid item>
                <div className={classes.titulo}>Problemas</div>
                <div className={classes.texto}>
                    Houve algum problema com <br />
                    a nossa aplicação, que prejudicasse <br />
                              a sua experiência conosco?
                </div>
                <FormDialogRelatar />
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(Relatar);