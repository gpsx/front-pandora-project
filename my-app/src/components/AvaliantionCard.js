import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { CardMedia, Divider, Box } from "@material-ui/core";
import Star from '@material-ui/icons/Star';

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
  pos: {
    marginBottom: 12
  },
  cover: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: "5%"
  },
  button: {
    alignSelf: "flex-end",
    width: "100%",
    margin: 10,
    backgroundColor: '#0B3C5D',
    '&:hover': {
      backgroundColor: '#328CC1',
    },
  },
  divider: {
    margin: 10
  },
  avatar: {
    height: 15,
    width: 15,
    alignSelf: "flex-center",
    margin: 3
  },
  star: {
    color: "#FFD700",
    height: 20
  }
});

export default function ServiceCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          className={classes.cover}
          alt={props.name}
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
            <Box className={classes.root} alignItems="center">
              <Typography variant="body2" component="h6">
                Nota:
              </Typography>
              <Star className={classes.star} />
              <Typography variant="body2" component="p" className={classes.star}>
                {props.avaliation}
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" gutterBottom>
                {props.avaliationText}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}
