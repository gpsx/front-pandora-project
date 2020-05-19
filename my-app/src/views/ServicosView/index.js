import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import MenuPrestador from '../../components/MenuPrestador';
import Footer from '../../components/Footer';
import FormServices from './FormServices';

const styles = (theme) => ({
    paper: {
        width: '38%',
        marginLeft: '30%',
        marginTop: '8%'
    },

    divForm: {
        marginLeft: '110px',
        marginTop: '10px',
    },

    form: {
        width:'100%'
    }

});

function ChangeRegister(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}
        >
            <Grid>
                <MenuPrestador />
            </Grid>

            <Paper className={classes.paper}>
                <div className={classes.divForm}>
                    <FormServices className={classes.form}/>
                    <br />
                </div>
            </Paper>
            <br />

            <Footer />
        </Grid>
    );
}

export default withStyles(styles)(ChangeRegister);