import React from 'react';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import Botao from '../../../components/EditButton';
import Foto from './Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function EditImage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={<Botao changeImage={props.changeImage.bind(this)} className={classes.botao} />}
      >
        <Foto className={classes.imagem} />
      </Badge>
    </div>
  );
}