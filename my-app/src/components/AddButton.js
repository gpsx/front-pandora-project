import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const theme = createMuiTheme({
    overrides: {
        MuiFab: {
            secondary: {
                backgroundColor: "#328CC1",
                "&:hover": {
                    backgroundColor: "#696969"
                }
            }
        }
    }
})

export default function BotaoAdicionar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Fab size="medium" href="/#/service" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
            </ThemeProvider>
        </div>
    );
}