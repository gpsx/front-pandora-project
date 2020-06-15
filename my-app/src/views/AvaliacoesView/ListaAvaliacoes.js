import React from 'react'
import { Grid } from '@material-ui/core';
import AvaliationCard from '../../components/AvaliantionCard'
import ImagemGenerica from './../../assets/servicos/generico.jpg'

export default function ListaAvaliacoes({ avaliacoes }) {

    const linhas = avaliacoes.map(avaliacao => {
        return (
            <Grid item>
                <AvaliationCard
                    name={avaliacao.nomeSolicitante}
                    avaliation={avaliacao.nota.toFixed(1)}
                    avaliationText={avaliacao.avaliacao}
                    img={avaliacao.imgPerfilSolicitante == null ? ImagemGenerica : avaliacao.imgPerfilSolicitante}
                />
            </Grid>
        )
    });

    return (
        <Grid container direction="column"
            spacing={1}>
            {linhas}
        </Grid>
    );

}