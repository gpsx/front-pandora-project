import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

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
  }
});

export default function ServiceCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.cover}
        alt={props.title}
        image={props.imgService}
        title={props.title}
      />
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <Box flexGrow={1}>
        <CardContent>
          <Box className={classes.root} alignItems="center">
            <Typography variant="h6" component="h3">
              {props.title}
            </Typography>
          </Box>
          <Box className={classes.root} alignItems="center">
            <Avatar
              alt={props.providerName}
              src={props.imgProvider}
              className={classes.avatar}
            />
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {props.providerName}
            </Typography>
            {bull}
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {props.providerRole}
            </Typography>
          </Box>
          <Typography variant="body2" component="p">
            {props.serviceDescription}
          </Typography>
        </CardContent>
      </Box>
      <Box className={classes.root} flexDirection="row-reverse">
        <Button variant="contained" color="primary" className={classes.button}>
          Solicitar
        </Button>
      </Box>
    </Card>
  );
}
