import React from 'react'
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
import Button from '../../../components/Button';
import Alerta from '../../../components/Alerta';
import emailService from '../../../service/emailService';
import Backdrop from '../../../components/Backdrop';

const styles = (theme) => ({
    link: {
        fontFamily: 'Roboto',
        color: '#328CC1',
        cursor: 'pointer',
    },
})

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

function RecuperarSenha(props) {
    const { classes } = props;
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');

    const [openAlert, setOpenAlert] = React.useState(false);
    const [alertSeverity, setAlertSeverity] = React.useState('');
    const [alertMessage, setAlertMessage] = React.useState('');
    const [openBackdrop, setOpenBackdrop] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAlert = () => {
        setOpenAlert(false);
        handleClose();
    };

    const enviar = () => {
        setOpenBackdrop(true);
        emailService.recuperarSenha({ "email": email })
            .then(response => {
                setOpenBackdrop(false)
                setAlertSeverity("success")
                setAlertMessage("E-mail encaminhado")
                setOpenAlert(true);
            }).catch(err => {
                setOpenBackdrop(false)
                setAlertSeverity("error")
                setAlertMessage(err.response.data)
                setOpenAlert(true);
            })
    }

    return (
        <div>
            <div>
                <Link variant='caption text' underline='always' onClick={handleClickOpen} className={classes.link}>
                    Esqueci minha senha
            </Link>

                <Alerta open={openAlert} severity={alertSeverity} message={alertMessage} close={handleAlert} />

                <Backdrop open={openBackdrop} />

                <Dialog open={open} onClose={handleClose} fullWidth="18px" maxWidth="sm" aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">
                        Recuperar Senha
                </DialogTitle >

                    <DialogContent>

                        <DialogContentText>
                            Não se preocupe! iremos enviar uma nova senha ao seu e-mail!
                        </DialogContentText>

                        <ThemeProvider theme={theme}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email"
                                type="text"
                                fullWidth
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </ThemeProvider>

                    </DialogContent>

                    <DialogActions>
                        <ThemeProvider theme={theme}>
                            <Button size="small" onClick={enviar}>
                                Enviar
                        </Button>
                        </ThemeProvider>
                    </DialogActions>
                </Dialog>
            </div>
        </div>

    );
}


export default withStyles(styles)(RecuperarSenha);