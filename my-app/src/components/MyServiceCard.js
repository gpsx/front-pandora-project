import React  from "react";
import { withRouter } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Card, CardContent } from "@material-ui/core";
import { CardMedia, Divider, Box} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import { DialogActions,  DialogTitle } from '@material-ui/core';
import servicesService from '../service/servicesService'

const useStyles = makeStyles({
  root: {
    display: "flex",
    maxHeight: 130
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
    margin: 15,
    borderRadius: "5%"
  },
  button: {
    alignSelf: "flex-end",
    width: "20%",
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

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      textPrimary: {
        color: "#0B3C5D"
      }
    },
  }
})

function ServiceCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editar = () => {
    props.history.push(`/service/${props.id}`);
  }

  const excluir = () => {
    servicesService.deleteService(props.id)
      .then(response => {
        handleClose();
        window.location.reload();
        props.alert("Serviço excluido", "success");
      }).catch(err => {
        handleClose()
        props.alert("Erro ao excluir servico", "error")
      });
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          className={classes.cover}
          alt={props.name}
          image={props.image}
          title={props.name}
        />
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <Box flexGrow={1}>
          <CardContent>
            <Box className={classes.root} alignItems="center">
              <Typography variant="h6" component="h3">
                {props.name}
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {props.avaliationText}
            </Typography>
            <Box className={classes.root} flexDirection="row-reverse">
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" className={classes.button} onClick={editar}>
                  Editar
              </Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleClickOpen}>
                  Excluir
              </Button>
              </ThemeProvider>
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
          <Button onClick={excluir} color="primary">
            Sim
          </Button>
          <Button onClick={handleClose} color="primary">
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withRouter(ServiceCard);
