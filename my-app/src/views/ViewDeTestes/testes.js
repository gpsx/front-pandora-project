import React from 'react'
import ListaServicos from './ListaServicos'

class Testes extends React.Component {

    state = {
        servicos: [
            {
                titulo: 'Titulo 1',
                nome: 'Nome 1',
                categoria: 'Categoria 1',
                descricao: 'Descricao 1',
            },
            {
                titulo: 'Titulo 2',
                nome: 'Nome 2',
                categoria: 'Categoria 2',
                descricao: 'Descricao 2',
            },
            {
                titulo: 'Titulo 4',
                nome: 'Nome 3',
                categoria: 'Categoria2',
                descricao: 'Descricao2',
            }
        ],
    }

    render() {


        return (
            <>
                <div><ListaServicos servicos={this.state.servicos} /></div>
            </>
        );
    }
}

export default Testes