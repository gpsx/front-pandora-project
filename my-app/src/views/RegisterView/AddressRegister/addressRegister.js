import React from 'react'
import Menu from '../../../components/Menu'
import Icone from '../../../assets/icone-cards.png'
import '../Register/registerStyle.css'
import './addressStyle.css'

class Endereco extends React.Component {

    render() {
        return (
        
        <>
            < Menu id='menu'/>   

            <div id='address-container'>
                <div id='acontent'>

                    <span id="title">Estamos quase lá!</span>
                    <hr/>
                    <br/><br/>
                    <div id='introduction'>Para começar, precisamos de algumas 
                        informações básicas sobre você, 
                        para nos conhecermos e para o seu acesso às 
                        funcionalidades do Pandora.</div>

                    <div id="second-title">Dados Cadastrais - Passo 2/2</div>
                    <hr/>
                    <br/><br/>
                    <form className='form-content'>
                            <p class='register-input'>
                                <label>CEP</label>
                                <br/>
                                <input type="text" refs="name"/>
                            </p>
                            <br />
                            <p class='register-input'>
                                <label>Nome da Rua</label>
                                <br/>
                                <input type="text" refs="email"/>
                            </p>
                            <br />
                            <p class='register-input'>
                                <label>Número</label>
                                <br/>
                                <input type="text" refs="cnpj" />
                            </p>
                            <br />
                            <p class='register-input'>
                                <label>Bairro</label>
                                <br/>
                                <input type="text" refs="cpf" />
                            </p>
                            <br />
                            <p class='register-input'>
                                <label>Complemento</label>
                                <br/>
                                <input type="text" refs="phone" />
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

export default Endereco;