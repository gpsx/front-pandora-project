import React, { useState, useEffect } from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import MenuPrestador from '../../components/MenuPrestador';
import Container from '../../components/Container';
import Mensagens from './Mensagens';
import ChatPandora from './Chat';
import { socketServer } from "./../../utils/index"
import LocalStorageService from '../../service/localStorage'

import Imagem from '../../assets/logo72.png'

const idUsuario = LocalStorageService.obterIdUsuario();
const socket = socketServer;

const styles = (theme) => ({
    titulo: {
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '24px',
        fontWeight: '200',
    },
    h1: {
        marginLeft: '8px',
        marginTop: '-2.8%',
        lineHeight: '5px',
        fontSize: '14px',
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

    const setListeners = () => {
        socket.on("selectedConversation", (data) => {
            let title = data.users[0].nome;
            for (let i = 0; i < data.users.length; i++) {
                if (data.users[i].id != idUsuario) {
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
                    if (chats[i].users[j].id != idUsuario) {
                        chats[i].otherUser = {
                            img: chats[i].users[j].img,
                            name: chats[i].users[j].nome
                        }
                    }
                }
            }
            console.log(chats);
            setChats(chats)
        })
    }

    const { classes } = props;

    const [id, setId] = useState(null);

    const [chats, setChats] = useState([]);

    const [conversation, setConversation] = useState({
        chat: [],
        chatId: -1,
        title: ""
    });

    useEffect(() => {
        console.log(idUsuario);
        socket.emit("getUserConversation", idUsuario)
        setListeners()
    }, []);

    const changeId = (novoId) => {
        socket.emit("getConversation", novoId)
    }

    return (
        <Container>
            <MenuPrestador />
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