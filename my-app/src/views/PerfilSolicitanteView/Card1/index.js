import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import EditImage from './EditImage';
import Alteracoes from '../../DialogView/Alteracoes/index';
import imageService from '../../../service/image/imageService'
import Informacoes from './Informacoes';

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

    const { classes } = props;

    function changeImage(imagem) {
        let imgUrl = null;
        let data = new FormData();
        data.append("image", imagem[0]);
        imageService.uploadImagem(data)
            .then(response => {
                imgUrl = response.data.data.link;
                console.log('imagem carregada')
                //Aqui chama o mudar imagem
            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <Paper className={classes.card}>
            <Grid container direction="row"
                justify="space-evenly"
                alignItems="center"
                className={classes.card}
            >
                <Grid item>
                    <div className={classes.avatar}>
                        <EditImage changeImage={changeImage.bind(this)} />
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