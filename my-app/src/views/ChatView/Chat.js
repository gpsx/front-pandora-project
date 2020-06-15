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
import LocalStorageService from '../../service/localStorage'

const idUsuario = LocalStorageService.obterIdUsuario();
const socket = io("http://localhost:4001");

const styles = (theme) => ({
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


    constructor(props) {
        super(props)
        
        this.state = {
            empty: "",
            currentMessage: "",
            title: "",
            chatId:'',
            conversa: [],

        }
    }

    componentDidMount() {
        this.setListener()
        this.setState({ title: this.props.Conversation.title })
        this.setState({ conversa: this.props.Conversation.chat });
        console.log(this.state.conversa)
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState({chatId: this.props.Conversation.chatId});
            this.setState({ conversa: this.props.Conversation.chat });
        }
    }


    setListener = () => socket.on("new-msg", (data) => {
        console.log(data);
        let newMessage = {
            userId: "2",
            mensagem: data,
            hora: new Date().toLocaleString()
        }
        this.setState({ conversa: [...this.state.conversa, newMessage] })
    })
    sendMessage = () => {
        let newMessage = {
            userId: idUsuario,
            mensagem: this.state.currentMessage,
            hora: new Date().toLocaleString()
        }
        this.setState({ currentMessage: "" })
        this.setState({ conversa: [...this.state.conversa, newMessage] })
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
                                {this.state.title}
                                <Divider component="li" />
                            </ListSubheader>
                        }
                        className={classes.messageArea}>
                        <br />
                        <ListaConversa conversas={this.state.conversa} />
                    </List>
                    <Divider />
                    <Grid container style={{ padding: '20px' }}>
                        <Grid item={true} xs={11}>
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
                        <Grid item={true} xs={1} align="right">
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