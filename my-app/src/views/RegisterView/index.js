import React from 'react'
import Menu from '../../components/Menu'
import Icone from './../../assets/icone-cards.png'
import './regStyle.css'

class Cadastro extends React.Component {

    render() {
        return (
        
        <>
            < Menu id='menu'/>   

            <div id='register-container'>
                <div id='rcontent'>

                    <span id="title">Estamos quase lá!</span>
                    <hr/>
                    <br/><br/>
                    <div id='introduction'>Para começar, precisamos de algumas 
                        informações básicas sobre você, 
                        para nos conhecermos e para o seu acesso às 
                        funcionalidades do Pandora.</div>

                    <div id="second-title">Dados Cadastrais - Passo 1/2</div>
                    <hr/>
                    <br/><br/>
                    <form className='form-content'>
                            <p class='register-input'>
                                <label>Nome Completo</label>
                                <br/>
                                <input type="text" refs="name"/>
                            </p>
                            <br />
                            <p class='register-input'>
                                <label>E-mail</label>
                                <br/>
                                <input type="text" refs="email"/>
                            </p>
                            <br />
                            <p class='register-input'>
                                <label>CNPJ</label>
                                <br/>
                                <input type="text" refs="cnpj" />
                            </p>
                            <br />
                            <p class='register-input'>
                                <label>CPF</label>
                                <br/>
                                <input type="text" refs="cpf" />
                            </p>
                            <br />
                            <p class='register-input'>
                                <label>Telefone</label>
                                <br/>
                                <input type="text" refs="phone" />
                            </p>
                            <br />
                            <p class='register-input'>
                                <label>Senha</label>
                                <br/>
                                <input type="password" />
                            </p>
                            <br />
                            <p class='register-input'>
                                <label>Confirmar senha</label>
                                <br/>
                                <input type="password" refs="password" />
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

export default Cadastro;