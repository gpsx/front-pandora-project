import React from 'react';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import Botao from '../../components/EditButton';
import Image from './Image';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },

}));

export default function ImageEdit(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={<Botao changeImage={props.changeImage.bind(this)} />}
      >
        <Image defaultImage={props.defaultImage} className={classes.imagem} />
      </Badge>
    </div>
  );
}