import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from '@material-ui/core';
import Panel from '../../components/PanelCategorias';
import { listarCategorias } from './../../utils/itens'

const useStyles = makeStyles({
    root: {
        height: '60px',
        paddingLeft: '3%',
        paddingTop: '2px',
        fontSize: '18px',
    },
    input: {
        fontSize: '14px',
        width: '100%',
    },
    button: {
        backgroundColor: '#328CC1',
        borderRadius: '3px',
        width: '33px',
        height: '33px',
        paddingTop: '4px',
    },
    right: {
        marginTop: '1px',
        marginLeft: '3%',
    },
    text: {
        marginBottom: '8px',
    },
    formControl: {
        minWidth: 120,
        "& open": {

        }
    },
})

export default function Filtro(props) {
    const classes = useStyles();

    function changeCategoria(categ) {
        if (!categ) {
            props.globalChange();
        } else {
            props.globalChange(categ.idCategoria)
        }
    }

    return (
        <Paper variant="outlined" className={classes.root}>
            <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.root}
                spacing={0}
            >
                {/* <Grid item>
                    <Input className={classes.input} />
                </Grid>
                <Grid item>
                    <IconButton className={classes.button}>
                        <SearchIcon />
                    </IconButton>
                </Grid> */}
                <Grid item className={classes.text}>
                    Categoria:
                </Grid>
                <Grid item className={classes.right}>
                    <Panel categorias={listarCategorias()}
                        changeCategoria={changeCategoria} />
                </Grid>
            </Grid>


        </Paper>
    );
}

