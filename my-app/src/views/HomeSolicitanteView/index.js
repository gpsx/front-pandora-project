import React from 'react'
import { withStyles, Grid, Paper} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MenuSolicitante from '../../components/MenuSolicitante.js';
import Popular from './PopularService.js';
import New from './NewService.js';
import Last from './LastService.js';

const useStyles = theme => ({
    container: {
        marginTop: '5%',
        marginLeft: '0.8%',
        marginBottom: '2%',

    },
    popular: {
        marginTop: '50px',
        width:'55%'
    },
    last:{
        marginTop:'50px',
        marginLeft:'6%',
        width:'30%',
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

class HomeSolicitante extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <Container className={classes.container}>
                <MenuSolicitante/>
                <Grid container justify="center" direction="row" spacing={1}>
                        <Grid item className={classes.popular}>
                            <div>Serviços Populares</div>
                            <Paper elevation={3}>
                                <Popular/>
                            </Paper>
                            <br/><br/>
                            <div>Novos Serviços</div>
                            <Paper elevation={3}>
                                <New/>
                            </Paper>     
                        </Grid>
                        <Grid item className={classes.last}>
                            <div>Últimos Serviços</div>
                            <Paper elevation={3}>
                                <Last/>
                            </Paper>    
                        </Grid>
                </Grid>

            </Container>
        );
    }
}


export default withStyles(useStyles)(HomeSolicitante);