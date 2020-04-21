import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

export const styles = (theme) => ({
  root: {
    height: 60,
    backgroundColor: '#FFFFFF',
    [theme.breakpoints.up('sm')]: {
      height:60,
    },
  },
});

export default withStyles(styles)(Toolbar);