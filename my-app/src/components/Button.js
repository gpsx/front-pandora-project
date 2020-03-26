import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        background: '#0B3C5D',
        textTransform: 'none',
        border: '1px solid',
        lineHeight: 1.5,
        borderRadius: 5,
        border: 0,
        color: 'white',
        background: '#0B3C5D',
        height: 48,
        '&:hover': {
            background: '#696969',
        },

    },
});

export default function ClassesNesting(props) {
    const classes = useStyles();

    return (
            <Button variant="contained" classes={{ root: classes.root, }} >
                {props.label}
            </Button>

    );
}