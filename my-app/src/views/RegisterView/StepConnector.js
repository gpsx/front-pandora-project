import { withStyles } from '@material-ui/core/styles';
import { StepConnector } from '@material-ui/core';

export default withStyles((theme) => ({
    root:{
        backgroundColor: '#328CC1',
    },
    alternativeLabel: {
        top: 10,
        left: "calc(-50% + 16px)",
        right: "calc(50% + 16px)"
      },
      active: {
        "& $line": {
          borderColor: "#328CC1"
        }
      },
      completed: {
        "& $line": {
          borderColor: "#328CC1"
        }
      },
      line: {
        borderColor: "#eaeaf0",
        borderTopWidth: 3,
        borderRadius: 1
      }

}))(StepConnector);