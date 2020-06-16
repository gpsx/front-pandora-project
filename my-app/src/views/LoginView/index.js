import React from 'react'
import { withStyles, Paper, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import LoginLogo from './LoginLogo';
import FormLogin from './FormLogin'

const useStyles = theme => ({
    container: {
        marginTop: '100px',
    },
    paper: {
        paddingTop: '18%',
        display: 'flex',
        flexWrap: 'wrap',
        width: '385px',
        height: '406px',
    },
});

class Login extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <Container className={classes.container}>

                <Grid container justify="center" direction="row" spacing={1}>

                    <Grid item>
                        <Paper elevation={3} className={classes.paper}>
                            <LoginLogo />
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper elevation={3} className={classes.paper}>
                            <FormLogin />
                        </Paper>
                    </Grid>

                </Grid>

            </Container>
        );
    }
}


export default withStyles(useStyles)(Login);