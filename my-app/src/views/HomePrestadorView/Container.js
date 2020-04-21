import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
    root: {
        marginTop: '65px',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
    }
})

function ContainerLayout(props) {
    const { children } = props;
    return (
        <Container>
            {children}
        </Container>
    );
}

export default withStyles(styles)(ContainerLayout);