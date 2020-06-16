import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import EditImage from './EditImage';
import Alteracoes from '../../DialogView/Alteracoes/index';
import imageService from '../../../service/image/imageService'
import alteracoesService from '../../../service/alteracoesService'
import Backdrop from '../../../components/Backdrop'
import Informacoes from './Informacoes';
import localStorage from '../../../service/localStorage';

const styles = (theme) => ({
    card: {
        width: '800px',
        minWidth: '400px',
        maxWidth: '800px',
        height: '310px'
    },
    linhaVertical: {
        height: '250px',
        borderLeft: '2px solid',
        borderLeftColor: '#696969',
        float: 'left',
        marginTop: '-33.5%',
        opacity: '0.2',
    },
    alteracoes: {
        marginTop: '-30.5%',
        width: '100px',
        marginLeft: '56%'
    },
    avatar: {
        marginTop: '1%',
        width: '300px',
        paddingLeft: '28%',
    },
    informacoes: {
        marginLeft: '5%',
        marginTop: '-4%'
    },
    titulo: {
        color: 'black',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '25px',
        fontWeight: '200',
        lineHeight: '50px',
        cursor: 'pointer',
    },

});

function Card1(props) {
    const id = localStorage.obterIdUsuario();
    const [openBackdrop, setOpenBackdrop] = React.useState(false);

    const { classes } = props;

    function uploadImage(imagem) {
        setOpenBackdrop(true);
        let data = new FormData();
        data.append("image", imagem[0]);
        imageService.upload(data)
            .then(res => {
                let imagem = res.data.data.link;
                changeImage(imagem);
            }).catch(err => {
                console.log('erro ao upload da imagem')
            })
    }

    function changeImage(imagem) {
        const alteracao = { "imagem": imagem }
        alteracoesService.imgSolicitante
            (alteracao, id)
            .then(response => {
                setOpenBackdrop(false);
            })
    }


    return (
        <Paper className={classes.card}>
            <Backdrop open={openBackdrop} />
            <Grid container direction="row"
                justify="space-evenly"
                alignItems="center"
                className={classes.card}
            >
                <Grid item>
                    <div className={classes.avatar}>
                        <EditImage changeImage={uploadImage.bind(this)} />
                    </div>
                    <Informacoes />
                </Grid>

                <Grid item>
                    <div className={classes.linhaVertical} />
                </Grid>

                <Grid item>
                    <div className={classes.titulo}>Alterações</div>
                    <Alteracoes />
                </Grid>

            </Grid>
        </Paper>

    );
}

export default withStyles(styles)(Card1);