import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '../../../components/Link';
import LocalStorage from '../../../service/localStorage'
import service from '../../../service/alteracoesService';

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

function FormDialogEndereco(props) {
    const { classes } = props;
    const [open, setOpen] = useState();
    const [cep, setCEP] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState(0);
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');

    const handleClickOpen = () => {
        service.getEndereco(LocalStorage.obterIdUsuario())
            .then(response => {
                setRua(response.data[0].rua)
                setComplemento(response.data[0].complemento)
                setCEP(response.data[0].cep)
                setBairro(response.data[0].bairro)
                setNumero(response.data[0].numero)
                setOpen(true)
            }).catch(err => {
                setOpen(true)
            })
    };

    const handleClose = () => {
        setOpen(false);
    };

    const alterarInformacoes = () => {
        const id = LocalStorage.obterIdUsuario()
        const alteracoes = {
            "usuario": id,
            rua,
            complemento,
            cep,
            bairro,
            numero,
        }
        service.changeAdress(alteracoes, id)
            .then(response => {
                console.log('Alterado com sucesso!')
                setOpen(false)
            })
    }


    return (
        <div>
            <div>

                <div className={classes.tamanho}>
                    <Link onClick={handleClickOpen} style={{ textDecoration: 'none' }} >
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
                                defaultValue={cep}
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
                                defaultValue={rua}
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
                                defaultValue={numero}
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
                                defaultValue={bairro}
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
                                defaultValue={complemento}
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