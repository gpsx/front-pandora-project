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
        color: '#328CC1',
        textDecoration: 'none',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '13px',
        fontWeight: '200',
        lineHeight: '50px',
        cursor: 'pointer',
        '&:hover': {
            color: '#0B3C5D',
        },
    },
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

function FormDialogCategoria(props) {
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
                <Link onClick={handleClickOpen} className={classes.link}>
                    Minha categoria não está aqui!
                </Link>

                <Dialog open={open} onClose={handleClose} fullWidth="18px" maxWidth="sm" aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">
                        Sugerir Categoria
                    </DialogTitle >

                    <DialogContent>

                        <DialogContentText>
                            Se está faltando a categoria que mais combina com o seu serviço, sugira para nós abaixo qual seria a mais apropriada,
                            e a equipe Pandora irá verificar se há a possibilidade de adiciona-la.
                        </DialogContentText>

                        <ThemeProvider theme={theme}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Categoria do Serviço"
                                type="text"
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
        </div>
    );
}

export default withStyles(styles)(FormDialogCategoria);