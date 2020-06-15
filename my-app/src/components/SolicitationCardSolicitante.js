import React, { useContext, useState } from "react";
import { AuthContext } from '../main/ProvedorAutenticacao';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { CardMedia, Divider, Box, Button } from "@material-ui/core";
import FormDialogAvaliar from './../views/DialogView/Servicos/avaliar';
import LocalStorageService from '../service/localStorage'
import Alerta from '../components/Alerta'
import { socketServer } from "./../utils/index"

const socket = socketServer;

const useStyles = makeStyles({
    root: {
        display: "flex",
        marginBottom: "-14px",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 12,
        margin: 0
    },
    cover: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: "5%"
    },
    button: {
        alignSelf: "flex-end",
        width: "20%",
        marginRight: '5px',
        backgroundColor: '#0B3C5D',
        '&:hover': {
            backgroundColor: '#328CC1',
        },
    },
    margin: {
        marginBottom: '10px',
    },
    divider: {
        margin: 10
    },
});

export default function ServiceCard(props) {

    const context = useContext(AuthContext);
    const classes = useStyles();

    const [openAlert, setOpenAlert] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("Usuário adicionado ao chat!");


    const createChat = () => {

        let array = [];
        let user1 = {
            nome: props.name,
            id: props.id,
            img: props.img,
        };
        let user2 = context.obterResumo();

        array.push(user1);
        array.push(user2);
        socket.emit("addConversation", array);

        setOpenAlert(true);
    }

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    className={classes.cover}
                    alt={"Imagem"}
                    image={props.img}
                    title={props.name}
                />
                <Divider orientation="vertical" flexItem className={classes.divider} />
                <Box flexGrow={1}>
                    <CardContent>
                        <Box className={classes.root} alignItems="center">
                            <Typography className={classes.margin} variant="h5" component="h3">
                                {props.name}
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                            {props.requestText}
                        </Typography>
                        <Box className={classes.root} flexDirection="row-reverse">
                            {
                                props.serviceState === 'EXECUCAO' ?
                                    (
                                        <FormDialogAvaliar id={props.id} />
                                    ) : (
                                        <>
                                        </>
                                    )
                            }
                            <Button size="small" variant="contained" color="primary" className={classes.button} onClick={createChat}>
                                Add ao chat
                            </Button>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </div>
    );
}
