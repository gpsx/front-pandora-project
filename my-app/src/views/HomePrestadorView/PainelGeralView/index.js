import React, { useState, useEffect } from 'react'
import Menu from '../../../components/MenuPrestador'
import { Grid, withStyles, Paper } from '@material-ui/core';
import TabPrestador from './TabPrestador'
import Container from '../../../components/Container';
import Erro from '../../../components/AlertaErro'
import localStorage from '../../../service/localStorage';
import solicitacoesService from '../../../service/solicitacoesService';
import ListaSolicitacoes from './ListaSolicitacoes'

const styles = (theme) => ({
    paper: {
        width: '1100px',
        height: 'auto',
    }
});

class PainelPrestador extends React.Component {
    id = localStorage.obterIdUsuario();
    tipo = localStorage.getUserType();

    state = {
        solicitados: [],
        aprovados: [],
        execucao: [],
        finalizados: [],
    }

    getSolicitados = () => {
        solicitacoesService.getSolicitados(this.id, this.tipo)
            .then(response => {
                this.setState({ solicitados: response.data })
            })
    }

    getAprovados = () => {
        solicitacoesService.getAprovados(this.id, this.tipo)
            .then(response => {
                this.setState({ aprovados: response.data })
            })
    }

    getExecucao = () => {
        solicitacoesService.getExecucao(this.id, this.tipo)
            .then(response => {
                this.setState({ execucao: response.data })
            })
    }

    getFinalizados = () => {
        solicitacoesService.getFinalizados(this.id, this.tipo)
            .then(response => {
                this.setState({ finalizados: response.data })
            })
    }

    componentDidMount() {
        this.getSolicitados();
        this.getAprovados();
        this.getExecucao();
        this.getFinalizados();
    }

    tabs = {
        pages: [
            {
                title: "SOLICITADOS",
                content: () => {
                    if (this.state.solicitados.length == 0) {
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
                    if (this.state.aprovados.length == 0) {
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
                    if (this.state.execucao.length == 0) {
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
                    if (this.state.finalizados.length == 0) {
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

export default withStyles(styles)(PainelPrestador);