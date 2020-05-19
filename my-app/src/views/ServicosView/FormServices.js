import React from 'react';
import { Grid } from '@material-ui/core';
import Input from '../../components/Input';
import Button from '../../components/Button';
import FormDialogCategoria from '../DialogView/Servicos/categoria';
import { listarCategorias } from './../../utils/itens'
import ImageEdit from './ImageEdit'
import Panel from '../../components/PanelCategorias';

const h1 = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '200',
    lineHeight: '28px',
    fontSize: '15px',
}
const titulo = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '200',
    lineHeight: '28px',
    fontSize: '25px',
}
const input = {
    width: '100%',
}
const botao = {
    fontSize: '13px',
    width: '48%',
    '&:hover': {
        backgroundColor: '#328CC1',
    },
}
const cancelar = {
    marginLeft: '3%',
    fontSize: '13px',
    width: '48%',
    '&:hover': {
        backgroundColor: '#328CC1',
    },
}


class FormServices extends React.Component {

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
                spacing={3}
            >
                    <div>
                        <br/>
                    <Grid item>
                        <h1 style={titulo}>Titulo</h1>
                    </Grid>

                    <Grid item>
                        <ImageEdit />
                    </Grid>

                    <Grid item>
                        <h1 style={h1}>Nome do Serviço</h1>
                        <Input style={input} />
                    </Grid>

                    <br />

                    <Grid item>
                        <h1 style={h1}>Descrição do Serviço</h1>
                        <Input style={input} />
                    </Grid>

                    <br />

                    <Grid item>
                        <h1 style={h1}>Categorias do Serviço</h1>
                        <Panel
                            categorias={this.state.categorias}
                            changeCategoria={this.changeCategoria} />
                        <FormDialogCategoria />
                    </Grid>

                    <Grid item>
                        <Button style={botao}>Botao</Button>
                        <Button style={cancelar}>Cancelar</Button>
                    </Grid>
                    </div>
                    <br/>
            </Grid>
        );
    }
}

export default (FormServices);