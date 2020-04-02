import React from 'react'
import Menu from './../../components/Menu'
import './style.css'

class Cadastro extends React.Component {

    render() {
        return (
            <>
                <Menu />
                    <div id='register-container'>
                        <div className='rcontent'>

                            <span id="title">Estamos quase lá!</span>

                            <hr></hr>
                            
                            <br/><br/>

                            
                            <div id='introduction'>Para começar, precisamos de algumas 
                                informações básicas sobre você, 
                                para nos conhecermos e para o seu acesso às 
                                funcionalidades do Pandora.</div>

                      

                            <div id="secondtitle">Dados Cadastrais - Passo 1/2</div>

                            <hr></hr>

                            <br/><br/>

                            <form className='form-content'>
                                    <p class='register-input'>
                                        <label>Nome Completo</label>
                                        <br/>
                                        <input type="text"/>
                                    </p>
                                    <br />
                                    <p class='register-input'>
                                        <label>E-mail</label>
                                        <br/>
                                        <input type="password" />
                                    </p>
                                    <br />
                                    <div className='register-button floatLeft'>
                                        <button id='register' type='submit'>CADASTRAR</button>
                                    </div>
                                    <div className='clear-button floatLeft'>
                                        <button id="clear" type='submit'>LIMPAR CAMPOS</button>
                                    </div>

                    </form>


                        </div>

                    </div>
            </>
        )
    }

}

export default Cadastro;