import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../../components/Typography';
import ImgFundoLogo from './../../assets/fundo-cubo.jpg'
import QuemSomosLayout from './QuemSomosLayout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';





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
    left: '100%',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },

  title: {
      color: 'black',
      
  }
  
});

function QuemSomos(props) {
  const { classes } = props;

  return (

      /* Posicionar "Quem somos" title*/
    
    <QuemSomosLayout backgroundClassName={classes.background}>
      <Container className={classes.container}>
         <img style={{ display: 'none' }} src={ImgFundoLogo} alt="increase priority" />
         <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Quem Somos?
        </Typography>
           <Grid item xs={12} md={6}>
             
        </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" marked="right" className={classes.h6} component='h6'>
                Com o objetivo de ajudar trabalhadores informais em divulgar e facilitar seu trabalho, o site Pandora foi criado tanto para esses prestadores quanto para quem usufrui desse tipo de serviço. O projeto veio de uma idéia da equipe, constituida por universitários da faculdade Bandtec, onde a proposta era criar uma "uberização" dos variados serviços prestados, sem precisar sair da plataforma . A microempresa até o momento encontra-se com o site em Beta, porém já está disponível para uso. Os próximos passos, serão um investimento maior na segurança e na construção de um aplicativo.
              </Typography>
        </Grid>
      </Container>
    </QuemSomosLayout>
     
  );

}

QuemSomos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuemSomos);
