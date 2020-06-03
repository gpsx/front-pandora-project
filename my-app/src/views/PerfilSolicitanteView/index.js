import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import MenuSolicitante from './../../components/MenuSolicitante';
import Container from './../../components/Container'
import Card1 from './Card1/index';
import Card2 from './Card2/index';


const styles = (theme) => ({
    card: {
        width: '60%',
        height: '300px',
    },
});

function PerfilSolicitante(props) {

    const { classes } = props;

    return (
        <Container>
            <MenuSolicitante />

            <Grid container
                direction="column"
                alignItems="center"
                justify="center"
                spacing={1}
            >

                <Grid item>
                    <Card1 className={classes.card} />
                </Grid>

                <Grid item>
                    <Card2 className={classes.card} />
                </Grid>

            </Grid>
        </Container>
    );
}

export default withStyles(styles)(PerfilSolicitante);