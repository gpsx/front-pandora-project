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

function FormDialogEmail(props) {
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
            <div>
                <div className={classes.tamanho}>

                    <Link onClick={handleClickOpen} style={{ textDecoration: 'none' }} className={classes.link}>
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
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Antigo"
                                type="email"
                                fullWidth
                            />
                        </ThemeProvider>
                    </DialogContent>

                    <DialogContent>
                        <DialogContentText>
                            Digite o novo e-mail.
                        </DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Novo"
                            type="email"
                            fullWidth
                        />
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
        </div>
    );
}
export default withStyles(styles)(FormDialogEmail);