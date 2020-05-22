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
        width: 'auto',
        margin: '10%'
    },
    divForm: {
        marginLeft: '110px',
        marginTop: '10px',
    },
    form: {
        width: '100%'
    }
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

    const globalChanges = () => {

    }

    return (

        <Container>
            <MenuPrestador />

            <Grid container
                direction="column"
                alignItems="flex-start"
                spacing={3}
            >
                <Paper className={classes.paper}>
                    <FormServices
                        servico={servico}
                        atualizando={atualizando}
                        globalChanges={globalChanges.bind(this)}
                        className={classes.form} />
                </Paper>
            </Grid>
            <Footer />

        </Container>

    );
}

export default withRouter(withStyles(styles)(ChangeRegister));