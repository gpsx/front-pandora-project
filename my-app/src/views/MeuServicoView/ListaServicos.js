import React from 'react'
import ServiceCard from '../../components/MyServiceCard'
import { Grid } from '@material-ui/core';
import ImagemGenerica from './../../assets/servicos/generico.jpg'

export default function ListaMeusServicos(props) {

    const linhas = props.servicos.map(servico => {
        return (
            <Grid item>
                <ServiceCard
                    id={servico.idServico}
                    image={servico.imagem == null ? ImagemGenerica : servico.imagem}
                    name={servico.titulo}
                    avaliationText={servico.descricao}
                    cancelText={"Você tem certeza que deseja excluir o servico '" + servico.titulo + "' ?"}
                    alert={props.alert.bind(this)}
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