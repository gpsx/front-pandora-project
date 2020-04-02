import React from 'react'
import Menu from './../../components/Menu'
import './style.css'

class Cadastro extends React.Component {

    render() {
        return (
            <>
                <Menu />
                    <div id='register-container'>
                        <div className='content'>
                            <h1>Estamos quase lá!</h1>
                            <hr></hr>

                        </div>

                    </div>
            </>
        )
    }

}

export default Cadastro;