import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';

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
        marginLeft: "60%",
        marginBottom: '10px',
    },
    frase:{
        width: '100%',
        height: 'auto',
    },
    relatorio: {
        marginTop: '-3%',
        heigth: 'auto',
    },
    paper: {
        width: '70%',
        padding: '10px',
    }
});

class Relatorio extends React.Component {
    id = this.context.getId();

    state = {
        data: '',
    }

    componentDidMount() {
        fileService.verArquivo(this.id)
            .then(response => {
                console.log(response.data)
                this.setState({ data: response.data });
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
                <Grid container justify="center" alignItens="center" direction="row" spacing={6}>

                    <Grid item className={classes.frase}>
                        <div className={classes.h1}>Relatório de Serviços</div>
                    </Grid>

                    <Grid item className={classes.relatorio}>
                        <Paper elevation={3} className={classes.paper}>
                            {this.state.data}
                        </Paper>
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