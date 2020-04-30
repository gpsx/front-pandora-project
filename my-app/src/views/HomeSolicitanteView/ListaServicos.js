import React from 'react'
import ServiceCard from '../../components/ServiceCard'
import { Grid } from '@material-ui/core';
import ImagemGenerica from './../../assets/servicos/generico.jpg'

export default props => {

    const linhas = props.servicos.map(servico => {
        return (
            <Grid item>
                <ServiceCard
                    imgService={ImagemGenerica}
                    title={servico.titulo}
                    providerName={servico.fkPrestador.nome}
                    providerRole={servico.fkCategoriaServico.nomeServico}
                    serviceDescription={servico.descricao}
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