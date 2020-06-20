import React, { useContext } from 'react'
import { AuthContext } from '../../main/ProvedorAutenticacao';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

export default function ListaConversa(props) {
    const context = useContext(AuthContext);
    const idUsuario = context.getCpf();

    return (
        <React.Fragment>
            {props.conversas.map(({ userId, mensagem, hora }, key) => (
                <ListItem key={key}>
                    <Grid container>
                        <Grid item={true} xs={12}>
                            <ListItemText align={userId === idUsuario ? "right" : "left"} primary={mensagem}></ListItemText>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <ListItemText align={userId === idUsuario ? "right" : "left"} secondary={hora}></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
            ))}
        </React.Fragment>
    );
}