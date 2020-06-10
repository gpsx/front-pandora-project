import React from 'react';
import PropTypes from 'prop-types';
import { fade, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const styles = ((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 2,
        position: 'relative',
        border: '1px solid #696969',
        fontSize: 16,
        padding: '8px 8px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: 'Roboto',
        '&:focus': {
            boxShadow: `${fade('#328CC1', 0.25)} 0 0 0 0.1rem`,
            borderColor: '#328CC1',
        },
        '&:disabled': {
            backgroundColor: '#d3d3d3',
        },
    },
}));

function Input(props) {
    const { children, ...other } = props;
    return (
        <InputBase {...other}>
            {children}
        </InputBase>
    );
}

Input.propTypes = {
    children: PropTypes.node
};
export default withStyles(styles)(Input);
