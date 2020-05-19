import React from 'react';
import { withStyles, Grid, Hidden} from '@material-ui/core';
import MenuSolicitante from './../../components/MenuSolicitante';
import Footer from './../../components/Footer';
import Card1 from './Card1/index';
import Card2 from './Card2/index';


const styles = (theme) => ({
    card1: {
        marginLeft: '20%',
        width: '60%',
        height: '300px',
    },
    card2: {
        marginTop: '0.5%',
        marginLeft: '20%',
        width: '60%',
        height: '300px',
    },


});

function PerfilSolicitante(props) {

    const { classes } = props;

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}
            >
            <Grid><MenuSolicitante /></Grid>

                <Grid item>
                   
                <Card1 className={classes.card1}/>

                </Grid>

                <Grid item>
                    
                <Card2 className={classes.card2}/>

                </Grid>

                <br/>
            <Footer/>
        </Grid>
    );
}

export default withStyles(styles)(PerfilSolicitante);