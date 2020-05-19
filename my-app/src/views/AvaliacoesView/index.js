import React from 'react';
import { withStyles, Grid} from '@material-ui/core';
import MenuPrestador from '../../components/MenuPrestador';
import Footer from '../../components/Footer';

const styles = (theme) => ({


});

function Avaliacoes(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}
            >
            <Grid><MenuPrestador /></Grid>
                <br/>
            <Footer/>
        </Grid>
    );
}

export default withStyles(styles)(Avaliacoes);