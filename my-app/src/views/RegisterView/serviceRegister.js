import React from 'react'
import Menu from '../../components/Menu'
import Icone from './../../assets/icone-cards.png'
import './registerStyle.css'
import './serviceStyle.css'

class Servico extends React.Component {

    render() {
        return (
        
        <>
            < Menu id='menu'/>   

            <div id='service-container'>
                <div id='scontent'>

                    <span id="title">Estamos quase lá!</span>
                    <hr/>
                    <br/><br/>
                    <div id='introduction'>Que tal adicionar um primeiro serviço no seu perfil? 
                    Isso já ajudaria a futuros clientes verificarem o seu serviço.</div>

                    <div id="second-title">Dados Cadastrais - Passo 2/2</div>
                    <hr/>
                    <br/><br/>
                    <form className='form-content'>
                            <p class='register-input'>
                                <label>Nome do serviço</label>
                                <br/>
                                <input type="text" refs="name"/>
                            </p>
                            <br />
                            <p class='register-input'>
                                <label>Descrição do serviço</label>
                                <br/>
                                <input type="text" refs="email"/>
                            </p>
                            <br />
                            <p class='register-input'>
                                <label>Categoria do serviço</label>
                                <br/>
                                <input type="text" refs="cnpj" />
                            </p>
                            <br />
                            <a href="#">Minha categoria não está aqui!</a>
                            <p class='register-input'>
                                <label>Sugerir uma nova categoria</label>
                                <br/>
                                <input type="text" refs="cpf" />
                            </p>
                            <br />
                            <div className='register-button floatLeft'>
                                <button id='register' type='submit'>CADASTRAR</button>
                            </div>
                            <div className='clear-button floatLeft'>
                                <button id="clear" type='button'>LIMPAR CAMPOS</button>
                            </div>

            </form>

                </div>

            </div>


            <div className="information-bar">

                <a className="title-bar" href="#">SAIBA MAIS</a>

                <div className="bar-content">
                    <div className="card">
                        <img className="icone-cards floatLeft" src={Icone}/>
                        <div className="container floatLeft">Diarista</div>
                    </div>
                    <div className="card">
                        <img className="icone-cards floatLeft" src={Icone}/>
                        <div className="container floatLeft">Encanador</div>
                    </div>
                    <div className="card">
                        <img className="icone-cards floatLeft" src={Icone}/>
                        <div className="container floatLeft">Chaveiro</div>
                    </div>
                    <div className="card">
                        <img className="icone-cards floatLeft" src={Icone}/>
                        <div className="container floatLeft">Boleiro</div>
                    </div>
                    <div className="card">
                        <img className="icone-cards floatLeft" src={Icone}/>
                        <div className="container floatLeft">Manicure</div>
                    </div>
                </div>

            </div>

   </>
  
)

    }

}

export default Servico;