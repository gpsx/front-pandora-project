import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Panel from '../../components/PanelCategorias';
import { listarCategorias } from './../../utils/itens'

const useStyles = makeStyles({
    root: {
        height: '60px',
        paddingLeft: '3%',
        paddingTop: '2px',
        fontSize: '18px',
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
    input: {
        marginLeft: '10px',
        marginBottom: '6px',
        marginRigth: '5px',
    },
    text: {
        marginLeft: '10px',
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
    const [filtro, setFiltro] = useState(0)

    function changeCategoria(categ) {
        if (!categ) {
            props.globalChange();
        } else {
            props.globalChange(categ.idCategoria)
        }
    }

    const handleChange = (value) => {
        setFiltro(value);
        console.log(filtro)
    };

    return (
        <Paper variant="outlined" className={classes.root}>
            <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.root}
                spacing={0}
            >

                <Grid item>
                    <FormControl className={classes.formControl}>
                        <NativeSelect
                            value={filtro}
                            onChange={(e) => handleChange(e.target.value)}
                        >
                            <option value={0}>Nenhum</option>
                            <option value={1}>Texto</option>
                            <option value={2}>Categoria</option>
                            <option value={3}>Avaliação</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>

                {/* <Grid item className={classes.text}>
                    Texto:
                </Grid>
                <Grid item className={classes.input}>
                    <Input />
                </Grid> */}

                {filtro === 0 ? (
                    <div>

                    </div>
                ) : filtro === 1 ? (
                    <div>

                    </div>
                ) : filtro === 2 ? (
                    <div visible={false}>
                        <Grid item className={classes.right}>
                            <Panel categorias={listarCategorias()}
                                changeCategoria={changeCategoria} />
                        </Grid>
                    </div>
                ) : filtro === 3 ? (
                    <div>
                        AVALIAÇÃO
                    </div>
                ) : (
                                    <div>
                                        TA ERRADO
                                    </div>
                                )
                }







            </Grid>

        </Paper>
    );
}

