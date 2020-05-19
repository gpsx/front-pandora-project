import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';

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
    const { classes } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className={classes.tamanho}>
                <Link onClick={handleClickOpen} style={{ textDecoration: 'none' }} className={classes.link}>
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
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Antiga"
                            type="password"
                            fullWidth
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
                        />
                    </ThemeProvider>

                </DialogContent>

                <DialogContent>

                    <DialogContentText>
                        Confirme a nova senha.
                    </DialogContentText>

                    <ThemeProvider theme={theme}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Confirmar"
                            type="password"
                            fullWidth
                        />
                    </ThemeProvider>

                </DialogContent>

                <DialogActions>

                    <ThemeProvider theme={theme}>
                        <Button onClick={handleClose} color="primary">
                            Cancelar
                        </Button>

                        <Button onClick={handleClose} color="primary">
                            Alterar
                        </Button>
                    </ThemeProvider>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default withStyles(styles)(FormDialogSenha);
