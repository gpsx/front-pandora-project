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
            underline: { "&:after": { borderBottom: "#0B3C5D", }, }
        },
    }
})

function FormDialogRelatar(props) {
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
                <Button className={classes.botao} onClick={handleClickOpen}>RELATAR PROBLEMA</Button>
            </div>

            <Dialog open={open} onClose={handleClose} fullWidth="15px" maxWidth="sm" aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Relatar Problema</DialogTitle >

                <DialogContent>
                    <DialogContentText>
                        Caso houve algum problema com a nossa aplicação, que impossibilitou você de aproveitar
                        tudo o que Pandora oferece, diga de uma maneira breve para nós podermos resolver o quanto antes.
                    </DialogContentText>

                    <ThemeProvider theme={theme}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Digite aqui.."
                            type="text"
                            height="50px"
                            multiline="true"
                            fullWidth
                        />
                    </ThemeProvider>
                </DialogContent>

                <DialogActions>

                    <Button className={classes.botaoClose} onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button className={classes.botaoClose} onClick={handleClose} color="primary">
                        Relatar
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default withStyles(styles)(FormDialogRelatar);
