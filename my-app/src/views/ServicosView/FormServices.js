import React from 'react';
import { withRouter } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import Input from '../../components/Input';
import Button from '../../components/Button';
import FormDialogCategoria from '../DialogView/Servicos/categoria';
import { listarCategorias } from './../../utils/itens'
import ImageEdit from './ImageEdit'
import Panel from '../../components/PanelCategorias';
import service from '../../service/otherService'
import LocalStorage from '../../service/localStorage'
import imgService from '../../service/imageService';

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

    id = LocalStorage.obterIdUsuario();

    state = {
        id: null,
        categorias: [],
        atualizando: this.props.atualizando,
        categoriaServico: null,
        titulo: '',
        descricao: '',
        imagem: '',
        alerta: {
            message: '',
            severity: '',
            open: false,
        }
    }

    fecharAlerta = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ alerta: { open: false } })
    };

    componentDidMount() {
        let lista = listarCategorias();
        this.setState({ categorias: lista })

        if (this.props.id != null) {
            service.getServico(this.props.id)
                .then(response => {
                    let service = response.data[0]
                    this.mudarState(service)
                }).catch(err => {
                    console.log('Erro ao recuperar serviço')
                })
        }
    }

    mudarState = (service) => {
        this.setState({
            ...service,
            categoriaServico: service.fkCategoriaServico.idCategoria
        })
        console.log(this.state)
    }

    changeCategoria = (categ) => {
        this.setState({ categoriaServico: categ.idCategoria })
    }

    cancelar = () => {
        this.props.history.push('/my-service')
    }

    atualizar = () => {
        const { categoriaServico, titulo, descricao, imagem } = this.state

        service.updateServico(this.props.id,
            {
                categoriaServico, titulo, descricao, imagem,
                prestador: this.id,
            }).then(response => {
                console.log('Atualizado!')
            }).catch(err => {
                console.log('erro')
            })
    }

    changeImage = (imagem) => {
        let imgUrl = null;
        let data = new FormData();
        data.append("image", imagem[0]);
        imgService.uploadImagem(data)
            .then(response => {
                imgUrl = response.data.data.link;
                this.setState({ imagem: imgUrl });
                this.msgSucesso("Upload da imagem realizado")
            }).catch(err => {
                this.msgErro("Erro no upload da imagem")
            })
    }

    cadastrar = () => {
        const { descricao, titulo, imagem, categoriaServico } = this.state;
        const novo = {
            descricao, titulo, imagem, categoriaServico,
            "prestador": this.id,
        }
        service.cadastrarServico(novo)
            .then(response => {
                console.log('Cadastrado com sucesso')
            }).catch((errr) => {
                this.msgErro("Erro ao cadastrar serviço")
            })
    }

    msgSucesso = (msg) => {
        this.setState({
            alerta: {
                message: msg,
                severity: 'success',
                open: true,
            }
        })
    }

    msgErro = (msg) => {
        this.setState({
            alerta: {
                message: msg,
                severity: 'error',
                open: true,
            }
        })
    }


    titulo = this.state.titulo
    descricao = this.state.descricao

    render() {

        return (
            <Grid container
                direction="column"
                alignItems="flex-start"
                spacing={3}
            >
                <div>
                    <br />
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
                            defaultValue={this.props.titulo}
                            style={input}
                            onChange={(e) => this.setState({ titulo: e.target.value })} />
                    </Grid>

                    <br />

                    <Grid item>
                        <h1 style={h1}>Descrição do Serviço</h1>
                        <Input
                            defaultValue={this.state.descricao}
                            style={input}
                            onChange={(e) => this.setState({ descricao: e.target.value })} />
                    </Grid>

                    <br />

                    <Grid item>
                        <h1 style={h1}>Categorias do Serviço</h1>
                        <Panel
                            // default={idCategoria - 1}
                            categorias={this.state.categorias}
                            changeCategoria={this.changeCategoria} />
                        <FormDialogCategoria />
                    </Grid>

                    <Grid item>
                        <Button style={botao} onClick={this.cancelar}>Cancelar</Button>
                        {this.props.atualizando ?
                            (
                                <Button onClick={this.atualizar} style={cancelar}>Atualizar</Button>
                            ) : (
                                <Button onClick={this.cadastrar} style={cancelar}>Cadastrar</Button>
                            )}

                    </Grid>
                </div>
                <br />
            </Grid>
        );
    }
}

export default withRouter(FormServices);