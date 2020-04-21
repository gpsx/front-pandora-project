import React from 'react'
import { withStyles } from '@material-ui/core';
import ListaServicos from '../ViewDeTestes/ListaServicos.js'

const useStyles = theme => ({
    container: {
        marginTop: '10%',
        marginLeft: '5%',

    },

    img: {
        width: '200px',
        height: '200px',
    },

    titulo: {
        marginTop: '25px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '80',
        lineHeight: '42px',
        fontSize: '15px',
    },

});

class Popular extends React.Component {

    state = {
        servicos: [
            {
                titulo: 'Titulo 1',
                nome: 'Nome 1',
                categoria: 'Categoria 1',
                descricao: 'Descricao 1',
            },
            {
                titulo: 'Titulo 2',
                nome: 'Nome 2',
                categoria: 'Categoria 2',
                descricao: 'Descricao 2',
            },
            {
                titulo: 'Titulo 4',
                nome: 'Nome 3',
                categoria: 'Categoria2',
                descricao: 'Descricao2',
            }
        ],
    }

    render() {

        const { classes } = this.props;

        return (
            <>  
                <div className={classes.titulo}>Serviços Populares</div>
                <div><ListaServicos servicos={this.state.servicos} /></div>
            </>
        );
    }
}

export default withStyles(useStyles)(Popular);