import React from 'react';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import ListSubheader from '@material-ui/core/ListSubheader';
import io from "socket.io-client";
import ListaConversa from './ListaConversa'

const socket = io("http://localhost:4001");

const styles = (theme) =>({
    chatSection: {
        paddingTop: '10px',
        width: '124%',
        height: 'auto',
    },
    gridPadding: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    messageArea: {
        height: '65vh',
        overflowY: 'auto'
    },
    titulo: {
        backgroundColor: "#fff",
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '17px',
        fontWeight: '200',
    }
});

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

    constructor(props){
        super(props)
        this.state = {
            empty: "",
            currentMessage: "",
            conversation: [
                {
                    Person: "",
                    messages: [],
    
                }
            ],
            conversa : [
                {
                    id: "1",
                    mensagem: "Hey man, What's up ?",
                    hora: "09:30"
                },
                {
                    id: "2",
                    mensagem: "Hey, Iam Good! What about you ?",
                    hora: "09:32"
                },
                {
                    id: "1",
                    mensagem: "Cool. i am good, let's catch up!",
                    hora: "09:35"
                },
            ]
        }
    }
    componentDidMount() {
        this.setListener()
    }
    //isso tem que estar no state, ser atualizado pelo set listener


    setListener = () => socket.on("new-msg", (data) => {
        console.log(data);
        let newMessage = {
            id: "2",
            mensagem: data,
            hora: new Date().toLocaleString()
        }
        this.setState({conversa: [...this.state.conversa, newMessage]})
    })
    sendMessage = () => {
        let newMessage = {
            id: "1",
            mensagem: this.state.currentMessage,
            hora: new Date().toLocaleString()
        }
        this.setState({ currentMessage: "" })
        this.setState({conversa: [...this.state.conversa, newMessage]})
        socket.emit("msg", this.state.currentMessage)
    }

    render() {

        const { classes } = this.props;

        return (
            <Grid container component={Paper} className={classes.chatSection}>
                <Grid item xs={12} className={classes.gridPadding}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" className={classes.titulo} id="nested-list-subheader">
                                João
                                <Divider component="li" />
                             </ListSubheader>
                        }
                        className={classes.messageArea}>
                        <br />
                        <ListaConversa conversas={this.state.conversa} />
                    </List>
                    <Divider />
                    <Grid container style={{ padding: '20px' }}>
                        <Grid item xs={11}>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    id="text"
                                    value={this.state.currentMessage}
                                    label="Digite sua mensagem"
                                    fullWidth
                                    onChange={e => this.setState({ currentMessage: e.target.value })}
                                    />
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

export default withStyles(styles)(ChatPandora);