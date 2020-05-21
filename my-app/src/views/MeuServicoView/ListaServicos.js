import React, { useState } from 'react'
import ServiceCard from '../../components/MyServiceCard'
import { Grid } from '@material-ui/core';
import ImagemGenerica from './../../assets/servicos/generico.jpg'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={0} variant="filled" {...props} />;
}



export default function ListaMeusServicos(props) {

    const [openAlert, setOpenAlert] = useState(false);
    const [severity, setSeverity] = useState()
    const [alert, setAlert] = useState();

    const fecharAlerta = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    function alertar(alerta, tipo) {
        setAlert(alerta)
        setSeverity(tipo)
        setOpenAlert(true)
    }

    const linhas = props.servicos.map(servico => {
        return (
            <Grid item>
                <ServiceCard
                    id={servico.idServico}
                    imgService={servico.imagem == null ? ImagemGenerica : servico.imagem}
                    name={servico.titulo}
                    avaliationText={servico.descricao}
                    cancelText={"Você tem certeza que deseja cancelar o servico "+servico.titulo+" ?"}
                    alertar={alertar.bind(this)}
                />

                <Snackbar open={openAlert} autoHideDuration={6000} onClose={fecharAlerta}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <Alert onClose={fecharAlerta} severity={severity}>
                        {alert}
                    </Alert>
                </Snackbar>

            </Grid>

        )
    })

    return (
        <Grid container direction="column"
            spacing={1}>
            {linhas}
        </Grid>
    )
}