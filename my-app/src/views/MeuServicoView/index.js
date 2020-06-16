import React from 'react';
import { withStyles, Grid, Container } from '@material-ui/core';
import MenuPrestador from './../../components/MenuPrestador';
import BotaoAdicionar from './../../components/AddButton'
import AlertaErro from './../../components/AlertaErro';
import ListaServicos from './ListaServicos'
import service from '../../service/otherService'
import LocalStorage from '../../service/localStorage'
import Alerta from '../../components/Alerta';

const styles = (theme) => ({
    container: {
        marginTop: '5%',
        paddingTop: '50px',
        marginBottom: '2%',
    },
    adicionar: {
        position: "relative",
        marginLeft: "90%",
        marginBottom: '10px',
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
    div: {
        width: '100%'
    }
});

class MeuServico extends React.Component {

    id = LocalStorage.obterIdUsuario();

    state = {
        servicos: [],
        alert: false,
        severity: '',
        message: '',
    }

    componentDidMount() {
        service.meusServicos(this.id)
            .then(response => {
                console.log(response.data);

                this.setState({ servicos: response.data });
            })
    }

    fecharAlerta() {
        this.setState({ alert: false })
    };

    alerta(message, status) {
        console.log('chegou aqui')
        this.setState({
            alert: true,
            severity: status,
            message: message
        })
    }

    render() {

        const { classes } = this.props;

        return (
            <Container className={classes.container}>
                <MenuPrestador />

                <Grid container justify="center" direction="row" spacing={6}>

                    <Grid item className={classes.popular}>
                        <div className={classes.h1}>Meus serviços</div>
                        {this.state.servicos.length > 0 ? (

                            <ListaServicos alert={this.alerta.bind(this)}
                                servicos={this.state.servicos} />
                        ) : (
                                <AlertaErro
                                    mensagem={"Você não possui serviços cadastrados, cadastre um agora!"} />
                            )}

                    </Grid>

                    <div className={classes.adicionar}>
                        <BotaoAdicionar />
                    </div>

                </Grid>

                <Alerta
                    open={this.state.alert}
                    message={this.state.message}
                    severity={this.state.severity}
                    close={this.fecharAlerta.bind(this)} />

            </Container>
        )
    }
}


export default withStyles(styles)(MeuServico)