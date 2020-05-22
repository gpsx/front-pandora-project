import React from 'react'
import PropTypes from 'prop-types';
import { Container, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    container: {
        marginTop: '5%',
        paddingTop: '50px',
        marginBottom: '2%',
    },
});


function ContainerPadrao(props) {

    const { classes, children } = props;

    return (
        <Container className={classes.container}>
            {children}
        </Container>
    )
}


ContainerPadrao.propTypes = {
    children: PropTypes.node.isRequired,
}

export default withStyles(styles)(ContainerPadrao)