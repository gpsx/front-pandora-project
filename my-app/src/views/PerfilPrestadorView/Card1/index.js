import React, {Component} from 'react';
import { makeStyles, Grid, Paper, Link } from '@material-ui/core';
import Portal from '@material-ui/core/Portal';
import Alteracoes from '../../DialogView/Alteracoes/index';
import Informacoes from './Informacoes';
import Servicos from './Servicos';
import Teste from './EditarImagem';

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
    const alteracoes = {
        marginTop: '-35.5%',
        width: '100px',
        marginLeft: '56%',
        display:'none'
    }
    const servicos = {
        marginTop: '-32.5%',
        width: '100px',
        marginLeft: '56%',
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
        marginLeft: '5.5%',
        marginTop: '-260px',
    }
    const link = { 
        marginLeft:'25%',
    }

    const useStyles = makeStyles((theme) => ({
        alert: {
          padding: theme.spacing(1),
          margin: theme.spacing(1, 0),
          border: '1px solid',
        },
      }));

function Card1 (){
    const classes = useStyles();
    const [show, setShow] = React.useState(false);
    const container = React.useRef(null);
  
    const handleClick = () => {
      setShow(!show);
    };

        return (
            <Grid container
                direction="column"
                alignItems="flex-start"
                spacing={3}>
    
                <Paper style={card}>
                    <Grid item>
    
                        <div style={avatar}>
                            <Teste />
                        </div>
    
                        <br />
    
                        <div style={informacoes}>
                            <Informacoes />
                            <Link style={link} type="button" onClick={handleClick}>{show ? 'Voltar á Serviços..' : 'Alterar informações..'}</Link>
                        </div>
    
                        <div style={linhaVertical}></div>
                        {
                            show?
                
                            (
                            <Portal container={container.current} className={classes.teste}>
                            
                                <div style={titulo}>Alterar informações</div>
                                <Alteracoes/>
                
                            </Portal>
                            )
                            :(
                            <Portal container={container.current} className={classes.teste}>   
                            
                            <div style={titulo}>Serviços</div>
                                <Servicos/>
                                
                            </Portal>
                            )
                        }
                    </Grid>
                </Paper>
    
            </Grid>
        );
    }

export default (Card1);


