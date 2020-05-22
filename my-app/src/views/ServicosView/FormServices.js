import React from 'react';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Input from '../../components/Input';
import Button from '../../components/Button';
import FormDialogCategoria from '../DialogView/Servicos/categoria';
import { listarCategorias } from './../../utils/itens'
import ImageEdit from './ImageEdit'
import Panel from '../../components/PanelCategorias';
import LocalStorage from '../../service/localStorage'
import imgService from '../../service/imageService';

const h1 = {
    fontWeight: '200',
    lineHeight: '28px',
    fontSize: '15px',
}

const titulo = {
    marginTop: '10px',
    fontWeight: '200',
    lineHeight: '28px',
    fontSize: '22px',
}

const input = {
    width: '300px',
}

const button = {
    fontSize: '15px',
}

class FormServices extends React.Component {

    changeImage = (imagem) => { }

    render() {

        return (
            <Grid container
                direction="column"
                alignItems="center"
                spacing={1}
            >
                <Grid item>
                    <h1 style={titulo}>{this.props.atualizando ?
                        (
                            "Atualizando Serviço"
                        ) : (
                            "Cadastrando Serviço"
                        )
                    }</h1>
                </Grid>

                <Grid item>
                    <ImageEdit changeImage={this.changeImage.bind(this)} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Nome do Serviço</h1>
                    <Input
                        // defaultValue={this.state.titulo}
                        style={input}
                    // onChange={(e) => this.setState({ titulo: e.target.value })} 
                    />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Descrição do Serviço</h1>
                    <Input
                        // defaultValue={this.state.descricao}
                        style={input}
                    // onChange={(e) => this.setState({ descricao: e.target.value })}
                    />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Categorias do Serviço</h1>
                    <Panel
                        // categorias={this.state.categorias}
                        changeCategoria={this.changeCategoria} />
                    <FormDialogCategoria />
                </Grid>

                <Grid item>
                    <Grid container direction="row" spacing={1} >
                        <Grid item>
                            <Button style={button} onClick={this.cancelar}>Cancelar</Button>
                        </Grid>
                        <Grid item>
                            {this.props.atualizando ?
                                (
                                    <Button style={button} onClick={this.atualizar} >Atualizar</Button>
                                ) : (
                                    <Button style={button} onClick={this.cadastrar} >Cadastrar</Button>
                                )}
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

export default withRouter(FormServices);