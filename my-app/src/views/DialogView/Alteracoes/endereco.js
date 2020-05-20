import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
import LocalStorage from '../../../service/localStorage'
import service from '../../../service/otherService';

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

function FormDialogEndereco(props) {
    const { classes } = props;
    const [open, setOpen] = useState(false);
    const [endereco, setEndereco] = useState({});
    const [cep, setCEP] = useState(null);
    const [rua, setRua] = useState(null);
    const [numero, setNumero] = useState(null);
    const [bairro, setBairro] = useState(null);
    const [complemento, setComplemento] = useState(null);

    const handleClickOpen = () => {
        service.getEndereco(LocalStorage.obterIdUsuario())
            .then(response => {
                setEndereco(response.data[0])
                setOpen(true);
            }).catch(err => {
                console.log(err)
            })
    };

    const handleClose = () => {
        setOpen(false);
    };

    const alterarInformacoes = () => {
        verificar()
        const alteracoes = {
            "usuario": LocalStorage.obterIdUsuario(),
            rua,
            complemento,
            cep,
            bairro,
            numero,
        }
        console.log(alteracoes)
    }

    function verificar() {
        let al;
        if (!rua) {
            al = endereco.rua
            setRua(al)
        }
        if (!complemento) {
            al = endereco.complemento
            setComplemento(al)
        }
        if (!cep) {
            al = endereco.cep
            setCEP(al)
        }
        if (!bairro) {
            al = endereco.bairro
            setBairro(al)
        }
        if (!numero) {
            al = endereco.numero
            setNumero(al)
        }
    }

    return (
        <div>
            <div>

                <div className={classes.tamanho}>
                    <Link onClick={handleClickOpen} style={{ textDecoration: 'none' }} className={classes.link}>
                        Alterar endereço
                    </Link>
                </div>

                <Dialog open={open} onClose={handleClose} fullWidth="18px" maxWidth="sm" aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">
                        Alterar o endereço
                    </DialogTitle >

                    <DialogContent>

                        <DialogContentText>
                            Digite as informações do novo endereço abaixo
                        </DialogContentText>

                        <ThemeProvider theme={theme}>
                            <TextField
                                defaultValue={endereco.cep}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="CEP"
                                type="text"
                                fullWidth
                                onChange={(e) => setCEP(e.target.value)}
                            />
                        </ThemeProvider>

                    </DialogContent>

                    <DialogContent>

                        <ThemeProvider theme={theme}>
                            <TextField
                                defaultValue={endereco.rua}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Rua"
                                type="text"
                                fullWidth
                                onChange={(e) => { setRua(e.target.value) }}
                            />
                        </ThemeProvider>

                    </DialogContent>

                    <DialogContent>
                        <ThemeProvider theme={theme}>
                            <TextField
                                defaultValue={endereco.numero}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Número"
                                type="number"
                                fullWidth
                                onChange={(e) => { setNumero(e.target.value) }}
                            />
                        </ThemeProvider>

                    </DialogContent>

                    <DialogContent>

                        <ThemeProvider theme={theme}>
                            <TextField
                                defaultValue={endereco.bairro}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Bairro"
                                type="text"
                                fullWidth
                                onChange={(e) => { setBairro(e.target.value) }}
                            />
                        </ThemeProvider>

                    </DialogContent>

                    <DialogContent>

                        <ThemeProvider theme={theme}>
                            <TextField
                                defaultValue={endereco.complemento}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Complemento"
                                type="text"
                                fullWidth
                                onChange={(e) => { setComplemento(e.target.value) }}
                            />
                        </ThemeProvider>

                    </DialogContent>

                    <DialogActions>

                        <ThemeProvider theme={theme}>
                            <Button onClick={handleClose} color="primary">
                                Cancelar
                            </Button>

                            <Button onClick={alterarInformacoes} color="primary">
                                Alterar
                            </Button>
                        </ThemeProvider>

                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default withStyles(styles)(FormDialogEndereco);