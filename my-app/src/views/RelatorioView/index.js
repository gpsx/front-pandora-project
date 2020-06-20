import React from 'react';
import { withStyles, Grid, Paper, Typography } from '@material-ui/core';

import MenuPrestador from '../../components/MenuPrestador';
import Container from '../../components/Container';
import BotaoBaixar from './../../components/DownloadButton'

import { AuthContext } from '../../main/ProvedorAutenticacao';

import fileService from '../../service/fileService';

const styles = (theme) => ({
    h1: {
        marginLeft: '2px',
        fontSize: '14px',
    },
    baixar: {
        position: "relative",
        marginLeft: "100%",
        marginTop: '10px',
    },
    frase: {
        width: '100%',
        height: 'auto',
    },
    relatorio: {
        marginTop: '-3%',
    },
    paper: {
        width: 'auto',
        padding: '10px',
    }
});

class Relatorio extends React.Component {
    id = this.context.getId();

    state = {
        data: [],
    }

    componentDidMount() {
        fileService.verArquivo(this.id)
            .then(response => {
                console.log(response.data)
                this.setState({ data: response.data.split("\n") });
            }).catch(err => {
                console.log(err.response)
                this.setState({ data: "RELATÓRIO VAZIO" });
            })
    }

    fazerDownload = () => {
        window.open(
            `http://localhost:8080/solicitacoes/gerar-arquivo/${this.id}`,
            '_blank');
    }

    render() {
        const { classes } = this.props;

        return (
            <Container>
                <MenuPrestador />
                <Grid container direction="row" spacing={6}>

                    <Grid item className={classes.frase}>
                        <div className={classes.h1}>Relatório de Serviços</div>
                    </Grid>

                    <Grid item className={classes.relatorio}>
                        <Grid container justify="flex-start" alignItems="flex-start" direction="column " spacing={1}>
                            <Paper elevation={3} className={classes.paper}>
                                {this.state.data.map((linha) => {
                                    return (<Grid item>{linha}</Grid>);
                                })}

                            </Paper>
                        </Grid>
                        <div className={classes.baixar}>
                            <BotaoBaixar fazerDownload={this.fazerDownload.bind(this)} />
                        </div>
                    </Grid>

                </Grid>
            </Container>
        );
    }
}

Relatorio.contextType = AuthContext;
export default withStyles(styles)(Relatorio);