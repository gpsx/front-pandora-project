import React, { useContext } from 'react';
import { AuthContext } from '../../../main/ProvedorAutenticacao'
import { withRouter } from 'react-router-dom'

import Link from '../../../components/Link'
import { Button, TextField } from '@material-ui/core';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { SnackbarContent, Snackbar } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import LocalStorageService from '../../../service/localStorage'
import alterarService from '../../../service/alteracoesService'

const styles = (theme) => ({
    link: {
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '20px',
        fontWeight: '200',
        lineHeight: '50px',
        cursor: 'pointer',
        '&:hover': {
            color: '#0B3C5D',
        },
    },
    tamanho: {
        width: '300px',
        height: '8%'
    }
});

const theme = createMuiTheme({
    overrides: {
        MuiInput: {
            underline: {
                "&:after": { borderBottom: "2px solid #0B3C5D", }
            }
        },
        MuiButton: {
            textPrimary: { color: "#0B3C5D" }
        },
    }
})

function FormDialogEmail(props) {
    const context = useContext(AuthContext);
    const usuario = LocalStorageService.obterItem("_usuario_logado");
    const type = LocalStorageService.getUserType();

    const { classes } = props;
    const [open, setOpen] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);

    const [error, setError] = React.useState(false);
    const [message, setMessage] = React.useState(null);

    const [eAntigo, setEAntigo] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const action = (
        <Button color="secondary" size="small" onClick={logoff}>
            Okay
        </Button >
    );

    function logoff() {
        context.encerrarSessao();
        props.history.push('/login');
    }

    const validar = () => {
        let email = usuario.email;
        if (email !== eAntigo) {
            setError(true)
            setMessage("Digite seu e-mail atual")
        }
        else {
            if (type === 'solicitante') {
                alterarSolicitante()
            } else {
                alterarPrestador()
            }
        }
    }

    const alterarSolicitante = () => {
        alterarService.emailSolicitante(
            { "email": email }
        ).then(setOpenAlert(true))
    }

    const alterarPrestador = () => {
        alterarService.emaiPrestador(
            { "email": email }
        ).then(setOpenAlert(true))
    }

    return (
        <div>
            <div>

                <div className={classes.tamanho}>
                    <Link onClick={handleClickOpen} style={{ textDecoration: 'none' }} >
                        Alterar e-mail
                    </Link>
                </div>

                <Dialog open={open} onClose={handleClose} fullWidth="18px" maxWidth="sm" aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">Alterar o e-mail</DialogTitle >
                    <DialogContent>
                        <DialogContentText>
                            Digite o e-mail antigo.
                        </DialogContentText>

                        <ThemeProvider theme={theme}>
                            <TextField
                                helperText={message}
                                error={error}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Antigo"
                                type="email"
                                fullWidth
                                onChange={(e) => setEAntigo(e.target.value)}
                            />
                        </ThemeProvider>

                    </DialogContent>

                    <DialogContent>
                        <DialogContentText>
                            Digite o novo e-mail.
                        </DialogContentText>

                        <ThemeProvider theme={theme}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Novo"
                                type="email"
                                fullWidth
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </ThemeProvider>

                    </DialogContent>

                    <DialogActions>
                        <ThemeProvider theme={theme}>
                            <Button onClick={handleClose} color="primary">
                                Cancelar
                        </Button>
                            <Button onClick={validar} color="primary">
                                Alterar
                        </Button>
                        </ThemeProvider>
                    </DialogActions>

                    <Snackbar
                        anchorOrigin={{ "vertical": "top", "horizontal": "center" }}
                        open={openAlert}
                        // onClose={handleClose}
                        message="I love snacks">

                        <SnackbarContent

                            message={'Seu e-mail foi trocado, necessário refazer o login'}
                            action={action}
                        />
                    </Snackbar>

                </Dialog>
            </div>
        </div>
    );
}
export default withRouter(withStyles(styles)(FormDialogEmail));