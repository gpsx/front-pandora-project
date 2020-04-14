import React from 'react';
import Menu from '../../components/Menu';
import ApresentacaoHome from './ApresentacaoHome.js'
import Valores from './Valores'

function HomeView() {
    return (
        <>
            <Menu />
            <ApresentacaoHome />
            <Valores />

        </>
    );
}

export default HomeView;