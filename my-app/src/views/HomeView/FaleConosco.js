import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../../components/Typography';
import ImgFundo from './../../assets/suporte.jpg'
import FaleConoscoLayout from './FaleConoscoLayout';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${ImgFundo})`,
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
    color: 'white',
    position: 'absolute',
    right: '0px',
    width:'50%',
    marginTop: '-35px',
  },

  title: {
      color: 'white',
      position: 'absolute',
      right: '230px',
      marginTop: '-150px',
  }
  
});

function FaleConosco(props) {
  const { classes } = props;

  return (
    <FaleConoscoLayout backgroundClassName={classes.background}>
         <img style={{ display: 'none' }} src={ImgFundo} alt="increase priority" />
          <Typography variant="h4" align="right" marked="center" className={classes.title} component="h2">
            Fale Conosco!
          </Typography>
          <Typography variant="h6" className={classes.h6} component='h6'>
             Ainda tem dúvida?
             Converse conosco pelas nossas redes sociais e se for preciso temos uma equipe especialmente para atende-lo.
            
            <br/><br/>
             Gostaríamos de te ouvir!
             O seu feedback é muito importante para o avanço da aplicação, tantos pontos ótimos ou pontos á melhorar, precisamos
             saber como poderíamos deixar o Pandora para você.

            <br/><br/>
            E-mail: projetopandora.help@gmail.com
            <br/>
            Facebook: Projeto Pandora
            <br/>
            Telefone: (11) 94287-7049
            
          </Typography>
    </FaleConoscoLayout>
     
  );

}

FaleConosco.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FaleConosco);
