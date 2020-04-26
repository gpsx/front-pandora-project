import React from 'react';
import { Grid } from '@material-ui/core';
import Input from '../../../components/Input';
import InputMask from 'react-input-mask';

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


    render() {
        return (
            <Grid container
                direction="column"
                alignItems="flex-start"
                style={margin}
                spacing={3}>

                <Grid item>
                    <h1 style={h1}>CEP</h1>
                    <InputMask mask="99999-999" onChange={e => { this.props.globalChanges("cep", e.target.value) }} >
                        {() => <Input style={input} />}
                    </InputMask>
                </Grid>

                <Grid item>
                    <h1 style={h1}>Nome da Rua</h1>
                    <Input style={input}
                        onChange={e => { this.props.globalChanges("nome", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Número</h1>
                    <Input style={input}
                        onChange={e => { this.props.globalChanges("numero", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Bairro</h1>
                    <Input style={input}
                        onChange={e => { this.props.globalChanges("bairro", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Complemento</h1>
                    <Input style={input}
                        onChange={e => { this.props.globalChanges("complemento", e.target.value) }} />
                </Grid>

            </Grid>
        );
    }
}

export default (FormAddress);