import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import perfil from './../../../assets/icone-teste.png'
import Avatar from '@material-ui/core/Avatar';

const styles = (theme) => ({

    foto: {
        display: 'inline-block',
        width: theme.spacing(16),
        height: theme.spacing(16),
    },

});

function Foto(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}>

            <Grid item>

                <div>
                    <Avatar alt="Perfil" src={perfil} className={classes.foto} />
                </div>

            </Grid>

        </Grid>
    );
}

export default withStyles(styles)(Foto);