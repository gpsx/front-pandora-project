import React from 'react'
import './../custom.css';
import './style.css';
import PerfilImg from './../assets/icone-teste.png'


export default function Menu(props) {

    function submitForm() {

    };

    return (
        <>
            <div id='card-solicitacao'>
                <div id='foto-solicitante'>
                    <img src={PerfilImg} />
                </div>
                <div id='solicitante-informacoes'>
                    <spam id='nome'>{props.nome}</spam>
                    <spam id='distancia'>{props.distancia}</spam>
                    <spam id='solicitacao'>Está solicitando seu serviço:</spam>
                    <spam id='servico'>{props.servico}</spam>
                </div>
            </div>
        </>
    );
}