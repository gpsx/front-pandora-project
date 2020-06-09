
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../../components/Typography';
import TexturaFundo from './../../assets/textura.png';
import Avatar from '@material-ui/core/Avatar';

//Imagens
import ImgSueto from './../../assets/FelipeSueto.jpg'
import ImgVitoria from './../../assets/VitoriaCristina.jpeg'
import ImgGiulia from './../../assets/GiuliaMaia.jpeg'
import ImgNicolle from './../../assets/NicolleCruz.jpg'
import ImgGuilherme from './../../assets/GuilhermeSantos.jpeg'
import ImgJuliana from './../../assets/JulianaBezerra.jpeg'

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#ffff',
    overflow: 'hidden',
    foto: {
      display: 'inline-block',
      width: theme.spacing(16),
      height: theme.spacing(16),
  },
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

  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },

  foto:{
    width:theme.spacing(18),
    height:theme.spacing(18)
  }
});

function Equipe(props) {
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
          Equipe
        </Typography>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
            <div className={classes.item}>
                  <Avatar src={ImgSueto} className={classes.foto}/>
                   <Typography variant="h6" align="center">
                    Felipe Massaru
                  </Typography>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
            <div className={classes.item}>
                  <Avatar src={ImgVitoria} className={classes.foto}/>
                   <Typography variant="h6" align="center">
                    Vitoria Cristina
                  </Typography>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
            <div className={classes.item}>
                  <Avatar src={ImgGiulia} className={classes.foto}/>
                   <Typography variant="h6" align="center">
                    Giulia Maia
                  </Typography>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
            <div className={classes.item}>
                  <Avatar src={ImgNicolle} className={classes.foto}/>
                   <Typography variant="h6" align="center">
                    Nicolle Cruz
                  </Typography>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
            <div className={classes.item}>
                  <Avatar src={ImgGuilherme} className={classes.foto}/>
                   <Typography variant="h6" align="center">
                    Guilherme Santos
                  </Typography>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
            <div className={classes.item}>
                  <Avatar src={ImgJuliana} className={classes.foto}/>
                   <Typography variant="h6" align="center">
                    Juliana Bezerra
                  </Typography>
                </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

Equipe.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Equipe);