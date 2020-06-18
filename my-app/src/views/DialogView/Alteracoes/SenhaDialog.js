import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom'
import LocalStorageService from '../../../service/localStorage'
import alteracoesService from '../../../service/alteracoesService'
import Button from '@material-ui/core/Button';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { SnackbarContent, Snackbar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '../../../components/Link';
import { AuthContext } from '../../../main/ProvedorAutenticacao';

const styles = (theme) => ({
    tamanho: {
        width: '300px',
        height: '8%'
    }

});

const theme = createMuiTheme({
    overrides: {
        MuiInput: {
            underline: {
                "&:after": {
                    borderBottom: "2px solid #0B3C5D",
                }
            }
        },
        MuiButton: {
            textPrimary: {
                color: "#0B3C5D"
            }
        },
    }
})

function FormDialogSenha(props) {
    const context = useContext(AuthContext);
    const usuario = LocalStorageService.obterItem("_usuario_logado");
    const type = LocalStorageService.getUserType();

    const { classes } = props;
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [msgError, setMsgError] = React.useState('');
    const [erroSenha, setErroSenha] = React.useState(false);
    const [erroSenhaMsg, setErroSenhaMsg] = React.useState('');

    const [senha, setSenha] = React.useState('');
    const [senhaNova, setSenhaNova] = React.useState('');
    const [senhaConfirma, setConfirma] = React.useState('');

    const [openAlert, setOpenAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');

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

    const verificar = () => {
        let temErro = false;
        if (senha !== usuario.senha) {
            temErro = true;
            setMsgError("A senha está errada")
            setError(true);
        } else {
            setMsgError('')
            setError(false);
        }
        if (senhaNova !== senhaConfirma) {
            temErro = true;
            setErroSenhaMsg("As senhas não coincidem")
            setErroSenha(true);
        } else {
            setErroSenhaMsg('')
            setErroSenha(false);
        }
        if (!temErro) {
            alterar();
        }
    }

    const alterar = () => {
        if (type === 'solicitante') {
            alteracoesService.senhaSolicitante
                ({ "senha": senhaNova }, usuario.id)
                .then(() => {
                    alertar();
                })
        } else {
            alteracoesService.senhaPrestador
                ({ "senha": senhaNova }, usuario.id)
                .then(() => {
                    alertar();
                })
        }
    }

    const alertar = () => {
        setAlertMessage("Senha alterada, por favor refassa seu login");
        setOpenAlert(true)
    }

    return (
        <div>
            <div className={classes.tamanho}>
                <Link onClick={handleClickOpen} style={{ textDecoration: 'none' }}>
                    Alterar senha
                </Link>
            </div>

            <Dialog open={open} onClose={handleClose} fullWidth="15px" maxWidth="sm" aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Alterar a senha</DialogTitle >

                <DialogContent>

                    <DialogContentText>
                        Digite a senha antiga.
                    </DialogContentText>

                    <ThemeProvider theme={theme}>
                        <TextField
                            helperText={msgError}
                            error={error}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Antiga"
                            type="password"
                            fullWidth
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </ThemeProvider>

                </DialogContent>

                <DialogContent>

                    <DialogContentText>
                        Digite a nova senha.
                    </DialogContentText>

                    <ThemeProvider theme={theme}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nova"
                            type="password"
                            fullWidth
                            onChange={(e) => setSenhaNova(e.target.value)}
                        />
                    </ThemeProvider>

                </DialogContent>

                <DialogContent>

                    <DialogContentText>
                        Confirme a nova senha.
                    </DialogContentText>

                    <ThemeProvider theme={theme}>
                        <TextField
                            helperText={erroSenhaMsg}
                            error={erroSenha}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Confirmar"
                            type="password"
                            fullWidth
                            onChange={(e) => setConfirma(e.target.value)}
                        />
                    </ThemeProvider>

                </DialogContent>

                <DialogActions>

                    <ThemeProvider theme={theme}>
                        <Button onClick={handleClose} color="primary">
                            Cancelar
                        </Button>

                        <Button onClick={verificar} color="primary">
                            Alterar
                        </Button>
                    </ThemeProvider>

                </DialogActions>

                <Snackbar
                    anchorOrigin={{ "vertical": "top", "horizontal": "center" }}
                    open={openAlert} >
                    <SnackbarContent
                        message={alertMessage}
                        action={action}
                    />
                </Snackbar>
            </Dialog>
        </div>
    );
}

export default withRouter(withStyles(styles)(FormDialogSenha));
