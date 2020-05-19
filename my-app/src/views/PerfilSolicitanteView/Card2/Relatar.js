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
        width: '70%'
    },
    relatar: {
        float: 'left',
        width:'70%',
    },

});

function Relatar(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}>

                <Grid item>
                    <div className={classes.relatar}>
                        <div className={classes.titulo}>Problemas</div>
                        <div className={classes.texto}>
                            Houve algum problema com a nossa aplicação, que prejudicasse a sua experiência conosco?
                    </div>
                        <br />
                        <FormDialogRelatar/>
                        </div>
                </Grid>

        </Grid>
    );
}

export default withStyles(styles)(Relatar);