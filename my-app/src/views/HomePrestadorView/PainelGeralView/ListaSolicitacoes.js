import React, { useState } from 'react'
import SolicitationCard from './../../../components/SolicitationCard'
import { Grid } from '@material-ui/core';

export default function ListaServicos(props) {

    const linhas = props.solicitacoes.map(solicitacao => {
        return (
            <Grid item>
                <SolicitationCard
                    id={solicitacao.id}
                    requestText={solicitacao.descricao}
                    name={solicitacao.fkSolicitante.nome}
                    serviceState={props.status}
                />
            </Grid>
        )
    })

    return (
        <Grid container direction="column"
            spacing={0}>
            {linhas}
        </Grid>
    )
}