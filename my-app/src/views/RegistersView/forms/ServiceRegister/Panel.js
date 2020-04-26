import React, { useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

const LimitTags = (props) => {

  const classes = useStyles();
  const { categorias, changeCategoria } = props;

  return (
    <div className={classes.root}>
      <Autocomplete
        options={props.categorias}
        getOptionLabel={(option) => option.nomeServico}
        defaultValue={[categorias[1]]}
        onChange={(event, value) => { props.changeCategoria(value) }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" placeholder="Escolha as categorias" />
        )}
      />
    </div>
  );
}

export default LimitTags;
