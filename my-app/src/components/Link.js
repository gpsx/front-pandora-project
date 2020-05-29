import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core';

export default withStyles((theme) => ({
    root: {
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '20px',
        fontWeight: '200',
        lineHeight: '50px',
        cursor: 'pointer',
        '&:hover': {
            color: '#0B3C5D',
        },
    }
}))(Link)

