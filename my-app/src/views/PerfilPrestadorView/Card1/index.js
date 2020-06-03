import React, {useEffect} from 'react';
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
    width: '800px',
    minWidth: '400px',
    maxWidth: '800px',
    height: '310px'
}

const linhaVertical = {
    height: '250px',
    borderLeft: '2px solid',
    borderLeftColor: '#696969',
    float: 'left',
    marginTop: '-33.5%',
    opacity: '0.2',
}

const avatar = {
    marginTop: '1%',
    width: '300px',
    paddingLeft: '28%',
}
const titulo = {
    color: 'black',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: '25px',
    fontWeight: '200',
    lineHeight: '50px',
    cursor: 'pointer',
}
const link = {
    marginLeft: '25%',
    cursor: 'pointer',
}

const color = {
    width: '300px',
    heigth: 'auto',
}

const margin = {

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
    const portalRef = React.useRef();

    const handleClick = () => {
        setShow(!show);
    };

    useEffect(() => {
        handleClick();
    }, [] );

    function uploadImage(imagem) {
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

        <Paper style={card}>
            <Grid container direction="row"
                justify="space-evenly"
                alignItems="center"
                style={card}
            >

                <Grid item style={margin}>
                    <div style={avatar}>
                        <EditImage changeImage={uploadImage.bind(this)} />
                    </div>
                    <Informacoes />
                    <Link style={link} type="button" onClick={handleClick}>{show ? 'Voltar á Serviços..' : 'Alterar informações..'}</Link>
                </Grid>

                <Grid item>
                    <div style={linhaVertical} />
                </Grid>
                {show ?
                    (
                        <Portal container={portalRef.current}>
                            <div style={titulo}>Alterar informações</div>
                            <Alteracoes endereco={false} />
                        </Portal>
                    ) : (
                        <Portal container={portalRef.current} >
                            <div style={titulo}>Serviços</div>
                            <Servicos />
                        </Portal>
                    )
                }
                <Grid item>
                    <div style={color} ref={portalRef}>

                    </div>
                </Grid>
            </Grid>

        </Paper>
    );
}

export default (Card1);


