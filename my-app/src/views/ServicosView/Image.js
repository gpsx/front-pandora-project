import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  rounded: {
    color: '#fff',
    backgroundColor: "#0B3C5D",
    width: '140px',
    height: '140px'
  },
  icon: {
    width: '70px',
    height: '70px'
  },

}));

export default function Image(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar src={props.defaultImage !== null ? props.defaultImage : null}
        variant="rounded" className={classes.rounded}>
        <AssignmentIcon className={classes.icon} />
      </Avatar>
    </div >
  );
}