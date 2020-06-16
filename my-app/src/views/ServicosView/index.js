import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { withStyles, Grid, Paper } from '@material-ui/core';
import Container from '../../components/Container';
import MenuPrestador from '../../components/MenuPrestador';
// import Footer from '../../components/Footer';
import FormServices from './FormServices';
import Snackbar from  './teste';

const styles = (theme) => ({
    paper: {
        width: '100%',
        maxWidth: '500px',
    },
});

function ChangeRegister(props) {

    const { classes } = props;
    const [atualizando, setAtualizando] = useState(false)

    const id = () => {
        return props.match.params.id;
    }

    useEffect(() => {
        if (id() != null) {
            setAtualizando(true);
        }
    }, [])
    
    return (

        <Container>
            <MenuPrestador />

            <Grid container
                direction="column"
                alignItems="center"
            >
                <Grid item className={classes.paper}>
                    <Paper >
                        <FormServices
                            id={id()}
                            atualizando={atualizando}
                        />
                    </Paper>
                </Grid>

            </Grid>

            <Snackbar />
            {/* <Footer /> */}
        </Container>

    );
}

export default withRouter(withStyles(styles)(ChangeRegister));