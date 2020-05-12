import React from 'react';
import { Grid, Link } from '@material-ui/core';
import Input from '../../../../components/Input';
import { listarCategorias } from './../../../../utils/itens'
import Panel from '../../../../components/PanelCategorias';

const link = {
    fontFamily: 'Roboto',
    fontSize: '12px',
    color: '#328CC1',
}

const margin = {
    paddingRight: '30px',
}

const h1 = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '200',
    lineHeight: '28px',
    fontSize: '13px',
}

const input = {
    width: '160%',
}

class FormService extends React.Component {

    state = {
        categorias: []
    }

    componentDidMount() {
        let lista = listarCategorias();
        this.setState({ categorias: lista })
    }

    changeCategoria = (categ) => {
        this.props.globalChanges("categoria", categ.idCategoria)
    }

    render() {
        return (
            <Grid container
                direction="column"
                alignItems="flex-start"
                style={margin}
                spacing={3}>

                <Grid item>
                    <h1 style={h1}>Titulo do serviço:</h1>
                    <Input style={input}
                        onChange={(e) => { this.props.globalChanges("titulo", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Descrição do serviço:</h1>
                    <Input style={input}
                        onChange={(e) => { this.props.globalChanges("descricao", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Categoria do serviço:</h1>
                    <Panel
                        categorias={this.state.categorias}
                        changeCategoria={this.changeCategoria} />
                    <Link underline='always' href="/#/novacategoria" style={link} variant='caption text'>
                        Minha categoria não está aqui!
                    </Link>
                </Grid>
                <Grid item>
                    <h1 style={h1}>Imagem do serviço:</h1>
                    <input type="file" onChange={(e) => { this.props.globalChanges("imagem", e.target.files) }} />
                </Grid>
            </Grid >
        );
    }
}

export default (FormService);