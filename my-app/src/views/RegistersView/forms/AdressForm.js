import React from 'react';
import { Grid } from '@material-ui/core';
import Input from '../../../components/Input';
import InputMask from 'react-input-mask';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import cepService from '../../../service/cepService';

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

const cep = {
    width: '80%',
}


class FormAddress extends React.Component {


    state = {
        disabled: true,
        endereco: {
            cep: '',
            logradouro: '',
            bairro: '',
            localidade: '',
            uf: '',
            complemento: '',
            numero: '',
        },
    }

    validaCep = () => {
        let busca = this.state.endereco.cep.replace(/[^\d]+/g, '')
        cepService.buscarCep(busca)
            .then(response => {
                if (response.data.cep == null) {
                    this.props.globalChanges("erro", "O CEP é inválido!")
                } else {
                    this.setState({ disabled: false, endereco: response.data })
                    this.setState({ endereco: { ...this.state.endereco, cep: busca } });
                    this.props.globalChanges("endereco", this.state.endereco);
                    console.log(response.data)
                }
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
                    <InputMask mask="99999-999" onChange={e => { this.setState({ endereco: { ...this.state.endereco, cep: e.target.value } }) }} >
                        {() => <Input style={cep} />}
                    </InputMask>
                    <IconButton
                        color="primary" aria-label="serarch" component="span"
                        onClick={() => this.validaCep()}>
                        <Search />
                    </IconButton>
                </Grid>

                <Grid item>
                    <h1 style={h1}>Rua:</h1>
                    <Input style={input} disabled={true} value={this.state.endereco.logradouro} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Número:</h1>
                    <Input style={input} disabled={this.state.disabled}
                        onChange={e => {
                            this.setState({ endereco: { ...this.state.endereco, numero: e.target.value } });
                            this.props.globalChanges("endereco", this.state.endereco)
                        }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Bairro:</h1>
                    <Input style={input} disabled={true} value={this.state.endereco.bairro} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Cidade:</h1>
                    <Input style={input} disabled={true} value={this.state.endereco.localidade} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>UF:</h1>
                    <Input style={input} disabled={true} value={this.state.endereco.uf} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Complemento:</h1>
                    <Input style={input} disabled={this.state.disabled}
                        onChange={e => {
                            this.setState({ endereco: { ...this.state.endereco, complemento: e.target.value } })
                            this.props.globalChanges("endereco", this.state.endereco)
                        }} />
                </Grid>

            </Grid >
        );
    }
}

export default (FormAddress);