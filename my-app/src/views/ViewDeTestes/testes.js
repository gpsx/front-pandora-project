import React from 'react'
//import Filtro from '../HomeSolicitanteView/filtro.js'
import SimpleCard from '../HomeView/Card'
import Avatar from '@material-ui/core/Avatar'
import ImgSueto from './../../assets/FelipeSueto.jpg'
import ImgVitoria from './../../assets/VitoriaCristina.jpeg'
import ImgGiulia from './../../assets/GiuliaMaia.jpeg'
import ImgNicolle from './../../assets/NicolleCruz.jpg'
import ImgGuilherme from './../../assets/GuilhermeSantos.jpeg'
import ImgJuliana from './../../assets/JulianaBezerra.jpeg'

class Testes extends React.Component {

    state = {
        guias: [
            {

            }
        ],
    }

    render() {


        return (
            <>
                {/* <Filtro /> */}
                <SimpleCard/>
                <Avatar alt='Nicolle Cruz' src={ImgNicolle}/>
                <Avatar alt='Giulia Maia' src={ImgGiulia}/>
                <Avatar alt='Vitoria Cristina' src={ImgVitoria}/>
                <Avatar alt='Felipe Sueto' src={ImgSueto}/>
                <Avatar alt='Felipe Sueto' src={ImgGuilherme}/>
                <Avatar alt='Felipe Sueto' src={ImgJuliana}/>
            </>
        );
    }
}

export default Testes