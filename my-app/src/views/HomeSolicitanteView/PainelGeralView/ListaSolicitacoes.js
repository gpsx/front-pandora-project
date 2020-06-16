import React from 'react'
import SolicitationCard from './../../../components/SolicitationCardSolicitante'
import { Grid } from '@material-ui/core';
import ImagemGenerica from './../../../assets/servicos/generico.jpg'

export default function ListaServicos(props) {
    
    const linhas = props.solicitacoes.map(solicitacao => {
        return (
            <Grid item>
                <SolicitationCard
                    id={solicitacao.id}
                    requestText={solicitacao.descricao}
                    name={solicitacao.fkPrestador.nome}
                    idPrestador={solicitacao.fkPrestador.cpf}
                    serviceState={props.status}
                    img={solicitacao.fkPrestador.imagem == null ? ImagemGenerica : solicitacao.fkPrestador.imagem}
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