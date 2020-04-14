import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './../../components/Button';
import Typography from './../../components/Typography';
import ProductHeroLayout from './layout';
import ImgFundo from './../../assets/fundo-institucional.jpg'

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${ImgFundo})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
    backgroundColor: '#FFD700',
    color: 'black',
  },
  h5: {
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

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={ImgFundo} alt="increase priority" />
      <Typography color="inherit" align="left" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
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
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);