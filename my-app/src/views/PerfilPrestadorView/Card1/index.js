import React from 'react';
import { makeStyles, Grid, Paper, Link } from '@material-ui/core';
import Portal from '@material-ui/core/Portal';
import Alteracoes from '../../DialogView/Alteracoes/index';
import imageService from '../../../service/imageService'
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
    const classes = useStyles();
    const [show, setShow] = React.useState(false);
    const container = React.useRef(null);

    const handleClick = () => {
        setShow(!show);
    };

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
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}>

            <Paper style={card}>
                <Grid item>

                    <div style={avatar}>
                        <EditImage changeImage={changeImage.bind(this)} />
                    </div>

                    <br />

                    <div style={informacoes}>
                        <Informacoes />
                        <Link style={link} type="button" onClick={handleClick}>{show ? 'Voltar á Serviços..' : 'Alterar informações..'}</Link>
                    </div>

                    <div style={linhaVertical}></div>

                    {
                        show ?

                            (
                                <Grid item>
                                    <Portal container={container.current} className={classes.teste}>

                                        <div style={titulo}>Alterar informações</div>
                                        <div style={content}><Alteracoes endereco={false} /></div>

                                    </Portal>
                                </Grid>
                            )
                            : (
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

        </Grid>
    );
}

export default (Card1);


