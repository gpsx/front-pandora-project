import React from 'react'
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
    h1: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '200',
        lineHeight: '28px',
        fontSize: '24px',
    },
});

function H1(props) {
    const { classes } = props;

    return (
        <h1 className={classes.h1}>
            {props.children}
        </h1>
    );
}

export default withStyles(styles)(H1);
