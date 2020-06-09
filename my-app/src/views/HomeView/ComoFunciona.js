
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../../components/Typography';
import TexturaFundo from './../../assets/textura.png';

import Cadastrar from './../../assets/fazer-cadastro.png'
import Escolher from './../../assets/escolher-profissional.png'
import Realizar from './../../assets/arrumar-servico.png'

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#ffff',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  image: {
    height: 70,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ComoFunciona(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={TexturaFundo}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Como funciona
        </Typography>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src={Cadastrar}
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Cadastre-se no aplicativo e pesquise pelo serviço que deseja
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src={Escolher}
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Verifique o perfil dos profissionais e escolha o que mais se identificar
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src={Realizar}
                  alt="check-icon"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Faça uma proposta e agende com o profissional, depois é só classificá-lo!
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

ComoFunciona.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComoFunciona);