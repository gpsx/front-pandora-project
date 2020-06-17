import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from '../main/ProvedorAutenticacao';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Card, CardContent } from "@material-ui/core";
import { CardMedia, Divider, Box, Avatar } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Star from '@material-ui/icons/Star';
import service from './../service/otherService';

const useStyles = makeStyles({
  root: {
    display: "flex"
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
  pos: {
    marginBottom: 12
  },
  cover: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: "5%"
  },
  button: {
    alignSelf: "flex-end",
    width: "100%",
    margin: 10,
    backgroundColor: '#0B3C5D',
    '&:hover': {
      backgroundColor: '#328CC1',
    },
  },
  divider: {
    margin: 10
  },
  avatar: {
    height: 15,
    width: 15,
    alignSelf: "flex-center",
    margin: 3
  },
  star: {
    color: "#FFD700",
    height: 20
  }
});

export default function ServiceCard(props) {
  const context = useContext(AuthContext);

  const [descricao, setMsg] = useState();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [avaliation, setAvaliation] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendSolicitation = () => {
    service.cadastrarSolicitacao(props.id, context.getId(), descricao)
      .then(response => {
        handleClose()
        props.alertar("Sua solicitação foi enviada!", "success")
      })
      .catch(err => {
        handleClose()
        props.alertar("Erro ao enviar solicitação", "error")
      })
  };

  useEffect(() => {
    service.pegarAvaliacao(props.id)
      .then(response => {
        try {
          let avaliacao = response.data.toFixed(1);
          setAvaliation(avaliacao);
        } catch (erro) {
          setAvaliation(3);
        }
      })
  }, [props.id])


  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          className={classes.cover}
          alt={props.title}
          image={props.imgService}
          title={props.title}
        />
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <Box flexGrow={1}>
          <CardContent>
            <Box className={classes.root} alignItems="center">
              <Typography variant="h6" component="h3">
                {props.title}
              </Typography>
              {bull}
              <Avatar
                alt={props.providerName}
                src={props.imgProvider}
                className={classes.avatar}
              />
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.providerName}
              </Typography>
              {bull}
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {props.providerRole}
              </Typography>
            </Box>
            <Box className={classes.root} alignItems="center">
              <Star className={classes.star} />
              <Typography variant="body2" component="p" className={classes.star}>
                {avaliation}
              </Typography>
            </Box>
            <Typography variant="body2" component="p">
              {props.serviceDescription}
            </Typography>
          </CardContent>
        </Box>
        <Box className={classes.root} flexDirection="row-reverse">
          <Button variant="contained" color="primary" className={classes.button} onClick={handleClickOpen}>
            Solicitar
        </Button>
        </Box>
      </Card>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Solicitação</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Envie uma mensagem com a descrição do serviço desejado
        </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Descrição"
            type="email"
            fullWidth
            onChange={e => setMsg(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={sendSolicitation} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
