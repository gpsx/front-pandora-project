import React from 'react';
import ImageEdit from './ImageEdit'
import { withRouter } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import FormDialogCategoria from '../DialogView/Servicos/categoria';
import Panel from '../../components/PanelCategorias';
import Backdrop from '../../components/Backdrop'
import Alerta from '../../components/Alerta';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { listarCategorias } from './../../utils/itens'
import LocalStorage from '../../service/localStorage'
import servicesService from '../../service/servicesService';
import imageService from '../../service/image/imageService';

const h1 = {
    fontWeight: '200',
    lineHeight: '28px',
    fontSize: '15px',
}
const titulo = {
    marginTop: '25px',
    fontWeight: '200',
    lineHeight: '28px',
    fontSize: '22px',
}
const input = {
    width: '300px',
}
const button = {
    fontSize: '15px',
    marginBottom: '20px',
}

class FormServices extends React.Component {
    id = LocalStorage.obterIdUsuario();

    state = {
        titulo: '',
        descricao: '',
        categoria: '',
        imagem: '',
        openBackdrop: false,
        alert: false,
        severity: '',
        message: '',
    }

    constructor() {
        super();
        this.state = { data: [] };
    }

    fecharAlerta() {
        this.setState({ alert: false })
    };

    componentDidMount() {
        let obj = {}
        servicesService.getServicoById(this.props.id)
            .then(response => {
                obj = {
                    titulo: response.data[0].titulo,
                    descricao: response.data[0].descricao,
                    categoria: response.data[0].fkCategoriaServico.idCategoria,
                }
                this.setState({ data: obj })
                this.setState({ imagem: response.data[0].imagem })
            }).catch(err => {
                console.log(err)
            })
    }

    changeBackdrop = () => {
        this.setState({ openBackdrop: !this.state.openBackdrop });
    }

    changeImage = async (imagem) => {
        this.changeBackdrop()
        let data = new FormData();
        data.append("image", imagem[0]);
        imageService.upload(data)
            .then(res => {
                this.setState({ imagem: res.data.data.link });
                this.changeBackdrop();
            })
    }

    changeCategoria = (categ) => {
        this.setState({ categoria: categ.idCategoria })
    }

    cancelar = () => {
        this.props.history.push('/my-service')
    }

    atualizar = () => {
        let servico = this.construir();
        console.log(servico)
        servicesService.update(this.props.id, servico
        ).then(response => {
            this.props.history.push('/my-service');
        }).catch(err => {
            this.setState({
                alert: true,
                message: 'Erro ao atualizar serviço',
                severity: 'error',
            })
        })
    }

    construir = () => {
        let { titulo, descricao, imagem, categoria } = this.state
        if ((!titulo)) {
            titulo = this.state.data.titulo;
        }
        if ((!descricao)) {
            descricao = this.state.data.descricao;
        }
        if ((!categoria)) {
            categoria = this.state.data.categoria;
        }
        const atualizacao = {
            titulo, descricao, imagem,
            "categoriaServico": categoria,
            prestador: this.id
        }
        return atualizacao;
    }

    cadastrar = () => {
        const { descricao, titulo, imagem } = this.state;
        const servico = {
            descricao, titulo, imagem,
            "categoriaServico": this.state.categoria,
            "prestador": this.id,
        }
        servicesService.cadastrar(servico)
            .then(response => {
                this.props.history.push('/my-service');
            }).catch((error) => {
                this.setState({
                    alert: true,
                    message: 'Erro ao cadastrar serviço',
                    severity: 'error',
                })
            })
    }

    render() {
        const categorias = listarCategorias();

        return (
            <Grid container direction="column" alignItems="center" spacing={1} >
                <Grid item>
                    <h1 style={titulo}>{this.props.atualizando ?
                        ("Atualizando Serviço") :
                        ("Cadastrando Serviço")
                    }</h1>
                </Grid>

                <Grid item>
                    <ImageEdit
                        changeImage={this.changeImage.bind(this)}
                        defaultImage={this.state.imagem} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Nome do serviço</h1>
                    <Input
                        placeholder={this.state.data.titulo}
                        style={input}
                        onChange={(e) => this.setState({ titulo: e.target.value })}
                    />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Descrição do Serviço</h1>
                    <Input
                        placeholder={this.state.data.descricao}
                        style={input}
                        onChange={(e) => this.setState({ descricao: e.target.value })}
                    />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Categorias do Serviço</h1>
                    <Panel
                        default={this.state.data.categoria}
                        categorias={categorias}
                        changeCategoria={this.changeCategoria} />
                    <FormDialogCategoria />
                </Grid>

                <Grid item>
                    <Grid container direction="row" spacing={1} >
                        <Grid item>
                            <Button style={button}
                                onClick={() => this.props.history.push('/my-service')}>
                                Cancelar
                            </Button>
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
                <Backdrop open={this.state.openBackdrop} />
                <Alerta
                    open={this.state.alert}
                    message={this.state.message}
                    severity={this.state.severity}
                    close={this.fecharAlerta.bind(this)} />
            </Grid>
        );
    }
}

export default withRouter(FormServices);