import React from 'react';
import { AuthContext } from '../../../main/ProvedorAutenticacao';

import { Grid, withStyles } from '@material-ui/core';

import TabPrestador from './TabPrestador';
import Menu from '../../../components/MenuPrestador'
import Container from '../../../components/Container';
import Erro from '../../../components/AlertaErro'
import ListaSolicitacoes from './ListaSolicitacoes'

import solicitacoesService from '../../../service/solicitacoesService';

const styles = (theme) => ({
    paper: {
        width: '1100px',
        height: 'auto',
    }
});

class PainelPrestador extends React.Component {
    id = this.context.getId();
    tipo = this.context.tipoUsuario();

    state = {
        solicitados: [],
        aprovados: [],
        execucao: [],
        finalizados: [],
    }

    componentDidMount() {
        this.getSolicitados();
        this.getAprovados();
        this.getExecucao();
        this.getFinalizados();
    }

    getSolicitados = () => {
        solicitacoesService.getSolicitados(this.id, this.tipo)
            .then(response => {
                console.log(response.data)
                this.setState({ solicitados: response.data })
            }).catch(err => {
                console.log(err)
            })
    }

    getAprovados = () => {
        solicitacoesService.getAprovados(this.id, this.tipo)
            .then(response => {
                this.setState({ aprovados: response.data })
            }).catch(err => {
                console.log(err)
            })
    }

    getExecucao = () => {
        solicitacoesService.getExecucao(this.id, this.tipo)
            .then(response => {
                this.setState({ execucao: response.data })
            }).catch(err => {
                console.log(err)
            })
    }

    getFinalizados = () => {
        solicitacoesService.getFinalizados(this.id, this.tipo)
            .then(response => {
                this.setState({ finalizados: response.data })
            }).catch(err => {
                console.log(err)
            })
    }

    tabs = {
        pages: [
            {
                title: "SOLICITADOS",
                content: () => {
                    if (this.state.solicitados.length === 0) {
                        return (<Erro mensagem="Você não tem novas solicitações" />)
                    } else {
                        return (<ListaSolicitacoes
                            solicitacoes={this.state.solicitados}
                            status={"SOLICITADO"} />)
                    }
                }
            },
            {
                title: "APROVADOS",
                content: () => {
                    if (this.state.aprovados.length === 0) {
                        return (<Erro mensagem="Você não tem serviços em aprovação" />)
                    } else {
                        return (
                            <ListaSolicitacoes
                                solicitacoes={this.state.aprovados}
                                status={"APROVADO"} />)
                    }
                }
            },
            {
                title: "EM EXECUÇÃO",
                content: () => {
                    if (this.state.execucao.length === 0) {
                        return (<Erro mensagem="Sem servicos em execução" />)
                    } else {
                        return (< ListaSolicitacoes
                            solicitacoes={this.state.execucao}
                            status={"FINALIZAR"} />)
                    }
                }
            },
            {
                title: "FINALIZADOS",
                content: () => {
                    if (this.state.finalizados.length === 0) {
                        return (<Erro mensagem="Você ainda não teve serviços finalizados" />)
                    } else {
                        return (
                            <ListaSolicitacoes
                                solicitacoes={this.state.finalizados}
                                status={"ACABOU"} />)
                    }
                }
            }
        ]
    };

    render() {
        const { classes } = this.props;
        return (
            <Container>
                <Menu />
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item className={classes.paper}>
                        <TabPrestador tabs={this.tabs} />
                    </Grid>
                </Grid>
            </Container>
        )
    }


}

PainelPrestador.contextType = AuthContext;
export default withStyles(styles)(PainelPrestador);