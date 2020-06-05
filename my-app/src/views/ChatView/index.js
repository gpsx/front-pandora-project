import React from 'react';
import { withStyles, Grid, Paper} from '@material-ui/core';
import MenuPrestador from '../../components/MenuPrestador';
import Container from '../../components/Container';
import Typography from '../../components/Typography';
import Teste from './Teste';
import ChatPandora from './Chat';

const styles = (theme) => ({
    paper:{
        marginTop: '-1.8%',
        marginLeft: '23%',
        width: '800px',
        height: '810px'
    },
    titulo:{
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '17px',
        fontWeight: '200',
        marginTop:'12%',
        marginLeft:'23%'
    },
    container:{
        display:'flex',
    },
    paperChat: {
        width:'60%'
    }
});

function Chat(props) {

    const { classes } = props;

    return (
        <Container>
            <MenuPrestador />
            <Grid container
                direction="row"
                justify="center"
                className={classes.container}
                alignItems="center"
                spacing={3}
            >
            
            <Grid item> 
                <Typography>
                    Pandora Chat
                </Typography>
            </Grid>
            <Grid item >
                    <Teste/>    
            </Grid>
            <Grid item>
                <Paper className={classes.paperChat}>
                    <ChatPandora/>
                </Paper>
            </Grid>

        </Grid>
        </Container>
    );
}

export default withStyles(styles)(Chat);