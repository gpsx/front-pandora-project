import React from 'react';
import { Grid } from '@material-ui/core';
import Input from '../../../components/Input';

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

class PrestadorForm extends React.Component {

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
                        onChange={(e) => { this.props.globalChanges("nome", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>E-mail</h1>
                    <Input style={input}
                        onChange={(e) => { this.props.globalChanges("email", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>CNPJ</h1>
                    <Input style={input}
                        onChange={(e) => { this.props.globalChanges("cnpj", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>CPF</h1>
                    <Input style={input}
                        onChange={(e) => { this.props.globalChanges("cpf", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Telefone</h1>
                    <Input style={input}
                        onChange={(e) => { this.props.globalChanges("telefone", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Senha</h1>
                    <Input style={input}
                        onChange={(e) => { this.props.globalChanges("senha", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Confirmar senha</h1>
                    <Input style={input}
                        onChange={(e) => { this.props.globalChanges("senhaRepeticao", e.target.value) }} />
                </Grid>
            </Grid>
            
        );
    }
}



export default (PrestadorForm);