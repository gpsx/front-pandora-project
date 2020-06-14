import React from 'react'
import { withStyles, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MenuSolicitante from '../../components/MenuSolicitante.js';
import ListaServicos from './ListaServicos.js'
import Alert from '@material-ui/lab/Alert';
import Filtro from './filtro'

import service from '../../service/otherService'
import servicesService from '../../service/servicesService'

const useStyles = theme => ({
    container: {
        marginTop: '5%',
        paddingTop: '50px',
        marginBottom: '2%',
    },
    popular: {
        width: '75%',
        height: 'auto',
    },
    h1: {
        marginLeft: '2px',
        lineHeight: '25px',
        fontSize: '14px',
    },
    erro: {
        marginTop: '5px',
    }
});

class HomeSolicitante extends React.Component {

    state = {
        servicos: [],
        alerta: false,
    }

    carregarServicos = () => {
        service.getServicosTodos()
            .then(response => {
                this.setState({
                    servicos: response.data,
                    alerta: false
                })
            }).catch(err => {
                console.log("Erro")
            })
    }

    componentDidMount() {
        this.carregarServicos();
    }

    filtrar = (filtro, valor) => {
        if (filtro == null) {
            this.carregarServicos();
        } else if (filtro === 'categoria') {
            this.filtroCategoria(valor);
        }else if(filtro === 'palavra'){
            this.filtroTexto(valor)
        }
        console.log(filtro)
        console.log(valor)
    }

    filtroRating = (rating) => {

    }

    filtroTexto = (texto) => {
        servicesService.filtrarPorPalavra(texto)
            .then(response => {
                if (!response.data) {
                    this.naoEncontrado();
                } else {
                    this.setState({ servicos: response.data, alerta: false })
                }
            })
    }

    filtroCategoria = (id) => {
        service.filtrarServico(id)
            .then(response => {
                if (!response.data) {
                    this.naoEncontrado();
                } else {
                    this.setState({ servicos: response.data, alerta: false })
                }
            }).catch(err => {
                console.log(err)
            })
    }

    naoEncontrado() {
        this.setState({ servicos: [], alerta: true })
    }

    render() {

        const { classes } = this.props;

        return (
            <Container className={classes.container}>
                <MenuSolicitante />

                <Grid container justify="center" alignItems="center" direction="column" spacing={6}>

                    <Grid item className={classes.popular}>

                        <Grid container justify="center" direction="column" spacing={4}>

                            <Grid item>
                                <div className={classes.h1}>Filtrar por:</div>
                                <Filtro globalChanges={this.filtrar.bind(this)} />
                            </Grid>

                            <Grid item>
                                <div className={classes.h1}>Serviços Populares</div>
                                <ListaServicos servicos={this.state.servicos} />
                                {this.state.alerta ? (
                                    <div className={classes.erro}>
                                        <Alert severity="error">
                                            Nenhum servico encontrado!
                                        </Alert>
                                    </div>
                                ) : (
                                        <div>

                                        </div>
                                    )
                                }

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}


export default withStyles(useStyles)(HomeSolicitante);