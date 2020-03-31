import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import logoImg from './../assets/logo.png';
import './../custom.css';
import './../views/style.css';


export default function Menu() {

    function submitForm() {

    };

    return (
        <div className="menu-container">
            <nav id="menu">

                <div className='img-content'>
                    <img src={logoImg} alt='Logo Pandora' />
                </div>


                <div className='input-content'>
                    <form onSubmit={submitForm}>
                        <IoIosSearch size={30} color='#E5E5E5' />
                        <input type="text" placeholder="Procure por serviços..." />
                    </form>
                </div>

                <div>
                    <ul>
                        <li><a href="#/quemsomos">Quem somos</a></li>
                        <li><a href="#/categorias">Categorias</a></li>
                        <li><a href="#/topservicos">Top Serviços</a></li>
                    </ul>
                </div>

                <div className='button-content'>
                    <button type='button' className='botao-padrao'>LOGIN</button>
                    <button type='button' className='botao-padrao'>CADASTRO</button>
                </div>
            </nav>

        </div>
    );
}