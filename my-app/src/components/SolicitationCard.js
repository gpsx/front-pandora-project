import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { CardMedia, Divider, Box, Button } from "@material-ui/core";
import solicitacoesService from '../service/solicitacoesService'

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
  cover: {
    width: 100,
    height: 80,
    margin: 10,
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
  cancel: {
    alignSelf: "flex-end",
    width: "20%",
    margin: 10,
    backgroundColor: '#C40233',
    '&:hover': {
      backgroundColor: '#808080',
    },
  },
  divider: {
    margin: 10
  },
});

export default function ServiceCard(props) {

  const classes = useStyles();
  
  const recarregar = () => {
    window.location.reload();
  }
  const aprovar = () => {
    solicitacoesService.aprovarSolicitacao(props.id)
      .then(recarregar())
      .catch(console.log('reprovado'))
  }

  const executar = () => {
    solicitacoesService.executarSolicitacao(props.id)
      .then(recarregar())
      .catch(console.log('erro'))
  }

  const cancelar = () => {
    solicitacoesService.cancelarSolicitacao(props.id)
      .then(recarregar())
      .catch(console.log('erro'))
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
              <Typography variant="h5" component="h3">
                {props.name}
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {props.requestText}
            </Typography>
            <Box className={classes.root} flexDirection="row-reverse">
              {
                props.serviceState === 'SOLICITADO' ?
                  (
                    <>
                      <Button variant="contained" color="primary" className={classes.button} onClick={aprovar}>
                        APROVAR
                      </Button>
                      <Button variant="contained" color="primary" className={classes.cancel} onClick={cancelar}>
                        DESCARTAR
                      </Button>
                    </>
                  ) : props.serviceState === 'APROVADO' ?
                    (
                      <Button variant="contained" color="primary" className={classes.button} onClick={executar}>
                        EXECUTAR
                      </Button>
                    ) : (
                      <>
                      </>
                    )
              }
              <Button variant="contained" color="primary" className={classes.button}>
                Chamar no Chat
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}
