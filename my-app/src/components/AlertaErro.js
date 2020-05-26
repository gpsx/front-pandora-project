import React from 'react'
import Alert from '@material-ui/lab/Alert';

export default function AlertaErro(props) {
    return (
        <Alert severity="error">
            {props.mensagem}
        </Alert>
    );
}