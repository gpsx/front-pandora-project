import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../../components/Typography';
import ImgFundoLogo from './../../assets/fundo-cubo.jpg'
import QuemSomosLayout from './QuemSomosLayout';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${ImgFundoLogo})`,
    backgroundColor: '#7fc7d9',
    backgroundPosition: 'center',

  },

  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    position: 'right',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  item: {
    display: 'flex',
    flexDirection: 'columm',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },

  h6: {
    fontFamily: 'Roboto',
    color: 'black',
    position: 'absolute',
    right: '0px',
    width: '50%',
    marginTop: '-100px',
  },

  title: {
    color: 'black',
    position: 'absolute',
    right: '230px',
    marginTop: '-190px',
  }

});

function QuemSomos(props) {
  const { classes } = props;

  return (
    <QuemSomosLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={ImgFundoLogo} alt="increase priority" />
      <Typography variant="h4" align="right" marked="center" className={classes.title} component="h2">
        Quem Somos?
          </Typography>
      <Typography variant="h6" className={classes.h6} component='h6'>
        Com o objetivo de ajudar trabalhadores informais em divulgar e facilitar seu trabalho, o site Pandora foi criado tanto para esses prestadores quanto para quem usufrui desse tipo de serviço. O projeto veio de uma idéia da equipe, constituida por universitários da faculdade Bandtec, onde a proposta era criar uma "uberização" dos variados serviços prestados, sem precisar sair da plataforma . A microempresa até o momento encontra-se com o site em Beta, porém já está disponível para uso. Os próximos passos, serão um investimento maior na segurança e na construção de um aplicativo.
          </Typography>
    </QuemSomosLayout>

  );

}

QuemSomos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuemSomos);
