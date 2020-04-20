import React from 'react';
import { Grid } from '@material-ui/core';
import Input from '../../../components/Input';
import service from '../../../service/userService'
import { mensagemErro, mensagemSucesso } from '../../../components/alerts'
import LocalStorageService from '../../../service/localStorage'

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

class SolicitanteForm extends React.Component {

    state = {
        nome: '',
        email: '',
        cnpj: '',
        cpf: '',
        telefone: '',
        senha: '',
    }

    cadastrar = () => {
        service.registerProvider({
            nome: this.state.nome,
            email: this.state.email,
            cnpj: this.state.cnpj,
            cpf: this.state.cpf,
            telefone: this.state.telefone,
            senha: this.state.senha,
        }).then(response => {
            LocalStorageService.addItem('_usuario_cadastrado', response.data)
        }).catch(erro => {
            mensagemErro(erro.response.data)
            console.log(erro.response.data);
        })
    }

    render() {
        return (
            <Grid container
                direction="column"
                alignItems="flex-start"
                style={margin}
                spacing={3}>

                <Grid item>
                    <h1 style={h1}>Nome Completo</h1>
                    <Input style={input}
                        onChange={e => this.setState({ nome: e.target.value })} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>E-mail</h1>
                    <Input style={input}
                        onChange={e => this.setState({ email: e.target.value })} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>CNPJ</h1>
                    <Input style={input}
                        onChange={e => this.setState({ cnpj: e.target.value })} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>CPF</h1>
                    <Input style={input}
                        onChange={e => this.setState({ cpf: e.target.value })} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Telefone</h1>
                    <Input style={input}
                        onChange={e => this.setState({ telefone: e.target.value })} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Confirmar senha</h1>
                    <Input style={input} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Senha</h1>
                    <Input style={input}
                        onChange={e => this.setState({ senha: e.target.value })} />
                </Grid>

                <div>
                    {this.state.error}
                </div>

            </Grid>
        );
    }
}

export default (SolicitanteForm);