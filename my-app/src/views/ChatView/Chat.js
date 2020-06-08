import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import ListSubheader from '@material-ui/core/ListSubheader';
import io from "socket.io-client";

const socket = io("http://localhost:4001");

const theme = createMuiTheme({
    overrides: {
        MuiFab: {
            secondary: {
                backgroundColor: "#0B3C5D",
                "&:hover": {
                    backgroundColor: "#696969"
                }
            }
        },
        MuiInput: {
            underline: {
                "&:after": {
                    borderBottom: "2px solid #0B3C5D",
                }
            }
        }
    }
});

class ChatPandora extends React.Component {

    state = {
        currentMessage: "",
        conversation: [
            {
                Person: "",
                messages: [],
                
            }
        ],
    }
    setListener = () => socket.on("new-msg", (data)=>{
        console.log(data);
    })
    sendMessage = () => {
        this.setListener()
        console.log(this.state.currentMessage);
        socket.emit("msg", this.state.currentMessage)
    }

    render () {

        const classes = {
            chatSection: {
                marginTop: '-0.5%',
                paddingTop: '10px',
                width: '130%',
                height: 'auto'
            },
            gridPadding: {
                paddingLeft: 20,
                paddingRight: 20,
            },
            messageArea: {
                height: '77.5vh',
                overflowY: 'auto'
            },
            titulo: {
                color: 'black',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontSize: '17px',
                fontWeight: '200',
            },
        
        };

        return (
            <Grid container component={Paper} className={classes.chatSection}>
                <Grid item xs={12} className={classes.gridPadding}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" className={classes.titulo} id="nested-list-subheader">
                                Fulano de tal
                    </ListSubheader>
                        }
                        className={classes.messageArea}>
                        <Divider component="li" />
                        <br />
                        <ListItem key="1">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="09:30"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="2">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="left" secondary="09:31"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="3">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="10:30"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                    <Divider />
                    <Grid container style={{ padding: '20px' }}>
                        <Grid item xs={11}>
                            <ThemeProvider theme={theme}>
                                <TextField 
                                id="text" 
                                label="Digite sua mensagem" 
                                fullWidth  
                                onChange={e => this.setState({ currentMessage: e.target.value })}/>
                            </ThemeProvider>
                        </Grid>
                        <Grid xs={1} align="right">
                            <ThemeProvider theme={theme}>
                                <Fab size="medium" color="secondary" aria-label="add" onClick={this.sendMessage}><SendIcon /></Fab>
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default ChatPandora;