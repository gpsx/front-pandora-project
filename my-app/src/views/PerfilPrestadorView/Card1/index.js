import React from 'react';
import { makeStyles, Grid, Paper, Link } from '@material-ui/core';
import Portal from '@material-ui/core/Portal';
import Alteracoes from '../../DialogView/Alteracoes/index';
import imageService from '../../../service/image/imageService'
import alteracoesService from '../../../service/alteracoesService'
import localStorage from '../../../service/localStorage'
import Backdrop from '../../../components/Backdrop'
import Informacoes from './Informacoes';
import Servicos from './Servicos';
import EditImage from './EditImage';

const card = {
    marginTop: '12%',
    marginLeft: '34%',
    width: '800px',
    height: '310px'
}

const linhaVertical = {
    height: '250px',
    borderLeft: '2px solid',
    borderLeftColor: '#696969',
    float: 'left',
    marginLeft: '48%',
    marginTop: '-33.5%',
    opacity: '0.2',
}

const avatar = {
    marginLeft: '16%',
    marginTop: '1%'
}
const informacoes = {
    marginLeft: '5%',
    marginTop: '-4%'
}
const titulo = {
    color: 'black',
    fontFamily: 'Roboto',
    width: '300px',
    fontStyle: 'normal',
    fontSize: '25px',
    fontWeight: '200',
    lineHeight: '50px',
    marginLeft: '50%',
    marginTop: '-590px',
    cursor: 'pointer',
}
const link = {
    marginLeft: '25%',
    cursor: 'pointer',
}
const content = {
    marginLeft: "670px"
}

const useStyles = makeStyles((theme) => ({
    alert: {
        padding: theme.spacing(1),
        margin: theme.spacing(1, 0),
        border: '1px solid',
    },
}));

function Card1(props) {
    const id = localStorage.obterIdUsuario();
    const tipo = localStorage.getUserType();

    const classes = useStyles();
    const [show, setShow] = React.useState(false);
    const [openBackdrop, setOpenBackdrop] = React.useState(false);
    const container = React.useRef(null);

    const handleClick = () => {
        setShow(!show);
    };

    // const changeBackdrop = () => {
    //     this.setOpenBackdrop(!openBackdrop);
    // }

    function uploadImage(imagem) {
        // changeBackdrop();
        let data = new FormData();
        data.append("image", imagem[0]);
        imageService.upload(data)
            .then(res => {
                let imagem = res.data.data.link;
                changeImage(imagem);
            })
    }

    function changeImage(imagem) {
        const alteracao = { "imagem": imagem }
        if (tipo === 'prestador') {
            alteracoesService.imgPrestador
                (alteracao, id)
        } else {
            alteracoesService.imgSolicitante
                (alteracao, id)
        }
    }

    return (
        <Grid container direction="column" alignItems="flex-start" spacing={3}>

            <Paper style={card}>
                <Grid item>
                    <div style={avatar}>
                        <EditImage changeImage={uploadImage.bind(this)} />
                    </div>
                    <br />
                    <div style={informacoes}>
                        <Informacoes />
                        <Link style={link} type="button" onClick={handleClick}>{show ? 'Voltar á Serviços..' : 'Alterar informações..'}</Link>
                    </div>
                    <div style={linhaVertical}></div>

                    {show ?
                        (
                            <Grid item>
                                <Portal container={container.current} className={classes.teste}>

                                    <div style={titulo}>Alterar informações</div>
                                    <div style={content}><Alteracoes endereco={false} /></div>

                                </Portal>
                            </Grid>
                        ) : (
                            <Grid item>
                                <Portal container={container.current} className={classes.teste}>
                                    <div style={titulo}>Serviços</div>
                                    <div style={content}><Servicos /></div>
                                </Portal>
                            </Grid>
                        )
                    }
                </Grid>
            </Paper>
            <Backdrop open={openBackdrop} />
        </Grid>
    );
}

export default (Card1);


