import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
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

function FormDialogEndereco(props) {
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

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="CEP"
                            type="text"
                            fullWidth
                        />

                    </DialogContent>

                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Rua"
                            type="text"
                            fullWidth
                        />

                    </DialogContent>

                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Número"
                            type="number"
                            fullWidth
                        />
                    </DialogContent>

                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Bairro"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>

                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Complemento"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancelar
                        </Button>

                        <Button onClick={handleClose} color="primary">
                            Alterar
                        </Button>

                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default withStyles(styles)(FormDialogEndereco);