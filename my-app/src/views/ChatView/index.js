import React, { useState } from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import MenuPrestador from '../../components/MenuPrestador';
import Container from '../../components/Container';
import Mensagens from './Mensagens';
import ChatPandora from './Chat';
import io from "socket.io-client";

const socket = io("http://localhost:4001");

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
    }
});

function Chat(props) {

    const { classes } = props;

    const [id, setId] = useState(null);

    const [conversation, setConversation] = useState({
        chat: [],
        title: ""
    });

    const changeId = (novoId) => {
        socket.emit("getConversation", novoId)
        socket.on("selectedConversation", (data) => {
            let title = data.users[0].nome;
            setConversation({
                title,
                chat: data.chat
            })
            setId(data.id);
        })
        console.log("ATUALIZOU")
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
                                <Mensagens changeId={changeId.bind(this)} />
                            </Paper>
                        </Grid>

                        <Grid item xs={8}>
                            <Paper className={classes.paperChat}>
                                {id === null ? (
                                    <Paper>
                                        TELA VAZIA
                                    </Paper>
                                ) : (
                                        <ChatPandora Conversation={conversation} />
                                    )}

                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default withStyles(styles)(Chat);