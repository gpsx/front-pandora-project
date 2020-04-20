/* eslint-disable no-use-before-define */
import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles, fade } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function LimitTags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" placeholder="Escolha as categorias" />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Eletricista'},
  { title: 'Encanador'},
  { title: 'Marceneiro'},
  { title: 'Pintor'},  
  { title: 'Chaveiro'},
  { title: 'Segurança'},
  { title: 'Confeiteiro'},
  { title: 'Motorista'},
  { title: 'Animador de festa'},
  { title: 'Cozinheiro'},
  { title: 'Coach'},
  { title: 'Babá'},
  { title: 'Cuidador de pets'},
  { title: 'Cuidador de pessoas idosas'},
  { title: 'Professor Particular'},
  { title: 'Programador'},
  { title: 'Fotógrafo'},
  { title: 'Músico'},
  { title: 'Sapateiro'},
  { title: 'Manicure'},
  { title: 'Cabeleireiro'},
  { title: 'Designer gráfico'},
  { title: 'Costureira'},
  { title: 'Maquiadora'},
  { title: 'Massagista'},
  { title: 'Assessor de eventos'},
];