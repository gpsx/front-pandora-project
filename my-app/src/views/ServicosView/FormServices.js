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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import imgService from '../../service/imageService'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


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
        categorias: [],
        atualizando: this.props.atualizando,
        categoria: null,
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
        if (!this.props.atualizando) {
            // Colocar os defaults values aqui
        }
    }

    changeCategoria = (categ) => {
        this.setState({ categoria: categ.idCategoria })
    }

    cancelar = () => {
        this.props.history.push('/my-service')
    }

    atualizar = () => {

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
        const novo = {
            "descricao": this.state.descricao,
            "titulo": this.state.titulo,
            "prestador": this.id,
            "categoriaServico": this.state.categoria,
            "imagem": this.state.imagem
        }
        service.cadastrarServico(novo)
            .then(response => {
                this.msgSucesso("Cadastrado com sucesso!")
                setTimeout(this.props.history.push('/my-service'), 10000);
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
                        <Input style={input} onChange={(e) => this.setState({ titulo: e.target.value })} />
                    </Grid>

                    <br />

                    <Grid item>
                        <h1 style={h1}>Descrição do Serviço</h1>
                        <Input style={input} onChange={(e) => this.setState({ descricao: e.target.value })} />
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
                        <Button style={botao} onClick={this.cancelar}>Cancelar</Button>
                        {this.props.atualizando ?
                            (
                                <Button onClick={this.atualizar} style={cancelar}>Atualizar</Button>
                            ) : (
                                <Button onClick={this.cadastrar} style={cancelar}>Cadastrar</Button>
                            )}

                    </Grid>

                    <Snackbar open={this.state.alerta.open} autoHideDuration={6000} onClose={this.fecharAlerta}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
                        <Alert onClose={this.fecharAlerta} severity={this.state.alerta.severity}>
                            {this.state.alerta.message}
                        </Alert>
                    </Snackbar >
                </div>
                <br />
            </Grid>
        );
    }
}

export default withRouter(FormServices);