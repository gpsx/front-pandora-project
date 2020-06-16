import React from 'react'
import { AuthContext } from '../../../main/ProvedorAutenticacao'

import Menu from '../../../components/MenuSolicitante'
import Erro from '../../../components/AlertaErro'
import Container from '../../../components/Container';
import TabSolicitante from './TabSolicitante'
import { Grid, withStyles } from '@material-ui/core';

import ListaSolicitacoes from './ListaSolicitacoes'
import solicitacoesService from '../../../service/solicitacoesService';

const styles = (theme) => ({
    paper: {
        width: '1100px',
        heigth: 'auto',
    }
});

class PainelSolicitante extends React.Component {
    id = this.context.getId();
    tipo = this.context.tipoUsuario();

    state = {
        solicitados: [],
        aprovados: [],
        execucao: [],
        finalizados: [],
        cancelados: [],
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

    getCancelados = () => {
        solicitacoesService.getCancelados(this.id, this.tipo)
            .then(response => {
                this.setState({ cancelados: response.data })
            })
    }

    componentDidMount() {
        this.getSolicitados();
        this.getAprovados();
        this.getExecucao();
        this.getFinalizados();
        this.getCancelados();
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
                            status={"EXECUCAO"} />)
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
                                status={"FINALIZADO"} />)
                    }
                }
            },
            {
                title: "CANCELADOS",
                content: () => {
                    if (this.state.cancelados.length === 0) {
                        return (<Erro mensagem="Você ainda não teve serviços finalizados" />)
                    } else {
                        return (
                            <ListaSolicitacoes
                                solicitacoes={this.state.cancelados}
                                status={"CANCELADO"} />)
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
                    className={classes.container}
                >
                    <Grid item className={classes.paper}>
                        <TabSolicitante tabs={this.tabs} />
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

PainelSolicitante.contextType = AuthContext;
export default withStyles(styles)(PainelSolicitante);