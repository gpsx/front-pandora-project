import React from 'react';
import Menu from '../../components/Menu';
import ApresentacaoHome from './ApresentacaoHome.js'
import ComoFunciona from './ComoFunciona'
import QuemSomos from './QuemSomos'

function HomeView() {
    return (
        <>
            <Menu />
            <ApresentacaoHome />
            <ComoFunciona />
            <QuemSomos />
        </>
    );
}

export default HomeView;