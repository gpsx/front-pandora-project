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
import Estrelinhas from '../../../components/RatingStars';

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

function FormDialogAvaliar(props) {
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
                    <Link onClick={handleClickOpen} className={classes.link}>
                        Finalizar
                    </Link>
                </div>

                <Dialog open={open} onClose={handleClose} fullWidth="18px" maxWidth="sm" aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">
                        Avaliar o Serviço
                    </DialogTitle >

                    <DialogContent>

                        <DialogContentText>
                            Avalie o serviço do prestador e nos diga como foi a experiência, todo feedback é bem-vindo!
                        </DialogContentText>
                        <br />
                        <Estrelinhas />

                        <ThemeProvider theme={theme}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Feedback"
                                multiline="true"
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
                                Avaliar
                        </Button>
                        </ThemeProvider>

                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default withStyles(styles)(FormDialogAvaliar);