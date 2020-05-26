import React from 'react';
import { withStyles, Grid, Paper, Container } from '@material-ui/core';
import MenuPrestador from './../../components/MenuPrestador';
import Footer from './../../components/Footer';
import BotaoAdicionar from './../../components/AddButton'
import FormDialogAvaliar from '../DialogView/Servicos/avaliar'
import Alert from '@material-ui/lab/Alert';
import ListaServicos from './ListaServicos'
import service from '../../service/otherService'
import LocalStorage from '../../service/localStorage'

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
    paper: {
        width: "50%",
        height: "400px",
        marginLeft: "20%",
        marginTop: "-19.5%"
    },
    footer: {
        marginBottom: "-1"
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
    }

    componentDidMount() {
        service.meusServicos(this.id)
            .then(response => {
                this.setState({ servicos: response.data });
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

                            <ListaServicos servicos={this.state.servicos} />
                        ) : (
                                <Alert severity="error">
                                    Você não possui serviços cadastrados, cadastre um agora!
                                </Alert>
                            )}

                    </Grid>

                    <div className={classes.adicionar}>
                        <BotaoAdicionar />
                    </div>

                </Grid>

                {/* <Footer className={classes.footer} /> */}
            </Container>


            // {/* <Paper className={classes.paper}>
            //         <Grid item>

            //         </Grid>
            //         <Grid item>
            //             <ListaServicos servicos={this.state.servicos} />
            //             <div className={classes.adicionar}>
            //                 
            //                 <FormDialogAvaliar />
            //             </div>
            //         </Grid>
            //     </Paper> */}
        )
    }
}


export default withStyles(styles)(MeuServico)