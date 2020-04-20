import React from 'react'
import { withStyles, Paper, Grid} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Menu from '../../../components/Menu.js';
import ChoiceContent from './ChoiceContent.js';

const useStyles = theme => ({
    container: {
        marginTop: '10%',
        marginLeft: '5%',

    },

    paper: {
        paddingTop: '3%',
        display: 'flex',
        flexWrap: 'wrap',
        width: '800px',
        height: '500px',
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
    stepper: {
        iconColor: 'blue',
        hoveredIconColor: 'blue',
        inactiveIconColor: 'blue',
        activeIconTextColor:'blue',
        iconTextColor:'',
        hoveredIconTextColor:'',
        inactiveIconTextColor:'blue',
  },

});


class Escolha extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <Container className={classes.container}>
                <Menu/>
                <Grid container justify="center" direction="row" spacing={1}>

                    <Grid item>
                        <Paper elevation={3} className={classes.paper}>
                            <ChoiceContent/>
                        </Paper>
                    </Grid>

                </Grid>

            </Container>
        );
    }
}


export default withStyles(useStyles)(Escolha);