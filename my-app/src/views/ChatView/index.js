import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../main/ProvedorAutenticacao'
import { withStyles, Grid, Paper } from '@material-ui/core';
import MenuPrestador from '../../components/MenuPrestador';
import MenuSolicitante from '../../components/MenuSolicitante';
import Container from '../../components/Container';
import Mensagens from './Mensagens';
import ChatPandora from './Chat';
import { socketServer } from "./../../utils/index"

import Imagem from '../../assets/logo72.png'

const socket = socketServer;

const styles = (theme) => ({
    titulo: {
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '24px',
        fontWeight: '200',
    },
    container: {
        display: 'flex',
    },
    paperChat: {
        display: "flex"
    },
    paper: {
        display: "flex"
    },
    telaVazia: {
        display: "flex",
        height: '500px',
    },
    imgPandora: {
        height: '200px',
        width: '200px',
    }
});

function Chat(props) {

    const context = useContext(AuthContext);
    const userType = context.tipoUsuario();
    const idUsuario = context.getCpf();

    const { classes } = props;

    const [id, setId] = useState(null);
    const [chats, setChats] = useState([]);
    const [conversation, setConversation] = useState({
        chat: [],
        chatId: -1,
        title: ""
    });

    useEffect(() => {
        socket.emit("getUserConversation", idUsuario)
        const setListeners = () => {
            socket.on("selectedConversation", (data) => {
                let title = data.users[0].nome;
                for (let i = 0; i < data.users.length; i++) {
                    if (data.users[i].id !== idUsuario) {
                        title = data.users[i].nome
                    }
                }
                console.log(data, "selectedConversation");

                setConversation({
                    chatId: data.id,
                    title,
                    chat: data.chat
                })
                setId(data.id);
            })

            socket.on("userConversations", chats => {
                for (let i = 0; i < chats.length; i++) {
                    for (let j = 0; j < chats[i].users.length; j++) {
                        if (chats[i].users[j].id !== idUsuario) {
                            chats[i].otherUser = {
                                img: chats[i].users[j].img,
                                name: chats[i].users[j].nome,
                                online: chats[i].users[j].online
                            }
                        }
                    }
                }
                console.log(chats);
                setChats(chats)
            })
        }
        setListeners();
    }, [idUsuario]);

    const changeId = (novoId) => {
        socket.emit("getConversation", novoId)
    }

    return (
        <Container>
            {userType === "prestador" ? (
                <MenuPrestador />

            ) : (
                    <MenuSolicitante />
                )}
            <Grid container direction="column" justify="flex-start">
                <Grid item>
                    <Grid container
                        direction="row"
                        justify="center"
                        className={classes.container}
                        alignItems="center"
                        spacing={4}
                    >
                        <Grid item xs={4} >
                            <Paper>
                                <Mensagens changeId={changeId.bind(this)} chats={chats} userId={1} />
                            </Paper>
                        </Grid>

                        <Grid item xs={8}>
                            {id === null ? (
                                <Paper className={classes.telaVazia}>
                                    <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                                        <Grid item>
                                            <img src={Imagem} className={classes.imgPandora} />
                                        </Grid>
                                        <Grid item className={classes.titulo}>
                                            Selecione uma conversa!
                                        </Grid>
                                        <Grid item>
                                            Atenção: Nunca revele suas senhas e/ou números de cartão!
                                        </Grid>
                                    </Grid>
                                </Paper>
                            ) : (
                                    <Paper className={classes.paperChat}>
                                        <ChatPandora Conversation={conversation} />
                                    </Paper>
                                )}

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default withStyles(styles)(Chat);