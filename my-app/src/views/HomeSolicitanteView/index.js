import React from 'react'
import { withStyles, Grid  } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MenuSolicitante from '../../components/MenuSolicitante.js';
import ListaServicos from './ListaServicos.js'
import Alert from '@material-ui/lab/Alert';
import Filtro from './filtro'

import service from '../../service/otherService'

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
    last: {
        width: '30%',
        height: '100%',
    },
    img: {
        width: '200px',
        height: '200px',
    },
    h1: {
        marginLeft: '2px',
        lineHeight: '25px',
        fontSize: '14px',
    },
    paper1: {
        width: '100%',
        height: '300px',
    },
    filtros: {
        width: '55%',
        height: '30px',
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

    componentDidMount() {
        service.getServicosTodos()
            .then(response => {
                this.setState({ servicos: response.data, alerta: false })
            }).catch(err => {
                console.log("Erro")
            })
    }

    filtrar = (id) => {
        if (!id) {
            this.componentDidMount();
        }
        else {
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
    }

    lancarAlerta = (tipo, mensagem) => {

    }

    naoEncontrado() {
        this.setState({ servicos: [], alerta: true })
    }

    render() {

        const { classes } = this.props;

        return (
            <Container className={classes.container}>
                <MenuSolicitante />
                <Grid container justify="center" direction="row" spacing={6}>

                    <Grid item className={classes.popular}>
                        <Grid container justify="center" direction="column" spacing={4}>
                            <Grid item className={classes.servicos}>
                                <div className={classes.h1}>Filtrar por:</div>
                                <Filtro globalChange={this.filtrar.bind(this)} />
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
                            {/* <Grid item>
                                <div className={classes.h1}>Novos Serviços</div>
                                <ListaServicos servicos={this.state.servicos} />
                            </Grid> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}


export default withStyles(useStyles)(HomeSolicitante);