import React from 'react';
import { Grid } from '@material-ui/core';
import InputMask from 'react-input-mask';
import Input from '../../../components/Input';
import Info from '@material-ui/icons/InfoOutlined';
import Tooltip from '@material-ui/core/Tooltip';

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
                    <InputMask mask="99.999.999/9999-99" onChange={(e) => { this.props.globalChanges("cnpj", e.target.value) }}>
                        {() => <Input style={input} />}
                    </InputMask>
                </Grid>

                <Grid item>
                    <h1 style={h1}>CPF</h1>
                    <InputMask mask="999.999.999-99" onChange={(e) => { this.props.globalChanges("cpf", e.target.value) }}>
                        {() => <Input style={input} />}
                    </InputMask>
                </Grid>

                {this.props.prestador ? (
                    <Grid item>
                        <Grid container direction="row" spacing={1}  style={margin}>
                            <Grid item>
                                <h1 style={h1}>CEP</h1>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Seu CEP será usado para que sejam enviadas solicitações próximas a você">
                                    <Info style={{ fontSize: 15 }} />
                                </Tooltip>
                            </Grid>
                            <InputMask mask="99999-999" onChange={(e) => { this.props.globalChanges("cep", e.target.value) }}>
                                {() => <Input style={input} />}
                            </InputMask>
                        </Grid>
                    </Grid>
                ) : (
                        <div />
                    )
                }


                <Grid item>
                    <h1 style={h1}>Telefone</h1>
                    <InputMask mask="(99) 99999-9999" onChange={(e) => { this.props.globalChanges("telefone", e.target.value) }} >
                        {() => <Input style={input} />}
                    </InputMask>
                </Grid>

                <Grid item>
                    <h1 style={h1}>Senha</h1>
                    <Input style={input} type="password"
                        onChange={(e) => { this.props.globalChanges("senha", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Confirmar senha</h1>
                    <Input style={input} type="password"
                        onChange={(e) => { this.props.globalChanges("senhaRepeticao", e.target.value) }} />
                </Grid>



            </Grid >
        );
    }
}

export default (SolicitanteForm);