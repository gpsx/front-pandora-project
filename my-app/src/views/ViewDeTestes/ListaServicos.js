import React from 'react'
import ServiceCard from '../../components/ServiceCard'

export default props => {

    const linhas = props.servicos.map(servico => {
        /* cada servico passado pello array de SERVICOS, vira
            um SERVIÇO nesse método MAP que funciona como um "foreach"
            cada props do service card, vai receber os parametros passados
            (titulo, nome...)
        */
        return (
            <ServiceCard
                title= {servico.titulo}
                providerName={servico.nome}
                providerRole={servico.categoria}
                serviceDescription={servico.descricao} />
        )
    })

    return (
        <div>
            {linhas}
        </div>
    )
}