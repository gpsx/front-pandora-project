import React from 'react'
import { withStyles, Paper, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Menu from './../../components/Menu';
import IntroductionRegister from './IntroductionRegister'

const useStyles = theme => ({
    container: {
        marginTop: '10%',
        marginLeft: '5%',

    },

    paper: {
        paddingTop: '3%',
        marginLeft: '20%',
        display: 'flex',
        flexWrap: 'wrap',
        width: '50%',
        height: '100%',
    },

    img: {
        width: '200px',
        height: '200px',
    },

    h1: {
        marginTop: '25px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '80',
        lineHeight: '42px',
        fontSize: '36px',
    },
});


class SolicitanteCadastro extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <Container className={classes.container}>
                <Menu />
                <Grid container justify="center" direction="row" spacing={1}>

                    <Grid item>
                        <Paper elevation={3} className={classes.paper}>
                            <IntroductionRegister />
                            {this.props.children}
                        </Paper>
                    </Grid>

                </Grid>

            </Container>
        );
    }
}


export default withStyles(useStyles)(SolicitanteCadastro);