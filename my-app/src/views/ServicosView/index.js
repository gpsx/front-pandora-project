import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
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
        width: '100%'
    }
});

function ChangeRegister(props) {

    const { classes } = props;
    const [atualizando, setAtual] = useState(false)
    const [titulo, setTitulo] = useState('testinho')

    const id = () => {
        return props.match.params.id;
    }

    useEffect(() => {
        if (id() != null) {
            setAtual(true);
        }
    }, [])

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
                    <FormServices
                        titulo={props.titulo}
                        descricao={props.descricao}
                        idCateg={props.idCateg}
                        id={id()}
                        atualizando={atualizando}
                        className={classes.form} />
                    <br />
                </div>
            </Paper>
            <br />

            <Footer />
        </Grid>
    );
}

export default withRouter(withStyles(styles)(ChangeRegister));