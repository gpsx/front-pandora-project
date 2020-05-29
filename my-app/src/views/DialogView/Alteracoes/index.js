import React from 'react';
import { Grid } from '@material-ui/core';
import FormDialogSenha from './senha';
import FormDialogEmail from './email';
import FormDialogTelefone from './telefone';
import FormDialogEndereco from './endereco';

export default function Alteracoes(props) {

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}>

            <Grid item>
                < FormDialogTelefone />
                < FormDialogSenha />
                {props.endereco ? (< FormDialogEndereco />) : (<></>)}
                < FormDialogEmail />
            </Grid>

        </Grid >
    );
}