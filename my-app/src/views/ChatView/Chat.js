import React from 'react';
import { socketServer } from "./../../utils/index"
import { AuthContext } from '../../main/ProvedorAutenticacao';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper, Grid, Divider, TextField } from '@material-ui/core';
import { List, ListSubheader } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import LocalStorage from '../../service/localStorage'

import ListaConversa from './ListaConversa'

const socket = socketServer;

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
                "&:hover": { backgroundColor: "#696969" }
            }
        },
        MuiInput: {
            underline: {
                "&:after": { borderBottom: "2px solid #0B3C5D", }
            }
        }
    }
});

class ChatPandora extends React.Component {
    idUsuario = LocalStorage.obterCpf();

    constructor(props) {
        super(props)

        this.state = {
            empty: "",
            currentMessage: "",
            title: "",
            chatId: '',
            conversa: [],
        }
    }

    componentDidMount() {
        this.setListener()
        this.setState({ chatId: this.props.Conversation.chatId })
        this.setState({ title: this.props.Conversation.title })
        this.setState({ conversa: this.props.Conversation.chat });
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({ chatId: this.props.Conversation.chatId });
            this.setState({ conversa: this.props.Conversation.chat });
            this.setState({ title: this.props.Conversation.title });
        }
    }

    setListener = () => socket.on("new-msg", (data) => {
        this.setState({ conversa: [...this.state.conversa, data] })
    });

    sendMessage = () => {
        let newMessage = {
            chatId: this.state.chatId,
            userId: this.idUsuario,
            mensagem: this.state.currentMessage,
            hora: new Date().toLocaleString()
        }
        this.setState({ currentMessage: "" })
        this.setState({ conversa: [...this.state.conversa, newMessage] })
        socket.emit("msg", newMessage)
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

ChatPandora.contextType = AuthContext;
export default withStyles(styles)(ChatPandora);