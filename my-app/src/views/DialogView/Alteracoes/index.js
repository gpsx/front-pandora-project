import React from 'react';
import { Grid } from '@material-ui/core';
import FormDialogSenha from './SenhaDialog';
import FormDialogEmail from './EmailDialog';
import FormDialogTelefone from './TelefoneDialog';
import FormDialogEndereco from './EnderecoDialog';

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