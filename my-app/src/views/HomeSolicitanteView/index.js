import React from 'react'
import { withStyles, Grid} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MenuSolicitante from '../../components/MenuSolicitante.js';
import Popular from './PopularService.js';
import New from './NewService.js';
import Last from './LastService.js';

const useStyles = theme => ({
    container: {
        marginTop: '5%',
        marginLeft: '-3%',

    },
    popular:{
        marginLeft:'-2px',
    },
    new:{
        marginLeft:'-5px',
    },
    last:{
        marginLeft:'-5px',
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

                    <Grid>
                        <Grid item>
                            <Popular className={classes.popular}/>
                        </Grid>

                        <Grid item>
                            <Last className={classes.last}/>
                        </Grid>
                    </Grid>
                    
                    <Grid item>
                        <New className={classes.new}/>
                    </Grid>

                </Grid>

            </Container>
        );
    }
}


export default withStyles(useStyles)(HomeSolicitante);