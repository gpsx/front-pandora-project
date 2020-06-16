import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import MenuPrestador from '../../components/MenuPrestador';
import Container from '../../components/Container';
import ListaAvaliacoes from './ListaAvaliacoes';

import avaliacoesService from '../../service/avaliacoesService'
import { AuthContext } from '../../main/ProvedorAutenticacao';

const styles = (theme) => ({
    paper: {
        marginTop: '-1.8%',
        marginLeft: '23%',
        width: '800px',
        height: '810px'
    },
    h1: {
        marginLeft: '2px',
        lineHeight: '25px',
        fontSize: '14px',
    },
    avaliacoes: {
        width: '75%',
        height: 'auto',
    }
});

class Avaliacoes extends React.Component {
    id = this.context.getId();

    state = {
        data: []
    }

    componentDidMount() {
        avaliacoesService.byId(this.id)
            .then(response => {
                this.setState({ data: response.data });
            })
    }

    render() {
        const { classes } = this.props;

        return (
            <Container>
                <MenuPrestador />
                <Grid container justify="center" direction="row" spacing={6}>
                    <Grid item className={classes.avaliacoes}>
                        <div className={classes.h1}>Minhas Avaliações</div>
                        {this.state.data.length > 0 ? (
                            <ListaAvaliacoes avaliacoes={this.state.data} />
                        ) : (
                                <Alert severity="error">
                                    Você ainda não foi avaliado, continue trabalhando!
                                </Alert>
                            )}
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

Avaliacoes.contextType = AuthContext;
export default withStyles(styles)(Avaliacoes);