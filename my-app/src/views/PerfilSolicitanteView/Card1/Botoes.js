import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({

    link: {
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '20px',
        fontWeight: '200',
        lineHeight: '50px',
        '&:hover': {
            color: '#0B3C5D',
        },
        width:'50%'
    },

    links: {
        width:'500px',
    },

});

function Botoes(props) {

    const { classes } = props;
    const preventDefault = (event) => event.preventDefault();

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            spacing={3}>

                <Grid item className={classes.links}>
                    <Typography >
                        <div><Link href="#" onClick={preventDefault} style={{ textDecoration: 'none' }} className={classes.link}>
                            SERVIÇOS EM ANDAMENTO
                        </Link>
                        </div>
                        <div>
                            <Link href="#" onClick={preventDefault} style={{ textDecoration: 'none' }} className={classes.link}>
                                SERVIÇOS FINALIZADOS
                        </Link>
                        </div>
                        <div>
                            <Link href="#" onClick={preventDefault} style={{ textDecoration: 'none' }} className={classes.link}>
                                CHAT
                        </Link>
                        </div>
                    </Typography>
                </Grid>
        </Grid>
    );
}

export default withStyles(styles)(Botoes);