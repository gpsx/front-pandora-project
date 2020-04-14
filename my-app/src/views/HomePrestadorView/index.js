import React from 'react'
import MenuLogado from './../../components/MenuLogado'
import CardSolicitacao from './../../components/CardSolicitacao'
import './style.css'

class HomePrestador extends React.Component {

    render() {
        return (
            <>
                <MenuLogado />

                <div id='container-prestador'>

                    <div id='wrapper'>

                        <div className='painel-servicos'>
                            <div className='menu'>
                                <ul>
                                    <li> <a>A FAZER</a> </li>
                                    <li> <a>FAZENDO</a> </li>
                                    <li> <a>FINALIZADOS</a> </li>
                                </ul>
                            </div>
                            
                        </div>


                        <div className='solicitacoes'>
                            <CardSolicitacao 
                                nome="Teste de Oliveira"
                                distancia="Está a 200km"    
                            />
                        </div>

                    </div>

                </div>

            </>
        );
    }

}

export default HomePrestador;