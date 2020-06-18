import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../main/ProvedorAutenticacao';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import Typography from './Typography';
import Link from '@material-ui/core/Link';
import logoImg from './../assets/logo.png';
import Button from './Button'
import AppBar from './AppBar';
import Toolbar from './Toolbar';


const styles = (theme) => ({
    title: {
        fontSize: 20,
    },

    image: {
        height: '40px',
        width: '40px',
        maxHeight: '40px',
        maxWidth: '40px',
    },

    toolbar: {
        justifyContent: 'space-between',
    },

    left: {
        flex: 1,
        marginLeft: '5%',
        display: 'flex',
    },

    middle: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },

    middleLink: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#696969',
        marginLeft: theme.spacing(5),
        '&:hover': {
            color: '#328CC1',
        },
    },

    name: {
        color: '#0B3C5D',
        fontFamily: 'Roboto',
        paddingLeft: '10px',
        paddingTop: '5px',
    },

    right: {
        flex: 1,
        marginRight: '3%',
        display: 'flex',
        justifyContent: 'flex-end',
    },

    rightButton: {
        marginLeft: theme.spacing(1),
    },

    whiteButton: {
        marginLeft: theme.spacing(1),
        backgroundColor: '#FFFFFF',
        border: '1px solid #328CC1',
        color: '#328CC1',
        '&:hover': {
            color: '#FFFFFF',
            boxShadow: 'none',
            backgroundColor: "#328CC1",
        },
        '&:active, &:focus': {
            boxShadow: 'none',
        },
    },
    redButton: {
        marginLeft: theme.spacing(1),
        backgroundColor: '#FFFFFF',
        border: '1px solid #C40233',
        color: '#C40233',
        '&:hover': {
            color: '#FFFFFF',
            boxShadow: 'none',
            backgroundColor: "#C40233",
            border: '1px solid #C40233',
        },
        '&:active, &:focus': {
            boxShadow: 'none',
        },
    },
});

function Menu(props) {

    const context = useContext(AuthContext);

    const { classes } = props;

    function logoff() {
        context.encerrarSessao();
        props.history.push('/login');
    }

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left} >

                        <img src={logoImg} alt='Logo Pandora' className={classes.image} />
                        <br />
                        <Typography align="center" variant="h6" className={classes.name}>
                            Projeto Pandora
                        </Typography>


                    </div>
                    <div className={classes.middle}>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            className={classes.middleLink}
                            href="/#/home-solicitante"
                        >
                            {'Home'}
                        </Link>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            className={classes.middleLink}
                            href="/#/meus-servicos"
                        >
                            {'Meus Serviços'}
                        </Link>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            className={classes.middleLink}
                            href="/#/chat-solicitante"
                        >
                            {'Chat'}
                        </Link>
                    </div>
                    <div className={classes.right}>
                        <Button
                            variant="contained"
                            size="small"
                            className={classes.whiteButton}
                            component="a"
                            href="/#/profile-solicitante"
                        >
                            Perfil
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            className={classes.redButton}
                            component="a"
                            onClick={logoff}
                        >
                            <ExitToAppRoundedIcon />
                        </Button>

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Menu));