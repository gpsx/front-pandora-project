import React from 'react'
import { withStyles, Paper, Grid} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import ChoiceContent from './ChoiceContent.js';

const useStyles = theme => ({
    container: {
        marginTop: '5%',
        marginLeft: '5%',
    },

    paper: {
        marginRight:theme.spacing(10),
        display: 'flex',
        flexWrap: 'wrap',
        width: '700px',
        height: '400px',
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
    choice: {
        marginRight:"20px",
  },

});


class Escolha extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <Container className={classes.container}>
                <Grid container justify="center" direction="row" spacing={1}>

                    <Grid item>
                        <Paper elevation={3} className={classes.paper}>
                            <ChoiceContent className={classes.choice}/>
                        </Paper>
                    </Grid>

                </Grid>

            </Container>
        );
    }
}


export default withStyles(useStyles)(Escolha);