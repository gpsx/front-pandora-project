import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Alerta(props) {

    const { message, severity, open } = props;

    const fecharAlerta = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.close();
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={fecharAlerta}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
            <Alert onClose={fecharAlerta} severity={severity}>
                {message}
            </Alert>
        </Snackbar >
    )
}