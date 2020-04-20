import React from 'react';
import { Grid } from '@material-ui/core';
import Input from '../../../../components/Input';
import service from '../../../../service/userService'
import { mensagemErro, mensagemSucesso } from '../../../../components/alerts'

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
const button = {
    fontSize: '24px',
    width: '250px',
    height: '50px',
    float: 'left',

    '&:hover': {
        backgroundColor: '#696969',
    },
}

class FormAddress extends React.Component {

    state = {
        nome: '',
        CEP: '',
        numero: '',
        bairro: '',
        complemento: '',
    }

    cadastrar = () => {
        service.registerProvider({
            nome: this.state.nome,
            CEP: this.state.descricao,
            numero: this.state.categorias,
            bairro: this.state.categorias,
            complemento: this.state.categorias,
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
                <h1 style={h1}>CEP</h1>
                <Input style={input} 
                onChange={e => this.setState({ cep: e.target.value })}/>
            </Grid>

            <Grid item>
                <h1 style={h1}>Nome da Rua</h1>
                <Input style={input}
                onChange={e => this.setState({ nome: e.target.value })} />
            </Grid>

            <Grid item>
                <h1 style={h1}>Número</h1>
                <Input style={input}
                onChange={e => this.setState({ numero: e.target.value })} />
            </Grid>

            <Grid item>
                <h1 style={h1}>Bairro</h1>
                <Input style={input} 
                onChange={e => this.setState({ bairro: e.target.value })}/>
            </Grid>

            <Grid item>
                <h1 style={h1}>Complemento</h1>
                <Input style={input} 
                onChange={e => this.setState({ complemento: e.target.value })}/>
            </Grid>

        </Grid>
    );
}}
    
export default (FormAddress);