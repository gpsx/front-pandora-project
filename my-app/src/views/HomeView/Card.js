import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardLayout from './CardLayout';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
// Imagens
import naoGostei from "./../../assets/naoGostei.jpg";
import seguranca from "./../../assets/seguranca.jpg";
import duvida from "./../../assets/duvida.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    position: 'relative',
    display: 'flex',
    flexDirection: 'columm',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
    root: {
      minWidth: 275,
    },
  },
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <CardLayout>
      <div>
        <Typography variant="subtitle1" gutterBottom>
        </Typography>
        <Grid container spacing={9}>
          <Grid item xs={4}>
            <Grid item>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="160"
                    image={seguranca}
                    title="Foto demonstrando segurança"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      É seguro?
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Damos a você a capacidade de reportar qualquer usuário que te derespeite ou ofenda,
                      e dependendo da situação pode ocorrer até a exclusão desse usuário da plataforma.
                      Aproveite o nosso chat e tenha uma boa conversa antes de agendar o serviço. Futuramente será colocado um
                      botão do pânico, para que você se sinta ainda mais seguro.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid item>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="160"
                    image={naoGostei}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Não gostei, e agora?
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Não gostou de algum prestador, faça a sua avaliação de maneira sincera, e procure outro do qual possa preencher seus requisitos.
                      Converse bastante antes de agendar, é bom para entender se é realmente esse prestador que você deseja. Haverá tantos outros prestadores
                      que pode te ajudar.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid item>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="160"
                    image={duvida}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      O que eu faço?
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Após o cadastro, caso você seja solicitante, procure prestadores que satisfaçam a sua necessidade.
                      Caso seja prestador, coloque os serviços de você presta, de maneira detalhada, para que os possíveis clientes te achem, e espere as solicitações,
                      futuramente será adicionado o impulsionamento do perfil.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </CardLayout>
  );
}
