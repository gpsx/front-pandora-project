import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import HomeLayout from './HomeLayout';
import ImgFundo from './../../assets/fundo-institucional.jpg'

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${ImgFundo})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
    backgroundColor: '#0B3C5D',
    color:{
      backgroundColor: '#ffff',
      borderColor: '#ffff',
      boxShadow: 'none',
    },
  },
  h5: {
    fontFamily: 'Roboto',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ApresentacaoHome(props) {
  const { classes } = props;

  return (
    <HomeLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={ImgFundo} alt="increase priority" />
      <Typography color="inherit" align="left" variant="h2" marked="center">
        Procurando um prestador de serviço?
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        <p>
          Entre em nossa plataforma e encontre o profissional
          < br />
          Que você está procurando!
        </p>
      </Typography>
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/#/register"
      >
        Cadastre-se
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Faça parte da nossa equipe!
      </Typography>
    </HomeLayout>
  );
}

ApresentacaoHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApresentacaoHome);