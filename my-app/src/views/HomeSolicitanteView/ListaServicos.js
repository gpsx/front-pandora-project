import React, { useState } from 'react'
import ImagemGenerica from './../../assets/servicos/generico.jpg'
import ServiceCard from '../../components/ServiceCard'
import { Grid } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={0} variant="filled" {...props} />;
}

export default function ListaServicos(props) {

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
                    id={servico.fkPrestador.id}
                    imgService={servico.imagem == null ? ImagemGenerica : servico.imagem}
                    title={servico.titulo}
                    providerName={servico.fkPrestador.nome}
                    providerRole={servico.fkCategoriaServico.nomeServico}
                    serviceDescription={servico.descricao}
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