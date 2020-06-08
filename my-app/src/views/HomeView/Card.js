import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import TexturaFundo from './../../assets/textura.png';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
    root: {
    minWidth: 275,
    },

  },

  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    position: 'relative',
    display: 'flex',
    flexDirection: 'columm',
    alignItems: 'center',
  },

  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },

  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
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
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
          image=""
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
          image="./../../assets/confiança.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </Grid>
        </Grid>
    
         
        </Grid>
    </div>
    </Container>
  );
}
