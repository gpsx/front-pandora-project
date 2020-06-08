import React from 'react';
import Menu from '../../components/Menu';
import ApresentacaoHome from './ApresentacaoHome.js'
import ComoFunciona from './ComoFunciona'
import QuemSomos from './QuemSomos'
import Cards from './Card'
import Time from './Time'

function HomeView() {
    return (
        <>
            <Menu />
            <ApresentacaoHome />
            <ComoFunciona />
            <QuemSomos />
            <Cards />
            <Time />
        </>
    );
}

export default HomeView;