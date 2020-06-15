import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '../../../components/Link';
import LocalStorageService from '../../../service/localStorage'
import alterarService from '../../../service/alteracoesService'

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

function FormDialogTelefone(props) {
    const usuario = LocalStorageService.obterItem("_usuario_logado");
    const type = LocalStorageService.getUserType();

    const { classes } = props;
    const [open, setOpen] = React.useState(false);
    const [telefone, setTelefone] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const alterar = () => {
        const novo = { "telefone": telefone }
        if (type === 'prestador') {
            alterarService.telefonePrestador(novo, usuario.id)
                .then(handleClose())
                .catch(err => console.log(err));
        } else {
            alterarService.telefoneSolicitante(novo, usuario.id)
                .then(handleClose())
                .catch(err => console.log(err));
        }
    };

    return (
        <div>

            <div className={classes.tamanho}>
                <Link onClick={handleClickOpen} style={{ textDecoration: 'none' }}>
                    Alterar telefone
                </Link>
            </div>

            <Dialog open={open} onClose={handleClose} fullWidth="15px" maxWidth="sm" aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">Alterar o número de telefone</DialogTitle >

                <DialogContent>

                    <DialogContentText>
                        Digite o numero antigo
                    </DialogContentText>

                    <ThemeProvider theme={theme}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Antigo"
                            type="number"
                            fullWidth
                        />
                    </ThemeProvider>

                </DialogContent>

                <DialogContent>
                    <DialogContentText>
                        Digite o novo número de telefone.
                    </DialogContentText>

                    <ThemeProvider theme={theme}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Novo"
                            type="number"
                            fullWidth
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </ThemeProvider>

                </DialogContent>

                <DialogActions>

                    <ThemeProvider theme={theme}>
                        <Button onClick={handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={alterar} color="primary">
                            Alterar
                        </Button>
                    </ThemeProvider>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default withStyles(styles)(FormDialogTelefone);