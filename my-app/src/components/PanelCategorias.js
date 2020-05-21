import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: '50px',
  },
}));

const LimitTags = (props) => {

  const classes = useStyles();
  const { categorias } = props;

  return (
    <div className={classes.root}>
      <Autocomplete
        options={props.categorias}
        getOptionLabel={(option) => option.nomeServico}
        defaultValue={(props.default === null) ? [props.categoria[props.default]] : null}
        onChange={(event, value) => { props.changeCategoria(value) }}
        renderInput={(params) => (
          <TextField {...params} size="small" variant="outlined" placeholder="Escolha a categoria..." />
        )}
      />
    </div>
  );
}

export default LimitTags;
