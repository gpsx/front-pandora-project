import React from 'react'
import { withStyles, Grid  } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MenuPrestador from '../../components/MenuPrestador.js';
import ListaServicos from './ListaServicos.js'
import Alert from '@material-ui/lab/Alert';

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

class MeuServico extends React.Component {

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

    naoEncontrado() {
        this.setState({ servicos: [], alerta: true })
    }

    render() {

        const { classes } = this.props;

        return (
            <Container className={classes.container}>
                <MenuPrestador />
                <Grid container justify="center" direction="row" spacing={6}>

                <div className={classes.div}>
                    <h1 className={classes.titulo}>Meus Serviços</h1>
                </div> 

            <Paper className={classes.paper}>
                <Grid item>
                    <div className={classes.adicionar}>
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
                        <BotaoAdicionar />
                        <FormDialogAvaliar />
                    </div>
                </Grid>
            </Paper>
            <br /><br />
            <Footer className={classes.footer} />
                </Grid>
            </Container>
        );
    }
}


export default withStyles(useStyles)(MeuServico);