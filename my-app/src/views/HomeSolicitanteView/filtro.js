import React, { useState } from 'react'
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Panel from '../../components/PanelCategorias';
import Estrelinhas from '../../components/RatingStars';
import { listarCategorias } from '../../utils/itens'
import { Paper, Grid, TextField, Select } from '@material-ui/core';
import { MenuItem, FormControl } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        height: '80px',
        paddingLeft: '2%',
        fontSize: '18px',
    },
    padrao: {
        height: '40px',
    },
    categorias: {
        marginTop: '6px',
        marginBottom: '-3px',
    },
    iconButton: {
        marginLeft: '-22px',
    },
    estrelas: {
        marginTop: '25px',
    },
})

const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            body1: {
                display: "none"
            }
        },
    }
})

export default function Filtro(props) {
    const classes = useStyles();
    const [filtro, setFiltro] = useState(0)
    const [texto, setTexto] = useState(null)

    const handleChange = event => {
        setFiltro(event.target.value);
    };

    function changeCategoria(categ) {
        if (!categ) {
            props.globalChanges(null);
        } else {
            props.globalChanges("categoria", categ.idCategoria)
        }
    }

    return (
        <Paper variant="outlined" >
            <Grid container className={classes.root}
                direction="row" justify="flex-start"
                alignItems="center" spacing={3}
            >

                <Grid item>
                    <FormControl variant="outlined">
                        <Select
                            className={classes.padrao}
                            value={filtro}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Categoria</MenuItem>
                            <MenuItem value={1}>Texto</MenuItem>
                            <MenuItem value={2}>Avaliação</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


                {filtro === 0 ? (
                    <div className={classes.categorias}>
                        <Grid item>
                            <Panel categorias={listarCategorias()}
                                changeCategoria={changeCategoria} />
                        </Grid>
                    </div>

                ) : filtro === 1 ? (
                    <>
                        <Grid item>
                            <TextField
                                size="small"
                                className={classes.padrao}
                                onChange={(e) => setTexto(e.target.value)}
                                variant="outlined" />
                        </Grid>
                        <Grid item>
                            <IconButton className={classes.iconButton}
                                color="primary" aria-label="serarch" component="span"
                                onClick={() => props.globalChanges("palavra", texto)}>
                                <Search />
                            </IconButton>
                        </Grid>
                    </>

                ) : filtro === 2 ? (
                    <div className={classes.estrelas}>
                        <Grid item>
                            <ThemeProvider theme={theme}>
                                <Estrelinhas getValue={(e) => props.globalChanges("nota", e)} />
                            </ThemeProvider>
                        </Grid>
                    </div>

                ) : (
                                <div>
                                    Error 404
                                </div>
                            )
                }
            </Grid>

        </Paper >
    );
}

