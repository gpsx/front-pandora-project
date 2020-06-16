import React from 'react'
import SolicitationCard from './../../../components/SolicitationCard'
import { Grid } from '@material-ui/core';
import ImagemGenerica from './../../../assets/servicos/generico.jpg'

export default function ListaServicos(props) {

    const linhas = props.solicitacoes.map(solicitacao => {
        return (
            <Grid item>
                <SolicitationCard
                    id={solicitacao.id}
                    requestText={solicitacao.descricao}
                    name={solicitacao.fkSolicitante.nome}
                    idSolicitante={solicitacao.fkSolicitante.cpf}
                    serviceState={props.status}
                    img={solicitacao.fkSolicitante.imagem == null ? ImagemGenerica : solicitacao.fkSolicitante.imagem}
                />
            </Grid>
        )
    })

    return (
        <Grid container direction="column"
            spacing={1}>
            {linhas}
        </Grid>
    )
}