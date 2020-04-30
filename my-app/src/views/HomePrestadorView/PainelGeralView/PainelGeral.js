import React from 'react'
import Menu from './../../../components/MenuPrestador'
import { Grid } from '@material-ui/core';
import Container from './../Container'

function PainelGeral() {
    return (
        <>
            <Menu />
            <Container>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}

export default PainelGeral;