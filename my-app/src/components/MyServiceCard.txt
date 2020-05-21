import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Card, CardContent } from "@material-ui/core";
import { CardMedia, Divider, Box, Avatar } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Star from '@material-ui/icons/Star';

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
  title: {
    fontSize: 12,
    margin: 0
  },
  pos: {
    marginBottom: 12
  },
  cover: {
    width: 150,
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
  }
});

export default function ServiceCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          className={classes.cover}
          alt={props.name}
          image={props.img}
          title={props.name}
        />
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <Box flexGrow={1}>
          <CardContent>
            <Box className={classes.root} alignItems="center">
              <Typography variant="h5" component="h3">
                {props.name}
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" gutterBottom>
                {props.avaliationText}
            </Typography>
            <Box className={classes.root} flexDirection="row-reverse">
              <Button variant="contained" color="primary" className={classes.button}>
                Editar
              </Button>
              <Button variant="contained" color="primary" className={classes.button} onClick={handleClickOpen}>
                Cancelar
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{props.cancelText}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar Serviço
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
