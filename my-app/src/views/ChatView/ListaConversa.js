import React, { useState } from 'react'
import LocalStorageService from '../../service/localStorage'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

// const idUsuario = LocalStorageService.obterIdUsuario();
const idUsuario = 1;

export default function ListaConversa({ conversas }) {

    const [key, setKey] = useState(1);

    return (
        <React.Fragment>
            {conversas.map(({ id, mensagem, hora }) => (
                <ListItem key={key}>
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align={id == idUsuario ? "right" : "left"} primary={mensagem}></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align={id == idUsuario ? "right" : "left"} secondary={hora}></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>

            ))}
        </React.Fragment>
    );
}