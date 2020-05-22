import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { withStyles, Grid, Paper } from '@material-ui/core';
import Container from '../../components/Container';
import MenuPrestador from '../../components/MenuPrestador';
import Footer from '../../components/Footer';
import FormServices from './FormServices';
import servicesService from '../../service/servicesService';

const styles = (theme) => ({
    paper: {
        width: '40%',
    },
});

function ChangeRegister(props) {

    const { classes } = props;
    const [atualizando, setAtualizando] = useState(false)
    const [servico, setServico] = useState({})

    const id = () => {
        return props.match.params.id;
    }

    useEffect(() => {
        if (id() != null) {
            setAtualizando(true);
            servicesService.getServicoById(id())
                .then(response => {
                    setServico(response.data[0])
                })
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
                            servico={servico}
                            atualizando={atualizando}
                        />
                    </Paper>
                </Grid>

            </Grid>

            {/* <Footer /> */}
        </Container>

    );
}

export default withRouter(withStyles(styles)(ChangeRegister));