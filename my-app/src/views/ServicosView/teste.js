import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SnackbarPattern(props) {
    const [open, setOpen] = useState(props.open);

    const fecharAlerta = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={fecharAlerta}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={fecharAlerta} severity={props.severity}>
                {props.mensagem}
            </Alert>
        </Snackbar>
    );
}

export default SnackbarPattern;