import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import MenuPrestador from '../../components/MenuPrestador';
import Container from '../../components/Container';
import Mensagens from './Mensagens';
import ChatPandora from './Chat';

const styles = (theme) => ({
    titulo: {
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '17px',
        fontWeight: '200',
        marginTop: '12%',
        marginLeft: '23%'
    },
    h1: {
        marginLeft: '-15px',
        lineHeight: '5px',
        fontSize: '14px',
    },
    container: {
        display: 'flex',
    },
    
    paperChat: {
        width: '80%'
    },
    paper: {
        width: "30%",
    }
});

function Chat(props) {

    const { classes } = props;

    return (
        <Container>
            <MenuPrestador />
            <Grid container direction="column" justify="flex-start" spacing={3}>
                <Grid item>
                    <div className={classes.h1}>Pandora Chat</div>
                </Grid>
                <Grid item>
                    <Grid container
                        direction="row"
                        justify="center"
                        className={classes.container}
                        alignItems="center"
                        spacing={4}
                    >
                        
                        <Paper className={classes.paper}>
                            <Grid item xs >
                                <Mensagens />
                            </Grid>
                        </Paper>
                    
                        <Grid item xs>
                            <Paper className={classes.paperChat}>
                                <ChatPandora />
                            </Paper>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </Container>
    );
}

export default withStyles(styles)(Chat);