import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Estrelinhas from '../../../components/RatingStars';
import avaliacoesService from '../../../service/avaliacoesService';
import solicitacoesService from '../../../service/solicitacoesService'
import Alerta from '../../../components/Alerta.js'

const styles = (theme) => ({
    button: {
        alignSelf: "flex-end",
        width: "100px",
        marginRight: '5px',
        backgroundColor: '#0B3C5D',
        '&:hover': {
            backgroundColor: '#328CC1',
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

function FormDialogAvaliar(props) {
    const { classes } = props;
    const [open, setOpen] = React.useState(false);
    const [nota, setNota] = React.useState(0);
    const [feedback, setFeedback] = React.useState('');
    const [alertOpen, setAlertOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const fecharAlerta = () => {
        setAlertOpen(false)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getValorEstrelas = (nota) => {
        setNota(nota);
    };

    const finalizar = () => {
        solicitacoesService.finalizarSolicitacao(props.id)
            .then(response => {
                console.log(response);
                handleClickOpen();
            }).catch(err => {
                console.log(err.data)
            })

    }

    const avaliar = () => {
        avaliacoesService.avaliar({
            "nota": nota,
            "avaliacao": feedback,
            "idSolicitacao": props.id
        }).then(resp => {
            handleClose();
            window.location.reload();
        }).catch(err => {
            console.log(err)
            handleClose();
        });
    };

    return (
        <div>
            <Button size="small" variant="contained" color="primary" className={classes.button} onClick={finalizar}>
                FINALIZAR
            </Button>

            <Dialog open={open} onClose={handleClose} fullWidth="18px" maxWidth="sm" aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">
                    Avaliar o Serviço
                </DialogTitle >

                <DialogContent>

                    <DialogContentText>
                        Antes de finalizar o serviço, avalie o prestador! Isso pode nos ajudar
                        a refinar nossas pesquisas!
                        </DialogContentText>
                    <br />
                    <Estrelinhas getValue={getValorEstrelas.bind(this)} />

                    <ThemeProvider theme={theme}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Feedback"
                            multiline="true"
                            type="text"
                            fullWidth
                            onChange={(e) => setFeedback(e.target.value)}
                        />
                    </ThemeProvider>

                </DialogContent>

                <DialogActions>

                    <ThemeProvider theme={theme}>
                        <Button onClick={handleClose} color="primary">
                            Cancelar
                        </Button>

                        <Button onClick={avaliar} color="primary">
                            Avaliar
                        </Button>
                    </ThemeProvider>

                </DialogActions>
            </Dialog>
            <Alerta message="Não foi possível fazer a avaliação!"
                severity="error" open={alertOpen} close={fecharAlerta.bind(this)} />
        </div>
    );
}

export default withStyles(styles)(FormDialogAvaliar);