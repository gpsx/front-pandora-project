import React from 'react'
import Menu from '../../../components/MenuPrestador'
import TabPrestador from './TabPrestador'
import { Grid, withStyles, Paper } from '@material-ui/core';
import Container from '../Container'

const styles = (theme) => ({
    container: {
        marginTop: '10%',

    },
    paper: {
        width: '1100px'
    }
});

function PainelPrestador(props) {

    let tabs = {
        pages: [
            {
                title: "SOLICITADOS",
                content: () => {
                    return (
                        "Retornar algum conteúdo para essa tab"
                    );
                }
            },
            {
                title: "APROVADOS",
                content: () => {
                    return (
                        "Retornar algum conteúdo para essa tab"
                    );
                }
            },
            {
                title: "EM EXECUÇÃO",
                content: () => {
                    return (
                        "Retornar algum conteúdo para essa tab"
                    );
                }
            },
            {
                title: "FINALIZADOS",
                content: () => {
                    return (
                        "Retornar algum conteúdo para essa tab"
                    );
                }
            }
        ]
    };

    const { classes } = props;

    return (
        <>
            <Menu />
            <Container>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.container}
                >
                    <Grid item >
                        <Paper className={classes.paper}>
                            <TabPrestador tabs={tabs} />
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}

export default withStyles(styles)(PainelPrestador);