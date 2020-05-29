import React from 'react';
import Button from '../../../components/Button';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = (theme) => ({

    botao: {
        fontSize: '11px',
        width: '50%',
        height: '20%',
    },
    botaoClose: {
        fontSize: '11px',
        width: '20%',
        height: '20%',
        '&:hover': {
            backgroundColor: '#328CC1',
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
                    borderBottom: "#0B3C5D",
                }
            }
        },
    }
})

function FormDialogReportar(props) {
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
                <Button className={classes.botao} onClick={handleClickOpen}>REPORTAR USUÁRIO</Button>
            </div>

            <Dialog open={open} onClose={handleClose} fullWidth="15px" maxWidth="sm" aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Reportar Usuário</DialogTitle >

                <DialogContent>

                    <DialogContentText>
                        Caso houve algum problema com algum dos usuários da nossa aplicação,
                        qualquer que seja, precisamos saber o ocorrido para que possamos resolver o quanto antes.
                    </DialogContentText>

                    <ThemeProvider theme={theme}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Digite aqui o nome do usuário"
                            type="text"
                            height="50px"
                            fullWidth
                        />
                    </ThemeProvider>

                </DialogContent>
                <DialogContent>

                    <ThemeProvider theme={theme}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Digite aqui o ocorrido"
                            type="text"
                            multiline="true"
                            height="50px"
                            fullWidth
                        />
                    </ThemeProvider>

                </DialogContent>

                <DialogActions>

                    <Button className={classes.botaoClose} onClick={handleClose} color="primary">
                        Cancelar
                        </Button>

                    <Button className={classes.botaoClose} onClick={handleClose} color="primary">
                        Reportar
                        </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default withStyles(styles)(FormDialogReportar);
