import React from 'react';
import { Grid, Link } from '@material-ui/core';
import Input from '../../../../components/Input';
import LimitTags from './Panel.js';

const link = {
    fontFamily: 'Roboto',
    fontSize: '12px',
    color: '#328CC1',
}

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

class FormService extends React.Component {

    render() {
        return (
            <Grid container
                direction="column"
                alignItems="flex-start"
                style={margin}
                spacing={3}>

                <Grid item>
                    <h1 style={h1}>Titulo do serviço</h1>
                    <Input style={input}
                        onChange={(e) => { this.props.globalChanges("titulo", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Descrição do serviço</h1>
                    <Input style={input}
                        onChange={(e) => { this.props.globalChanges("descricao", e.target.value) }} />
                </Grid>

                <Grid item>
                    <h1 style={h1}>Categoria do serviço</h1>
                    <LimitTags
                        onChange={e => this.setState({ categorias: e.target.value })} />
                    <Link underline='always' href="/#/novacategoria" style={link} variant='caption text'>
                        Minha categoria não está aqui!
                </Link>
                </Grid>
            </Grid>
        );
    }
}

export default (FormService);