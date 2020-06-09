import React from 'react';
import Menu from '../../components/Menu';
import ApresentacaoHome from './ApresentacaoHome.js'
import ComoFunciona from './ComoFunciona'
import QuemSomos from './QuemSomos'
import Cards from './Card'
import Equipe from './Equipe'
import FaleConosco from './FaleConosco'
import Footer from '../../components/Footer'

function HomeView() {
    return (
        <>
            <Menu />
            <ApresentacaoHome />
            <ComoFunciona />
            <QuemSomos />
            <Cards />
            <Equipe />
            <FaleConosco />
            <Footer/>
        </>
    );
}

export default HomeView;